"use client"

import { SessionProvider } from "next-auth/react"
import { AlertProvider } from "./alertProvider"
import { ReactNode } from "react"
import ThemeRegistry from "../components/ThemeRegistry"
import { CookieConsent } from "../components/CookieConsent"
import { AuthProvider } from "./authProvider"

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeRegistry options={{ key: "mui" }}>
			<SessionProvider>
				<AuthProvider>
					<AlertProvider>
						<CookieConsent>{children}</CookieConsent>
					</AlertProvider>
				</AuthProvider>
			</SessionProvider>
		</ThemeRegistry>
	)
}
