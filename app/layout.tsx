import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import "./material_symbols.css"
import NavBar from "@/app/components/NavBar"
import { ReactNode } from "react"
import Footer from "@/app/components/Footer"
import { Providers } from "./providers/providers"

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
		<body className="bg-[#FBFDF8] min-h-screen flex flex-col justify-between">
			<Providers>
				<NavBar />
				<main className="flex-1 flex flex-col items-center">{children}</main>
				<Footer />
			</Providers>
		</body>
	</html>
)

export default RootLayout
