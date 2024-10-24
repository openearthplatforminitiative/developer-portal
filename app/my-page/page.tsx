"use client"

import { Add, Delete, Visibility, VisibilityOff } from "@mui/icons-material"
import {
	Box,
	Button,
	Card,
	FormControl,
	IconButton,
	InputLabel,
	Modal,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ClientRegistrationForm } from "../components/ClientRegistrationForm"
import { ClientsTable } from "../components/ClientsTable"
import { deleteAppClientCache } from "next/dist/server/lib/render-server"

const Page = () => {
	const router = useRouter()

	const isLoggedIn = () => {
		return localStorage.getItem("login") === "true"
	}

	const signOut = () => {
		localStorage.removeItem("login")
		router.push("..")
	}

	useEffect(() => {
		if (!isLoggedIn()) {
			router.push("..")
		}
	}, [router])

	type Client = {
		name: string
		clientId: string
		clientSecret: string
		showSecret?: boolean
	}

	const [clients, setClients] = useState<Client[]>([])
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
		setClients([...clients, { name, clientId, clientSecret }])
		handleClose()
	}

	const deleteClient = (clientId: string) => {
		setClients(clients.filter((client) => client.clientId !== clientId))
	}

	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Box className="flex flex-col gap-8 items-start">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					Welcome Firstname Lastname
				</Typography>
				<Typography className="text-xl xs:text-2xl mb-20">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Typography>
				<Typography variant="h2" className="text-3xl xs:text-4xl w-fit">
					Clients
				</Typography>
				<Box className="w-full">
					{clients.length == 0 ? (
						<Typography className="text-xl xs:text-2xl bg-neutralVariant-95 p-4 my-4">
							No registered clients yet. Click the button below to register a
							new client.
						</Typography>
					) : (
						<ClientsTable clients={clients} onDelete={deleteClient} />
					)}
				</Box>
				<Button
					variant="contained"
					className="flex gap-2 bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
					onClick={handleOpen}
				>
					Register Client <Add />
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					className="flex items-center justify-center"
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
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
				<Box className="flex flex-col">
					<Button
						variant="contained"
						className="bg-neutral-100 text-primary-main rounded-full border-2 border-primary-main normal-case shadow-none text-xl px-8 py-4"
						onClick={() => signOut()}
					>
						Sign Out
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Page
