"use client"

import { AlertProvider } from "./alertProvider"
import { ReactNode } from "react"
import ThemeRegistry from "@/components/ThemeRegistry"
import { CookieConsent } from "@/components/CookieConsent"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeRegistry options={{ key: "mui" }}>
			<QueryClientProvider client={queryClient}>
				<AlertProvider>
					<CookieConsent>{children}</CookieConsent>
				</AlertProvider>
			</QueryClientProvider>
		</ThemeRegistry>
	)
}
