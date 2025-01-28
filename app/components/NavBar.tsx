"use client"

import { OpenEPILogoLarge } from "@/app/icons/OpenEPILogoLarge"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import Box from "@mui/material/Box"
import { usePathname } from "next/navigation"
import { Button, IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import {
	ArrowOutward,
	GridView,
	Login,
	Logout,
	Menu as BurgerIcon,
} from "@mui/icons-material"
import { OpenEPILogo } from "../icons/OpenEPILogo"
import { signIn, signOut, useSession } from "next-auth/react"

const NavBar = () => {
	const { data: session } = useSession()
	const user = session?.user?.name
	console.log(user)

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const currentRoute = usePathname()

	const baseStyle: string =
		"px-6 py-2 rounded-full flex flex-row items-center gap-1.5 hover:bg-neutral-95"

	const linkClassName = (path: string, primary?: boolean) => {
		return currentRoute.startsWith(path)
			? baseStyle +
					(primary
						? " bg-primary-40 text-neutral-100 hover:text-neutral-0"
						: " bg-secondary-90")
			: baseStyle +
					(primary
						? " bg-primary-40 text-neutral-100 hover:text-neutral-0"
						: "")
	}

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

	const handleDropdown = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElDropdown(event.currentTarget)
	}

	const handleDropdownClose = () => {
		setAnchorElDropdown(null)
	}

	const handleSignIn = () => {
		signIn("keycloak", { callbackUrl: "/dashboard" })
	}

	const isCurrentRoute = (route: string) => currentRoute.startsWith(route)

	const handleSignOut = () => {
		if (isCurrentRoute("/dashboard")) {
			signOut({ redirect: true, callbackUrl: "/" })
		} else signOut({ redirect: false })
	}

	const getInitials = (name = "") =>
		name
			.split(" ")
			.map((part) => part[0])
			.slice(0, 2)
			.join("")
			.toUpperCase()

	return (
		<nav className="flex flex-row sticky top-0 z-20 bg-[#FBFDF8] backdrop-blur-sm w-full items-center sm:px-6 px-4 sm:py-4 py-2 sm:my-8 my-4 justify-between">
			<Link href="/">
				<Box className="flex gap-5 items-center">
					<Box className="2xl:inline hidden">
						<OpenEPILogoLarge />
					</Box>
					<Box className="2xl:hidden inline">
						<OpenEPILogo />
					</Box>
					<Typography className="xs:text-4xl text-2xl">
						<span className="2xl:inline hidden">|</span> Developer Portal
					</Typography>
				</Box>
			</Link>
			<Box className="xl:flex xl:flex-row xl:text-2xl hidden">
				<Link href="/data-catalog" className={linkClassName("/data-catalog")}>
					Data catalog
				</Link>
				<Link href="/resources" className={linkClassName("/resources")}>
					Resources
				</Link>
				<Link href="/contact" className={linkClassName("/contact")}>
					Contact
				</Link>
				<Link
					href="https://openepi.io"
					target="_blank"
					className={baseStyle + " hover:bg-neutral-95"}
				>
					About the project <ArrowOutward />
				</Link>
				{user ? (
					<>
						<button
							onClick={handleDropdown}
							className="flex justify-center text-xl size-12 text-primary-100 bg-primary-40 rounded-full items-center gap-1 mr-1 hover:bg-neutral-90 hover:text-neutral-0"
						>
							{getInitials(user)}
						</button>
						<Menu
							open={isDropdownOpen}
							anchorEl={anchorElDropdown}
							onClose={handleDropdownClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							transformOrigin={{ vertical: "top", horizontal: "right" }}
							className="shadow-none mt-2"
						>
							<Box className="absolute pt-6 bg-neutral-95 w-full h-16 top-0 left-0" />
							<Box className="px-4 py-6 min-w-64 items-center break-words flex flex-col gap-4">
								<Box className="flex justify-center text-xl size-14 z-10 text-primary-100 bg-primary-40 rounded-full items-center">
									{getInitials(user)}
								</Box>
								<Box className="break-words">
									<Typography className="text-lg">{user}</Typography>
								</Box>
							</Box>
							<Link href="/dashboard">
								<MenuItem
									onClick={handleDropdownClose}
									className={`p-4 ${isCurrentRoute("/dashboard") && "bg-secondary-90"}`}
								>
									<Typography className="text-xl flex items-center gap-1">
										<GridView /> Dashboard
									</Typography>
								</MenuItem>
							</Link>
							<MenuItem onClick={handleSignOut} className="p-4">
								<Typography className="text-xl flex items-center gap-1">
									<Logout /> Sign out
								</Typography>
							</MenuItem>
						</Menu>
					</>
				) : (
					<Button
						onClick={handleSignIn}
						className={
							baseStyle +
							" normal-case bg-primary-40 text-neutral-100 hover:bg-neutral-95 hover:text-neutral-0"
						}
					>
						Sign in <Login />
					</Button>
				)}
			</Box>
			<Box className="xl:hidden">
				<IconButton
					size="large"
					color="inherit"
					aria-label="menu"
					onClick={handleClick}
				>
					<BurgerIcon className="text-3xl" />
				</IconButton>
				<Menu
					open={isOpen}
					onClose={handleClose}
					disableScrollLock={true}
					anchorEl={anchorEl}
				>
					{user && (
						<Box className="px-4 py-6 min-w-64 items-center break-words flex flex-col gap-4">
							<Box className="absolute pt-6 bg-neutral-95 w-full h-16 top-0 left-0" />
							<Box className="flex justify-center text-xl size-14 z-10 text-primary-100 bg-primary-40 rounded-full items-center">
								{getInitials(user)}
							</Box>
							<Box className="break-words">
								<Typography className="text-lg">{user}</Typography>
							</Box>
						</Box>
					)}
					<Link href="/data-catalog">
						<MenuItem
							onClick={handleClose}
							className={`p-4 flex gap-2 ${isCurrentRoute("/data-catalog") && "bg-secondary-90"}`}
						>
							<Typography className="text-lg">Data catalog</Typography>
						</MenuItem>
					</Link>
					<Link href="/resources">
						<MenuItem
							onClick={handleClose}
							className={`p-4 flex gap-2 ${isCurrentRoute("/resources") && "bg-secondary-90"}`}
						>
							<Typography className="text-lg">Resources </Typography>
						</MenuItem>
					</Link>
					<Link href="/contact">
						<MenuItem
							onClick={handleClose}
							className={`p-4 flex gap-2 ${isCurrentRoute("/contact") && "bg-secondary-90"}`}
						>
							<Typography className="text-lg">Contact</Typography>
						</MenuItem>
					</Link>
					<Link href="https://openepi.io" target="_blank">
						<MenuItem
							onClick={handleClose}
							className={`p-4 flex gap-2 ${isCurrentRoute("/about") && "bg-secondary-90"}`}
						>
							<Typography className="text-lg">About the project</Typography>
							<ArrowOutward />
						</MenuItem>
					</Link>
					{user ? (
						<Box>
							<Link href="/dashboard">
								<MenuItem
									onClick={handleClose}
									className={`p-4 flex gap-2 ${isCurrentRoute("/dashboard") && "bg-secondary-90"}`}
								>
									<Typography className="text-lg">Dashboard</Typography>
									<GridView />
								</MenuItem>
							</Link>
							<MenuItem onClick={handleSignOut} className="p-4 flex gap-2">
								<Typography className="text-lg">Sign out</Typography>
								<Logout />
							</MenuItem>
						</Box>
					) : (
						<MenuItem
							onClick={handleSignIn}
							className="bg-primary-90 py-3 px-6 flex gap-2"
						>
							<Typography className="text-lg">Sign in</Typography>
							<Login />
						</MenuItem>
					)}
				</Menu>
			</Box>
		</nav>
	)
}

export default NavBar
