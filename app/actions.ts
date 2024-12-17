"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function signOut() {
	const cookieStore = await cookies()
	cookieStore.delete("username")
	redirect(
		`/dashboard/oauth2/sign_out?rd=https://${process.env.AUTH_DOMAIN}/realms/openepi/protocol/openid-connect/logout?client_id=openepi-api-gateway`
	)
}
