"use client"

import { Login } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { signIn } from "next-auth/react"

const Page = () => {
	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Box className="flex flex-col gap-8 mb-20">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					Access denied
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					You need to be signed in to access this page
				</Typography>
				<Button
					variant="contained"
					className="self-start gap-2 normal-case shadow-none rounded-full"
					onClick={() => signIn("keycloak", { callbackUrl: "/dashboard" })}
					endIcon={<Login />}
				>
					Sign in
				</Button>
			</Box>
		</Box>
	)
}
export default Page
