import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavBar from "@/app/components/NavBar"
import { ReactNode } from "react"
import ThemeRegistry from "@/app/components/ThemeRegistry"
import Footer from "@/app/components/Footer"
import HelpButton from "@/app/components/HelpButton"
import { AuthProvider } from "./providers/authProvider"
import { CookieConsent } from "./components/CookieConsent"
import { AlertProvider } from "./providers/alertProvider"

const inter = localFont({
	src: "./inter.ttf",
	display: "swap",
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "OpenEPI | Developer portal",
	description: "Developer portal for the OpenEPI data platform",
}

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang="en" className={inter.className}>
		<ThemeRegistry options={{ key: "mui" }}>
			<body className="bg-[#FBFDF8] min-h-screen flex flex-col justify-between">
				<AuthProvider>
					<AlertProvider>
						<CookieConsent>
							<NavBar />
							<main className="flex-1 flex flex-col items-center">
								{children}
							</main>
							<HelpButton />
							<Footer />
						</CookieConsent>
					</AlertProvider>
				</AuthProvider>
			</body>
		</ThemeRegistry>
	</html>
)

export default RootLayout
