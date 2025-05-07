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
	const [informedUser, setInformedUser] = useState(true)

	useEffect(() => {
		setInformedUser(Cookies.get("cookie_informed") === "true")
	}, [])

	const handleClick = () => {
		setInformedUser(true)
		Cookies.set("cookie_informed", "true", { expires: 90, sameSite: "strict" })
	}

	return (
		<>
			{children}
			{!informedUser && (
				<Box className="w-full fixed bottom-0 bg-card border-t border-t-neutral-90 flex justify-center py-4">
					<Box className="w-full lg:max-w-7xl flex flex-wrap gap-5 justify-between px-8 items-center">
						<Typography>
							<Cookie className="size-8 mr-2 text-primary-40" />
							OpenEPI developer portal uses cookies for essential
							functionalities
						</Typography>
						<Box className="flex grow justify-end gap-4 items-center">
							<Link
								href="/cookies"
								className="text-neutral-0 text-xl underline hover:no-underline"
							>
								Read more
							</Link>
							<Button
								className="rounded-full shadow-none normal-case text font-normal"
								variant="contained"
								onClick={handleClick}
							>
								I Understand
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</>
	)
}
