import { Close, Check, Add } from "@mui/icons-material"
import {
	FormControl,
	TextField,
	Box,
	FormHelperText,
	IconButton,
	Tooltip,
} from "@mui/material"
import { ChangeEvent, createRef, useState } from "react"

type ApplicationRegistrationFormProps = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onCancel: () => void
	submitting: boolean
}

export const ApplicationRegistrationForm = ({
	onSubmit,
	submitting,
}: ApplicationRegistrationFormProps) => {
	const [open, setOpen] = useState(false)
	const [error, setError] = useState(false)
	const [submitable, setSubmitable] = useState(false)
	const [validationMessage, setValidationMessage] = useState<string>()

	const maxLength = 20
	const validationRegexMessage = "Only alphanumeric characters are allowed"
	const validationLengthMessage = `Maximum length is ${maxLength} characters`

	const regex = /^[a-zA-Z0-9]*$/

	const inputRef = createRef<HTMLInputElement>()

	const handleOpen = () => {
		setOpen(true)
		inputRef.current?.focus()
	}
	const handleClose = () => setOpen(false)

	const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > maxLength) {
			setError(true)
			setSubmitable(false)
			setValidationMessage(validationLengthMessage)
		} else if (!regex.test(e.target.value)) {
			setError(true)
			setValidationMessage(validationRegexMessage)
			setSubmitable(false)
			return
		} else if (e.target.value.length === 0) {
			setSubmitable(false)
			setError(false)
			setValidationMessage(undefined)
		} else {
			setSubmitable(true)
			setError(false)
			setValidationMessage(undefined)
		}
	}

	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={onSubmit}
			className="flex flex-col gap-4"
		>
			<FormControl className="w-full py-4 px-4">
				<Box className="flex w-full items-center justify-between gap-4">
					<TextField
						color="primary"
						label="Name"
						name="name"
						error={error}
						ref={inputRef}
						onChange={handleTyping}
						className="flex-1"
						aria-describedby="my-helper-text"
					/>
					<Box className="flex gap-2">
						{open ? (
							<>
								<Tooltip title="Cancel">
									<IconButton
										aria-label="add"
										disabled={submitting}
										className=" bg-neutral-80 text-neutral-0 disabled:cursor-not-allowed rounded-full normal-case shadow-none text-xl"
										onClick={handleClose}
									>
										<Close />
									</IconButton>
								</Tooltip>
								<Tooltip title="Register">
									<IconButton
										aria-label="add"
										disabled={!submitable || submitting}
										className=" bg-primary-main text-neutralVariant-100 disabled:cursor-not-allowed disabled:bg-neutral-80 disabled:text-neutral-70 rounded-full normal-case shadow-none text-xl"
										type="submit"
									>
										<Check />
									</IconButton>
								</Tooltip>
							</>
						) : (
							<Tooltip title="Register a new application">
								<IconButton
									aria-label="add"
									className=" bg-primary-main text-neutralVariant-100 rounded-full normal-case shadow-none text-xl"
									onClick={handleOpen}
								>
									<Add />
								</IconButton>
							</Tooltip>
						)}
					</Box>
				</Box>
				<FormHelperText className="text-error-main">
					{validationMessage}&nbsp;
				</FormHelperText>
			</FormControl>
		</form>
	)
}
