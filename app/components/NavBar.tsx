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
	KeyboardArrowDown,
	KeyboardArrowUp,
	Login,
	Logout,
	Person,
	Menu as BurgerIcon,
} from "@mui/icons-material"
import { useAuth } from "../providers/authProvider"
import { signOut } from "../actions"
import { OpenEPILogo } from "../icons/OpenEPILogo"

const NavBar = () => {
	const { user, logout } = useAuth()

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const currentRoute = usePathname()
	const baseStyle: string =
		"px-6 py-2 rounded-full flex flex-row items-center gap-1.5 hover:bg-[#1d1b2014]"

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

	return (
		<nav className="flex flex-row items-center sm:p-12 p-6 justify-between">
			<Link href="/">
				<Box className="flex lg:flex-row flex-col gap-5 items-center">
					<Box className="xs:flex hidden">
						<OpenEPILogoLarge />
					</Box>
					<Box className="xs:hidden flex">
						<OpenEPILogo />
					</Box>
					<Typography className="lg:text-4xl 2xl:inline hidden">
						| Developer Portal
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
					className={baseStyle + " hover:bg-[#1d1b2014]"}
				>
					About the project <ArrowOutward />
				</Link>
				{user ? (
					<>
						<Button
							onClick={handleDropdown}
							className={linkClassName("/dashboard", true)}
						>
							<Person />
							{user}
							{isDropdownOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
						</Button>
						<Menu
							open={isDropdownOpen}
							anchorEl={anchorElDropdown}
							onClose={handleDropdownClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							transformOrigin={{ vertical: "top", horizontal: "right" }}
							className="shadow-none"
						>
							<Link href="/dashboard">
								<MenuItem onClick={handleDropdownClose} className="p-4 w-44">
									<Typography className="text-xl flex items-center gap-1">
										<GridView /> Dashboard
									</Typography>
								</MenuItem>
							</Link>
							<MenuItem className="p-4" onClick={signOut}>
								<Typography className="text-xl flex items-center gap-1">
									<Logout /> Sign out
								</Typography>
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
					>
						Sign in <Login />
					</Link>
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
					<Link href="/data-catalog">
						<MenuItem onClick={handleClose} className="py-3 px-6 flex gap-2">
							<Typography className="text-lg">Data catalog</Typography>
						</MenuItem>
					</Link>
					<Link href="/resources">
						<MenuItem onClick={handleClose} className="py-3 px-6 flex gap-2">
							<Typography className="text-lg">Resources </Typography>
						</MenuItem>
					</Link>
					<MenuItem onClick={handleClose} className="py-3 px-6 flex gap-2">
						<Link href="/contact">
							<Typography className="text-lg">Contact</Typography>
						</Link>
					</MenuItem>
					<Link href="https://openepi.io" target="_blank">
						<MenuItem onClick={handleClose} className="py-3 px-6 flex gap-2">
							<Typography className="text-lg">About the project</Typography>
							<ArrowOutward />
						</MenuItem>
					</Link>
					{user ? (
						<Box>
							<Link href="/dashboard">
								<MenuItem
									onClick={handleClose}
									className="py-3 px-6 flex gap-2"
								>
									<Typography className="text-lg">Dashboard</Typography>
									<Person />
								</MenuItem>
							</Link>
							<Link href="/dashboard/oauth2/sign_out?rd=https://auth-dev3.openepi.io/realms/openepi/protocol/openid-connect/logout">
								<MenuItem
									onClick={handleClose}
									className="py-3 px-6 flex gap-2"
								>
									<Typography className="text-lg">Sign out</Typography>
									<Logout />
								</MenuItem>
							</Link>
						</Box>
					) : (
						<Link href="/dashboard">
							<MenuItem
								onClick={handleClose}
								className="bg-primary-90 py-3 px-6 flex gap-2"
							>
								<Typography className="text-lg">Sign in</Typography>
								<Login />
							</MenuItem>
						</Link>
					)}
				</Menu>
			</Box>
		</nav>
	)
}

export default NavBar
