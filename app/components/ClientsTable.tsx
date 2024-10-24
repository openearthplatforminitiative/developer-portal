import { Visibility, VisibilityOff, Delete } from "@mui/icons-material"
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
} from "@mui/material"
import { useState } from "react"

type Client = {
	name: string
	clientId: string
	clientSecret: string
	showSecret?: boolean
}

type ClientsTableProps = {
	clients: Client[]
	onDelete: (clientId: string) => void
}

export const ClientsTable = (props: ClientsTableProps) => {
	const [secret, setShowSecret] = useState<string | false>(false)

	const isShowSecret = (clientId: string) => {
		return secret === clientId
	}

	const showSecret = (clientId: string) => {
		setShowSecret(clientId)
	}

	const hideSecret = () => {
		setShowSecret(false)
	}

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell>Client ID</TableCell>
					<TableCell>Client Secret</TableCell>
					<TableCell>Actions</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.clients.map((client: Client) => (
					<TableRow key={client.clientId}>
						<TableCell>{client.name}</TableCell>
						<TableCell>{client.clientId}</TableCell>
						<TableCell>
							{isShowSecret(client.clientId) ? client.clientSecret : "********"}
							<IconButton
								aria-label="add an alarm"
								onClick={() =>
									isShowSecret(client.clientId)
										? hideSecret()
										: showSecret(client.clientId)
								}
							>
								{isShowSecret(client.clientId) ? (
									<Visibility />
								) : (
									<VisibilityOff />
								)}
							</IconButton>
						</TableCell>
						<TableCell>
							<IconButton
								aria-label="delete"
								onClick={() => props.onDelete(client.clientId)}
							>
								<Delete />
							</IconButton>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
