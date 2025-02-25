import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	DialogProps,
} from "@mui/material"

type ConfirmationDialogProps = {
	open: boolean
	title: string
	color: string
	content?: string
	dialogProps?: DialogProps
	confirmText?: string
	cancelText?: string
	onConfirm: () => void
	onCancel: () => void
}

export const ConfirmationDialog = ({
	open,
	title,
	color,
	content,
	dialogProps,
	confirmText,
	cancelText,
	onConfirm,
	onCancel,
}: ConfirmationDialogProps) => {
	return (
		<Dialog
			sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
			maxWidth="xs"
			open={open}
			{...dialogProps}
		>
			<DialogTitle className="text-3xl p-4">{title}</DialogTitle>
			{content && (
				<DialogContent className="text-xl p-4" dividers>
					{content}
				</DialogContent>
			)}
			<DialogActions className="p-4">
				<Button
					className="rounded-full text-neutral-0 text-xl"
					autoFocus
					onClick={onCancel}
				>
					{cancelText ? cancelText : "Cancel"}
				</Button>
				<Button
					variant="contained"
					className={`rounded-full text-xl bg-${color}-40 shadow-none`}
					onClick={onConfirm}
				>
					{confirmText ? confirmText : "Confirm"}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
