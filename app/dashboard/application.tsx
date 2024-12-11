"use client"

import { Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { ApplicationRegistrationForm } from "../components/ApplicationRegistrationForm"
import { ApplicationsTable } from "../components/ApplicationsTable"

type applicationProps = {
	apiDomain: string
}

export const Application = ({ apiDomain }: applicationProps) => {
	type Application = {
		client_name: string
		client_id: string
		client_secret: string
	}

	const [applications, setApplications] = useState<Application[]>([])
	const [submitting, setSubmitting] = useState(false)
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const fetchClients = async () => {
		fetch(`https://${apiDomain}/client-registration/clients/`, {
			method: "GET",
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.clients) {
					console.log(data.clients)
					setApplications(data.clients)
				}
			})
	}

	useEffect(() => {
		fetchClients()
	}, [])

	const createClient = async (name: string) => {
		await fetch(
			`https://${apiDomain}/client-registration/clients/?client_name=${name}`,
			{
				method: "POST",
				credentials: "include",
			}
		)
		await fetchClients()
	}

	const updateClient = async (clientId: string, clientName: string) => {
		await fetch(
			`https://${apiDomain}/client-registration/clients/${clientId}/?client_name=${clientName}`,
			{
				method: "PUT",
				credentials: "include",
			}
		)
		await fetchClients()
	}

	const deleteClient = async (clientId: string) => {
		await fetch(
			`https://${apiDomain}/client-registration/clients/${clientId}`,
			{
				method: "DELETE",
				credentials: "include",
			}
		)
		await fetchClients()
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitting(true)
		const formData = new FormData(e.currentTarget)
		const name = formData.get("name") as string
		await createClient(name)
		setSubmitting(false)
		handleClose()
	}

	return (
		<>
			{applications.length == 0 ? (
				<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4">
					No applications registered yet. Click the button below to register a
					new client.
				</Typography>
			) : (
				<ApplicationsTable
					applications={applications}
					onDelete={deleteClient}
					onRenew={updateClient}
				/>
			)}
			<ApplicationRegistrationForm
				onSubmit={handleSubmit}
				onCancel={handleClose}
				submitting={submitting}
			/>
		</>
	)
}
