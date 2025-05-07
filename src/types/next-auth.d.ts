import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
	interface user {
		id: string
		name: string
		firstName: string
		lastName: string
		username: string
		email: string
	}
	interface Session extends DefaultSession {
		token: JWT
		user?: user
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
		user?: user
	}
}
