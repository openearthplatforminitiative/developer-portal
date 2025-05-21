import KeycloakProvider from "next-auth/providers/keycloak"
import { getServerSession, type NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"

const keycloakProvider = KeycloakProvider({
	clientId: process.env.AUTH_CLIENT_ID!,
	clientSecret: process.env.AUTH_CLIENT_SECRET!,
	issuer: process.env.AUTH_CLIENT_ISSUER!,
	profile(profile) {
		return {
			id: profile.sub,
			name: profile.given_name.trim() + " " + profile.family_name.trim(),
			firstName: profile.given_name.trim(),
			lastName: profile.family_name.trim(),
			username: profile.preferred_username,
			email: profile.email,
			image: profile.picture,
		}
	},
})

const refreshAccessToken = async (token: JWT) => {
	try {
		const response = await fetch(
			`${process.env.AUTH_CLIENT_ISSUER}/protocol/openid-connect/token`,
			{
				method: "POST",
				body: new URLSearchParams({
					grant_type: "refresh_token",
					refresh_token: token.refresh_token,
					client_id: process.env.AUTH_CLIENT_ID!,
					client_secret: process.env.AUTH_CLIENT_SECRET!,
				}),
			}
		)
		const newToken = await response.json()
		if (!response.ok) {
			throw newToken
		}
		return {
			...token,
			access_token: newToken.access_token,
			id_token: newToken.id_token,
			refresh_token: newToken.refresh_token,
			expires_at: Date.now() + newToken.expires_in * 1000,
		}
	} catch (error) {
		console.log("Failed to refresh token", error)
		return {
			...token,
			error: "RefreshAccessTokenError",
		}
	}
}

export const authOptions: NextAuthOptions = {
	providers: [keycloakProvider],
	callbacks: {
		async jwt({ token, account, user }) {
			let newToken: JWT = token
			if (user) {
				newToken = {
					...token,
					user: user,
				}
			}
			if (account) {
				newToken = {
					...newToken,
					access_token: account.access_token!,
					id_token: account.id_token!,
					refresh_token: account.refresh_token!,
					expires_at: account.expires_at! * 1000,
				}
			} else if (Date.now() < token.expires_at) {
				return newToken
			} else {
				newToken = await refreshAccessToken(token)
			}
			return newToken
		},
		async session({ session, token }) {
			if (token.user) session.user = token.user
			session.token = token
			session.error = token.error
			return session
		},
	},
	events: {
		async signOut({ token }) {
			const logOutUrl = new URL(
				`${keycloakProvider.options?.issuer}/protocol/openid-connect/logout`
			)
			logOutUrl.searchParams.set("id_token_hint", token.id_token)
			await fetch(logOutUrl)
		},
	},
}

export async function getAccessToken(): Promise<string | undefined> {
	const session = await getServerSession(authOptions)
	if (!session) {
		console.error("No session found")
		return undefined
	}
	return session.token.access_token
}
