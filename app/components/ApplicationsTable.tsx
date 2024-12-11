import { Visibility, VisibilityOff, Clear, Refresh } from "@mui/icons-material"
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	Tooltip,
} from "@mui/material"
import { useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"

type application = {
	client_name: string
	client_id: string
	client_secret: string
	showSecret?: boolean
}

type ApplicationsTableProps = {
	applications: application[]
	onDelete: (clientId: string) => void
	onRenew: (clientId: string, clientName: string) => void
}

export const ApplicationsTable = (props: ApplicationsTableProps) => {
	const [secret, setShowSecret] = useState<string | false>(false)

	const isShowSecret = (applicationId: string) => {
		return secret === applicationId
	}

	const showSecret = (applicationId: string) => {
		setShowSecret(applicationId)
	}

	const hideSecret = () => {
		setShowSecret(false)
	}

	const TableHeadCell = (props: any) => (
		<TableCell {...props} className={props.className + " text-xl font-bold"} />
	)

	const TableBodyCell = (props: any) => (
		<TableCell {...props} className={props.className + " text-xl"} />
	)

	const getBullet = (secret: string) => {
		return secret
			.split("")
			.map(() => "•")
			.join("")
	}

	const [applicationToDelete, setApplicationToDelete] = useState<application>()
	const [applicationToRenew, setApplicationToRenew] = useState<application>()

	const handleConfirmRenew = () => {
		if (applicationToRenew) {
			props.onRenew(
				applicationToRenew.client_id,
				applicationToRenew.client_name
			)
			setApplicationToRenew(undefined)
		}
	}

	const handleCancelRenew = () => {
		setApplicationToRenew(undefined)
	}

	const handleConfirmDelete = () => {
		if (applicationToDelete) {
			props.onDelete(applicationToDelete.client_id)
			setApplicationToDelete(undefined)
		}
	}

	const handleCancelDelete = () => {
		setApplicationToDelete(undefined)
	}

	return (
		<>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadCell>Name</TableHeadCell>
						<TableHeadCell align="right">Client ID</TableHeadCell>
						<TableHeadCell align="right">Client Secret</TableHeadCell>
						<TableHeadCell align="right">Actions</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.applications.map((application: application) => (
						<TableRow
							className="odd:bg-neutral-99 even:bg-neutralVariant-99"
							key={application.client_id}
						>
							<TableBodyCell>{application.client_name}</TableBodyCell>
							<TableBodyCell align="right">
								{application.client_id}
							</TableBodyCell>
							<TableBodyCell align="right">
								{isShowSecret(application.client_id)
									? application.client_secret
									: getBullet(application.client_secret)}
								<Tooltip title="Show secret">
									<IconButton
										aria-label="show secret"
										onClick={() =>
											isShowSecret(application.client_id)
												? hideSecret()
												: showSecret(application.client_id)
										}
									>
										{isShowSecret(application.client_id) ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</Tooltip>
							</TableBodyCell>
							<TableBodyCell align="right">
								<Tooltip title="Renew client secret">
									<IconButton
										aria-label="renew"
										onClick={() => setApplicationToRenew(application)}
									>
										<Refresh />
									</IconButton>
								</Tooltip>
								<Tooltip title="Delete Application">
									<IconButton
										color="error"
										aria-label="delete"
										onClick={() => setApplicationToDelete(application)}
									>
										<Clear />
									</IconButton>
								</Tooltip>
							</TableBodyCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<ConfirmationDialog
				open={applicationToDelete !== undefined}
				onCancel={handleCancelDelete}
				onConfirm={handleConfirmDelete}
				color="error"
				title={`Delete ${applicationToDelete?.client_name}`}
				content={`Are you sure you want to delete ${applicationToDelete?.client_name}?`}
				confirmText="Delete"
			/>
			<ConfirmationDialog
				open={applicationToRenew !== undefined}
				onCancel={handleCancelRenew}
				onConfirm={handleConfirmRenew}
				color="primary"
				title={`Renew ${applicationToRenew?.client_name}`}
				content={`Are you sure you want to renew ${applicationToRenew?.client_name}?`}
				confirmText="Renew"
			/>
		</>
	)
}
