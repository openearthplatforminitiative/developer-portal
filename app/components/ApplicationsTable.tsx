import { Visibility, VisibilityOff, Clear } from "@mui/icons-material"
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
	name: string
	clientId: string
	clientSecret: string
	showSecret?: boolean
}

type ApplicationsTableProps = {
	applications: application[]
	onDelete: (clientId: string) => void
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

	const [applicationToDelete, setApplicationToDelete] =
		useState<application | null>(null)

	const handleConfirmDelete = () => {
		if (applicationToDelete) {
			props.onDelete(applicationToDelete.clientId)
			setApplicationToDelete(null)
		}
	}

	const handleCancelDelete = () => {
		setApplicationToDelete(null)
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
							className="odd:bg-primary-99 even:bg-neutral-99"
							key={application.clientId}
						>
							<TableBodyCell>{application.name}</TableBodyCell>
							<TableBodyCell align="right">
								{application.clientId}
							</TableBodyCell>
							<TableBodyCell align="right">
								{isShowSecret(application.clientId)
									? application.clientSecret
									: getBullet(application.clientSecret)}
								<Tooltip title="Show secret">
									<IconButton
										aria-label="show secret"
										onClick={() =>
											isShowSecret(application.clientId)
												? hideSecret()
												: showSecret(application.clientId)
										}
									>
										{isShowSecret(application.clientId) ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</Tooltip>
							</TableBodyCell>
							<TableBodyCell align="right">
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
				open={applicationToDelete !== null}
				onCancel={handleCancelDelete}
				onConfirm={handleConfirmDelete}
				title={`Delete ${applicationToDelete?.name}`}
				content={`Are you sure you want to delete ${applicationToDelete?.name}?`}
				confirmText="Delete"
			/>
		</>
	)
}
