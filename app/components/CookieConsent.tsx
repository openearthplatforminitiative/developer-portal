"use client"

import { Cookie } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie"
import Link from "next/link"

type CookieConsentProps = {
	children: ReactNode
}

export const CookieConsent = ({ children }: CookieConsentProps) => {
	const [informedUser, setInformedUser] = useState<boolean>()

	useEffect(() => {
		setInformedUser(Cookies.get("cookie_informed") === "true")
	}, [])

	const handleClick = () => {
		setInformedUser(true)
		Cookies.set("cookie_informed", "true", { expires: 90, sameSite: "strict" })
	}

	const handleReadMore = () => {
		setInformedUser(true)
	}

	return (
		<>
			{children}
			{!informedUser && (
				<Box className="w-full fixed bottom-0 bg-secondary-90 flex justify-center px-8 py-4">
					<Box className="w-full lg:max-w-7xl flex justify-between items-center">
						<Typography variant="body2">
							<Cookie className="size-8 mr-2" />
							OpenEPI developer portal uses cookies for essential
							functionalities
						</Typography>
						<Box className="flex gap-2 items-center">
							<Link href="/cookies" className="text-neutral-0 text-xl">
								READ MORE
							</Link>
							<Button
								className="rounded-full shadow-none"
								variant="contained"
								onClick={handleClick}
							>
								I understand
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</>
	)
}
