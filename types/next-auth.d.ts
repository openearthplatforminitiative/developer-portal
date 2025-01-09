import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
	interface Session extends DefaultSession {
		token: JWT
		user?: {
			preferred_username?: string
		} & DefaultSession["user"]
		error?: string
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		access_token: string
		id_token: string
		refresh_token: string
		expires_at: number
		error?: string
	}
}
