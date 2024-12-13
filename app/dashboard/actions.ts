"use server"

import { cookies } from "next/headers"

export async function getClients() {
	const cookieStore = await cookies()
	const cookie = cookieStore.get("__Secure-openepi_user")
	return await fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/`,
		{
			method: "GET",
			credentials: "include",
			headers: {
				Cookie: `__Secure-openepi_user=${cookie?.value}`,
			},
		}
	)
		.then((res) => res.json())
		.then((data) => data.clients)
}

export async function updateClient(clientId: string, clientName: string) {
	const cookieStore = await cookies()
	const cookie = cookieStore.get("__Secure-openepi_user")
	return await fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/${clientId}/?client_name=${clientName}`,
		{
			method: "PUT",
			credentials: "include",
			headers: {
				Cookie: `__Secure-openepi_user=${cookie?.value}`,
			},
		}
	).then((res) => res.json())
}

export async function deleteClient(clientId: string) {
	const cookieStore = await cookies()
	const cookie = cookieStore.get("__Secure-openepi_user")
	return await fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/${clientId}`,
		{
			method: "DELETE",
			credentials: "include",
			headers: {
				Cookie: `__Secure-openepi_user=${cookie?.value}`,
			},
		}
	).then((res) => res.json())
}

export async function createClient(clientName: string) {
	const cookieStore = await cookies()
	const cookie = cookieStore.get("__Secure-openepi_user")
	return await fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/`,
		{
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ client_name: clientName }),
			headers: {
				Cookie: `__Secure-openepi_user=${cookie?.value}`,
			},
		}
	).then((res) => res.json())
}
