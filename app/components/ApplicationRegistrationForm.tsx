import { FormControl, TextField, Box, Button } from "@mui/material"

type ClientRegistrationFormProps = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onCancel: () => void
}

export const ClientRegistrationForm = (props: ClientRegistrationFormProps) => {
	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={props.onSubmit}
			className="flex flex-col gap-4"
		>
			<FormControl>
				<TextField
					color="primary"
					variant="outlined"
					label="Name"
					name="name"
					autoFocus
					aria-describedby="my-helper-text"
				/>
			</FormControl>
			<Box className="flex flex-row-reverse">
				<Button
					type="submit"
					variant="contained"
					className="bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4"
				>
					Register
				</Button>
				<Button
					type="button"
					onClick={props.onCancel}
					variant="contained"
					className="bg-neutral-100 rounded-full text-neutral-0 normal-case shadow-none text-xl px-8 py-4"
				>
					Cancel
				</Button>
			</Box>
		</form>
	)
}
