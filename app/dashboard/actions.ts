"use server"

import { getAccessToken } from "@/lib/auth-utils"

export async function getClients() {
	const accessToken = await getAccessToken()
	return fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/`,
		{
			method: "GET",
			credentials: "include",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err)
			return {
				errors: [
					{
						message: `Seems like the problem is on our side. Please try again later.`,
					},
				],
			}
		})
}

export async function updateClient(clientId: string, clientName: string) {
	const accessToken = await getAccessToken()
	return fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/${clientId}/?client_name=${clientName}`,
		{
			method: "PUT",
			credentials: "include",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
		.then(async (res) => res.json())
		.catch((err) => {
			console.error(err)
			return {
				errors: [
					{
						message: `Seems like the problem is on our side. Please try again later.`,
					},
				],
			}
		})
}

export async function deleteClient(clientId: string) {
	const accessToken = await getAccessToken()
	return fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/${clientId}`,
		{
			method: "DELETE",
			credentials: "include",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
		.then((res) => (res.ok ? true : res.json()))
		.catch((err) => {
			console.error(err)
			return {
				errors: [
					{
						message: `Seems like the problem is on our side. Please try again later.`,
					},
				],
			}
		})
}

export async function createClient(clientName: string) {
	const accessToken = await getAccessToken()
	return fetch(
		`https://${process.env.API_DOMAIN}/client-registration/clients/?client_name=${clientName}`,
		{
			method: "POST",
			credentials: "include",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
		.then(async (res) => res.json())
		.catch((err) => {
			console.error(err)
			return {
				errors: [
					{
						message: `Seems like the problem is on our side. Please try again later.`,
					},
				],
			}
		})
}
