"use client"

import { Add } from "@mui/icons-material"
import { Box, Button, Modal, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ClientRegistrationForm } from "../components/ApplicationRegistrationForm"
import { ApplicationsTable } from "../components/ApplicationsTable"

const Page = () => {
	const router = useRouter()

	const isLoggedIn = () => {
		return localStorage.getItem("login") === "true"
	}

	useEffect(() => {
		if (!isLoggedIn()) {
			router.push("..")
		}
	}, [router])

	type Application = {
		name: string
		clientId: string
		clientSecret: string
	}

	const applicationsMockup = [
		{
			name: "Test",
			clientId: "87654321",
			clientSecret: "ahj71jda91233jf191239jdo91",
		},
		{
			name: "Test",
			clientId: "12345678",
			clientSecret: "gahiojr32h31471fni1h199028",
		},
	]

	const [applications, setApplications] =
		useState<Application[]>(applicationsMockup)
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const name = formData.get("name") as string
		console.log(name)
		// generate a client id randomly, only using digits
		const clientId = Math.random().toString().slice(2, 10)
		// generate a client secret randomly, using digits and letters
		const clientSecret = Math.random().toString(36).slice(2, 10)
		setApplications([...applications, { name, clientId, clientSecret }])
		handleClose()
	}

	const deleteClient = (clientId: string) => {
		setApplications(
			applications.filter((client) => client.clientId !== clientId)
		)
	}

	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Box className="flex flex-col gap-8 items-start">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					Dashboard
				</Typography>
				<Typography className="text-xl xs:text-2xl mb-10">
					To avoid rate limits, you can register your application here. The
					client id and client secret will be generated for you. These can be
					used to generate a token to authenticate your requests in the
					authorization header. See examples below.
				</Typography>
				<Box className="flex w-full justify-between items-center">
					<Typography variant="h2" className="text-3xl xs:text-4xl w-fit">
						Applications
					</Typography>
					<Button
						variant="contained"
						className="flex gap-2 bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
						onClick={handleOpen}
					>
						Register Application <Add />
					</Button>
				</Box>
				<Box className="w-full">
					{applications.length == 0 ? (
						<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4 my-4">
							No registered clients yet. Click the button below to register a
							new client.
						</Typography>
					) : (
						<ApplicationsTable
							applications={applications}
							onDelete={deleteClient}
						/>
					)}
				</Box>
				<Modal
					open={open}
					onClose={handleClose}
					className="flex items-center justify-center"
				>
					<Box className="bg-neutral-100 max-w-[500px] w-[90%] p-4 rounded-2xl flex flex-col gap-5">
						<Typography
							variant="h2"
							className="text-3xl xs:text-4xl w-fit mb-4"
						>
							Register Client
						</Typography>
						<ClientRegistrationForm
							onSubmit={handleSubmit}
							onCancel={handleClose}
						/>
					</Box>
				</Modal>
			</Box>
		</Box>
	)
}

export default Page
