"use client"

import { OpenEPILogoLarge } from "@/app/icons/OpenEPILogoLarge"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import Box from "@mui/material/Box"
import { usePathname } from "next/navigation"
import { Button, IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { BurgerMenu } from "@/app/icons/BurgerMenu"
import { ArrowOutward, Person } from "@mui/icons-material"
import { useRouter } from "next/navigation"

const NavBar = () => {
	const router = useRouter()

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const currentRoute = usePathname()
	const baseStyle: string =
		"px-6 py-2 rounded-full flex flex-row items-center gap-1.5"

	const linkClassName = (path: string) =>
		currentRoute.startsWith(path)
			? baseStyle + " bg-secondary-90"
			: baseStyle + " hover:bg-[#1d1b2014]"

	const handleClose = () => {
		setIsOpen(false)
	}
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
		setIsOpen(true)
	}

	const [anchorElDropdown, setAnchorElDropdown] = useState<null | HTMLElement>(
		null
	)

	const isDropdownOpen = Boolean(anchorElDropdown)

	const isLoggedIn = () => {
		return localStorage.getItem("login") === "true"
	}

	const handleDropdown = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElDropdown(event.currentTarget)
	}

	const handleDropdownClose = () => {
		setAnchorElDropdown(null)
	}

	const signOut = () => {
		localStorage.removeItem("login")
		router.push("/")
	}

	return (
		<nav className="flex flex-row items-center sm:p-12 p-6 justify-between">
			<Link href="/">
				<Box className="flex lg:flex-row flex-col gap-5 items-center">
					<OpenEPILogoLarge />
					<Typography className="lg:text-4xl 2xl:inline hidden">
						| Developer Portal
					</Typography>
				</Box>
			</Link>
			<Box className="xl:flex xl:flex-row xl:text-2xl hidden">
				<Link href="/data-catalog" className={linkClassName("/data-catalog/")}>
					Data catalog
				</Link>
				<Link href="/resources" className={linkClassName("/resources/")}>
					Resources
				</Link>
				<Link href="/contact" className={linkClassName("/contact/")}>
					Contact
				</Link>
				<Link
					href="https://openepi.io"
					target="_blank"
					className={baseStyle + " hover:bg-[#1d1b2014]"}
				>
					About the project <ArrowOutward />
				</Link>
				{isLoggedIn() ? (
					<>
						<Button
							onClick={handleDropdown}
							className={
								" bg-primary-40 text-neutral-100 hover:text-neutral-0" +
								linkClassName("/dashboard")
							}
						>
							username <Person />
						</Button>
						<Menu
							open={isDropdownOpen}
							anchorEl={anchorElDropdown}
							onClose={handleDropdownClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							transformOrigin={{ vertical: "top", horizontal: "right" }}
							className="shadow-none"
						>
							<MenuItem onClick={handleDropdownClose} className={"p-4 w-44"}>
								<Link href="/dashboard">
									<Typography className="text-xl">Dashboard</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={signOut} className={"p-4"}>
								<Typography className="text-xl">Sign out</Typography>
							</MenuItem>
						</Menu>
					</>
				) : (
					<Link
						href="/dashboard"
						className={
							baseStyle +
							" bg-primary-40 text-neutral-100 hover:bg-[#1d1b2014] hover:text-neutral-0"
						}
						onClick={() => localStorage.setItem("login", "true")}
					>
						Sign In <Person />
					</Link>
				)}
			</Box>
			<Box className="xl:hidden">
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={handleClick}
				>
					<BurgerMenu width={36} height={24} />
				</IconButton>
				<Menu
					open={isOpen}
					onClose={handleClose}
					disableScrollLock={true}
					anchorEl={anchorEl}
				>
					<MenuItem onClick={handleClose}>
						<Link href="/data-catalog" className="p-2">
							<Typography className="text-lg">Data catalog</Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href="/resources" className="p-2">
							<Typography className="text-lg">Resources </Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link href="/contact" className="p-2">
							<Typography className="text-lg">Contact</Typography>
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link
							href="https://openepi.io"
							target="_blank"
							className="flex flex-row gap-2 items-center p-2"
						>
							<Typography className="text-lg">About the project</Typography>
							<ArrowOutward />
						</Link>
					</MenuItem>
					<MenuItem onClick={handleClose} className="bg-primary-90 mb-[-8px]">
						{isLoggedIn() ? (
							<Link
								href="/dashboard"
								className="flex flex-row gap-2 items-center p-2"
							>
								<Typography className="text-lg">Dashboard</Typography>
								<Person />
							</Link>
						) : (
							<Link
								href="/dashboard"
								className="flex flex-row gap-2 items-center p-2"
							>
								<Typography className="text-lg">Sign in</Typography>
								<ArrowOutward />
							</Link>
						)}
					</MenuItem>
				</Menu>
			</Box>
		</nav>
	)
}

export default NavBar
