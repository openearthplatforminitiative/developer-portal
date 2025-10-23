"use client"

import { AlertProvider } from "./alertProvider"
import { ReactNode } from "react"
import ThemeRegistry from "@/components/ThemeRegistry"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeRegistry options={{ key: "mui" }}>
			<QueryClientProvider client={queryClient}>
				<AlertProvider>
					{children}
				</AlertProvider>
			</QueryClientProvider>
		</ThemeRegistry>
	)
}
