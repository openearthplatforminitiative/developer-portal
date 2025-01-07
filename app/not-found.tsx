import { Box, Typography } from "@mui/material"
import Link from "next/link"

const NotFound = () => (
	<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
		<Box className="flex flex-col gap-8 mb-20">
			<Typography
				variant="h1"
				className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
			>
				Could not find the page you were looking for
			</Typography>
			<Typography className="text-xl xs:text-2xl">
				<Link href="/">Go back to the home page</Link>
			</Typography>
		</Box>
	</Box>
)

export default NotFound
