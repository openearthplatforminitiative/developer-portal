"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function signOut() {
	const cookieStore = await cookies()
	cookieStore.delete("username")
	// return `/dashboard/oauth2/sign_out?rd=https://${process.env.auth_domain}/realms/openepi/protocol/openid-connect/logout`
	redirect(
		`/dashboard/oauth2/sign_out?rd=https://auth-dev3.openepi.io/realms/openepi/protocol/openid-connect/logout?client_id=openepi-api-gateway`
	)
}
