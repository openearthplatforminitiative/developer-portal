"use client"

import { Skeleton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { ApplicationRegistrationForm } from "../components/ApplicationRegistrationForm"
import { ApplicationsTable } from "../components/ApplicationsTable"
import { getClients } from "./actions"

type Application = {
	client_name: string
	client_id: string
	client_secret: string
}

const dummy_applications = [
	{
		client_name: "Test",
		client_id: "kroglid-Test",
		client_secret: "ajfiajwifhq3j4iw12j12io4j3nsdkonawipdaw",
	},
	{
		client_name: "Test2",
		client_id: "kroglid-Test2",
		client_secret: "ajfiajwifhq3j4iw12j12io4j3nsdkonawipdaw",
	},
]
export const Application = () => {
	const [loading, setLoading] = useState(true)
	const [applications, setApplications] = useState<Application[]>([])

	const fetchClients = async () => {
		const clients = await getClients()
		if (clients) setApplications(clients)
		else setApplications(dummy_applications)
	}

	const initFetch = async () => {
		await fetchClients()
		setLoading(false)
	}

	useEffect(() => {
		initFetch()
	}, [])

	return (
		<>
			{loading ? (
				<Skeleton variant="rectangular" width="100%" height="60px" />
			) : applications.length == 0 ? (
				<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4">
					No applications registered yet. Click the button below to register a
					new client.
				</Typography>
			) : (
				<ApplicationsTable
					applications={applications}
					onSuccess={fetchClients}
				/>
			)}
			<ApplicationRegistrationForm onSuccess={fetchClients} />
		</>
	)
}
