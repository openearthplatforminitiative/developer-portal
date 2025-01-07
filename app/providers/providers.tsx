"use client"

import { SessionProvider } from "next-auth/react"
import { AlertProvider } from "./alertProvider"
import { ReactNode } from "react"
import ThemeRegistry from "../components/ThemeRegistry"
import { CookieConsent } from "../components/CookieConsent"

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeRegistry options={{ key: "mui" }}>
			<SessionProvider>
				<AlertProvider>
					<CookieConsent>{children}</CookieConsent>
				</AlertProvider>
			</SessionProvider>
		</ThemeRegistry>
	)
}
