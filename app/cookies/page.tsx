import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material"

const Page = () => {
	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Typography
				variant="h1"
				className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl mb-8"
			>
				Cookies
			</Typography>
			<Typography className="text-xl xs:text-2xl mb-20">
				The OpenEPI developer portal uses cookies solely for authentication
				purposes. Cookies are small text files that are stored on your device to
				help us recognize you when you return to our site. No cookies will be
				used for tracking or shared with any third parties.
			</Typography>
			<Typography variant="h2" className="text-3xl xs:text-4xl w-fit mb-8">
				Overview of Cookies on developer.openepi.io
			</Typography>
			<Box className="overflow-x-auto">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className="font-bold">Name</TableCell>
							<TableCell className="font-bold">Reason</TableCell>
							<TableCell className="font-bold">Choice</TableCell>
							<TableCell className="font-bold">Duration</TableCell>
							<TableCell className="font-bold">Recipient</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>cookie_informed</TableCell>
							<TableCell>
								Used to avoid unnecessary cookie consent banner
							</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>90 days</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>__Secure-openepi_user</TableCell>
							<TableCell>Used for authentication with login service</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>7 days</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>__Secure-openepi_user_csrf</TableCell>
							<TableCell>Used for authentication with login service</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>7 days</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>AUTH_SESSION_ID_LEGACY</TableCell>
							<TableCell>Used for authentication with login service</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>Session</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>AUTH_SESSION_ID</TableCell>
							<TableCell>Used for authentication with login service</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>Session</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>KC_RESTART</TableCell>
							<TableCell>Used for authentication with login service</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>Session</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>username</TableCell>
							<TableCell>Stores the username of the user</TableCell>
							<TableCell>Necessary</TableCell>
							<TableCell>Session</TableCell>
							<TableCell>OpenEpi</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</Box>
	)
}

export default Page
