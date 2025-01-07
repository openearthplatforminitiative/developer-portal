import KeycloakProvider from "next-auth/providers/keycloak"
import { getServerSession, type NextAuthOptions } from "next-auth"

const keycloakProvider = KeycloakProvider({
	clientId: process.env.AUTH_CLIENT_ID!,
	clientSecret: process.env.AUTH_CLIENT_SECRET!,
	issuer: process.env.AUTH_CLIENT_ISSUER!,
	profile(profile) {
		return {
			id: profile.sub,
			name: profile.preferred_username,
			email: profile.email,
			image: profile.picture,
		}
	},
})

export const authOptions: NextAuthOptions = {
	debug: true,
	providers: [keycloakProvider],
	callbacks: {
		async jwt({ token, account }) {
			if (account?.access_token) {
				token.accessToken = account.access_token
			}
			if (account?.id_token) {
				token.id_token = account.id_token
			}
			return token
		},
		async session({ session, token }) {
			if (session.user) session.user
			session.token = token
			return session
		},
	},
	events: {
		async signOut({ token }) {
			const logOutUrl = new URL(
				`${keycloakProvider.options?.issuer}/protocol/openid-connect/logout`
			)
			logOutUrl.searchParams.set("id_token_hint", token.id_token)
			console.log(await fetch(logOutUrl))
		},
	},
}

export async function getAccessToken(): Promise<string | undefined> {
	const session = await getServerSession(authOptions)
	if (!session) {
		console.error("No session found")
		return undefined
	}
	return session.token.accessToken
}
