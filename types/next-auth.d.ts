import NextAuth, { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
	interface Session extends DefaultSession {
		token: Token
		user?: {
			preferred_username?: string
		} & DefaultSession["user"]
	}
}

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT extends DefaultJWT {
		accessToken: string
		id_token: string
	}
}
