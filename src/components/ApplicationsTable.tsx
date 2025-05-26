import {
	Visibility,
	VisibilityOff,
	Clear,
	Refresh,
	MoreHoriz,
	Close,
	ContentCopy,
} from "@mui/icons-material"
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	Tooltip,
	Box,
	Typography,
	Menu,
	MenuItem,
} from "@mui/material"
import { useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { Application } from "@/types/application"
import { useAlert } from "@/providers/alertProvider"
import { deleteClient, updateClient } from "@/app/dashboard/actions"

type ApplicationsTableProps = {
	applications: Application[]
	onDelete: (client_id: string) => void
	onUpdate: (client: Application) => void
}

export const ApplicationsTable = ({
	applications,
	onDelete,
	onUpdate,
}: ApplicationsTableProps) => {
	const [secret, setShowSecret] = useState<string | false>(false)

	const isShowSecret = (applicationId: string) => {
		return secret === applicationId
	}

	const [anchorElDropdown, setAnchorElDropdown] = useState<null | HTMLElement>(
		null
	)

	const handleDropdown = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElDropdown(event.currentTarget)
	}

	const handleDropdownClose = () => {
		setAnchorElDropdown(null)
	}

	const isDropdownOpen = Boolean(anchorElDropdown)

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

	const [applicationToDelete, setApplicationToDelete] = useState<Application>()
	const [applicationToRenew, setApplicationToRenew] = useState<Application>()
	const { setAlert } = useAlert()

	const handleConfirmRenew = async () => {
		if (applicationToRenew) {
			const client = await updateClient(
				applicationToRenew.client_id,
				applicationToRenew.client_name
			)
			if (client.errors !== undefined) {
				setAlert({
					severity: "error",
					title: `Could not renew ${applicationToRenew.client_name}`,
					message: client.errors[0].message,
				})
			} else {
				setAlert({
					severity: "success",
					title: "Success",
					message: `${applicationToRenew.client_name} was renewed successfully`,
				})
				onUpdate(client)
				setApplicationToRenew(undefined)
			}
			setApplicationToRenew(undefined)
		}
	}

	const handleCancelRenew = () => {
		setApplicationToRenew(undefined)
	}

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
		setAlert({
			severity: "success",
			title: "Copied to clipboard",
			message: "",
		})
	}

	const handleConfirmDelete = async () => {
		if (applicationToDelete) {
			const client = await deleteClient(applicationToDelete.client_id)
			if (client.errors !== undefined) {
				setAlert({
					severity: "error",
					title: `Could not delete ${applicationToDelete.client_name}`,
					message: client.errors[0].message,
				})
			} else {
				setAlert({
					severity: "success",
					title: "Success",
					message: `${applicationToDelete.client_name} was deleted successfully`,
				})
				onDelete(applicationToDelete.client_id)
			}
			setApplicationToDelete(undefined)
		}
	}

	const handleCancelDelete = () => {
		setApplicationToDelete(undefined)
	}

	return (
		<>
			<Box className="lg:hidden">
				{applications.map((application: Application) => (
					<Box
						className="relative border-t border-l border-r last-of-type:border-b border-neutral-90 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl p-4"
						key={application.client_id}
					>
						<Typography className="text-3xl mb-5">
							{application.client_name}
						</Typography>
						<Typography className="text-sm font-medium">CLIENT ID</Typography>
						<Typography className="text-2xl mb-4">
							{application.client_id}
							<Tooltip title="Copy to clipboard">
								<IconButton
									aria-label="copy client id"
									onClick={() => copyToClipboard(application.client_id)}
								>
									<ContentCopy />
								</IconButton>
							</Tooltip>
						</Typography>
						<Typography className="text-sm font-medium">
							CLIENT SECRET
						</Typography>
						<Box className="flex items-center gap-2">
							<Typography
								style={{ wordBreak: "break-word" }}
								className="text-2xl font-mono"
							>
								{isShowSecret(application.client_id)
									? application.client_secret
									: getBullet(application.client_secret)}
							</Typography>
							{isShowSecret(application.client_id) && (
								<Tooltip title="Copy to clipboard">
									<IconButton
										aria-label="copy client secret"
										onClick={() => copyToClipboard(application.client_secret)}
									>
										<ContentCopy />
									</IconButton>
								</Tooltip>
							)}
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
						</Box>
						<IconButton
							onClick={handleDropdown}
							className="absolute top-4 right-4 bg-neutral-90"
						>
							<MoreHoriz />
						</IconButton>
						<Menu
							classes={{ paper: "bg-[#FBFDF8]" }}
							open={isDropdownOpen}
							anchorEl={anchorElDropdown}
							onClose={handleDropdownClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							transformOrigin={{ vertical: "top", horizontal: "right" }}
						>
							<MenuItem
								className="flex gap-2 px-6 py-3"
								onClick={() => setApplicationToRenew(application)}
							>
								<Refresh />
								Renew Client Secret
							</MenuItem>
							<MenuItem
								className="flex gap-2 px-6 py-3"
								onClick={() => setApplicationToDelete(application)}
							>
								<Close />
								Delete Application
							</MenuItem>
						</Menu>
					</Box>
				))}
			</Box>
			<Table className="lg:table hidden">
				<TableHead>
					<TableRow>
						<TableHeadCell>Name</TableHeadCell>
						<TableHeadCell align="right">Client ID</TableHeadCell>
						<TableHeadCell align="right">Client Secret</TableHeadCell>
						<TableHeadCell align="right">Actions</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{applications.map((application: Application) => (
						<TableRow key={application.client_id}>
							<TableBodyCell>{application.client_name}</TableBodyCell>
							<TableBodyCell align="right">
								{application.client_id}
								<Tooltip title="Copy to clipboard">
									<IconButton
										aria-label="copy client id"
										onClick={() => copyToClipboard(application.client_id)}
									>
										<ContentCopy />
									</IconButton>
								</Tooltip>
							</TableBodyCell>
							<TableBodyCell align="right" className="font-mono">
								{isShowSecret(application.client_id)
									? application.client_secret
									: getBullet(application.client_secret)}
								{isShowSecret(application.client_id) && (
									<Tooltip title="Copy to clipboard">
										<IconButton
											aria-label="copy client secret"
											onClick={() => copyToClipboard(application.client_secret)}
										>
											<ContentCopy />
										</IconButton>
									</Tooltip>
								)}
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
