"use client"

import { Button, Skeleton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { ApplicationRegistrationForm } from "../components/ApplicationRegistrationForm"
import { ApplicationsTable } from "../components/ApplicationsTable"
import { getClients } from "./actions"
import { type Application as ApplicationType } from "../types/application"

export const Application = () => {
	const [loading, setLoading] = useState(true)
	const [applications, setApplications] = useState<ApplicationType[]>([])
	const [error, setError] = useState<string>()

	const fetchClients = async () => {
		const clients = await getClients()
		if (clients.errors !== undefined) {
			setError("Could not fetch applications")
		} else setApplications(clients)
	}

	const handleNewApplication = async (client: ApplicationType) => {
		setApplications([...applications, client])
	}

	const handleDelete = (client_id: string) => {
		setApplications(applications.filter((app) => app.client_id !== client_id))
	}

	const handleUpdate = async (client: ApplicationType) => {
		const index = applications.findIndex(
			(app) => app.client_id === client.client_id
		)
		const newApplications = [...applications]
		newApplications[index] = client
		setApplications(newApplications)
	}

	const refetch = async () => {
		setLoading(true)
		await fetchClients()
		setLoading(false)
	}

	useEffect(() => {
		refetch()
	}, [])

	return (
		<>
			{loading ? (
				<Skeleton variant="rectangular" width="100%" height="60px" />
			) : error ? (
				<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4">
					{error}
					<Button onClick={refetch}>Try Again</Button>
				</Typography>
			) : applications.length == 0 ? (
				<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4">
					No applications registered yet. Click the button below to register a
					new client.
				</Typography>
			) : (
				<ApplicationsTable
					applications={applications}
					onDelete={handleDelete}
					onUpdate={handleUpdate}
				/>
			)}
			<ApplicationRegistrationForm onSuccess={handleNewApplication} />
		</>
	)
}
