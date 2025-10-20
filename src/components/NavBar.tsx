"use client"

import { OpenEPILogoLarge } from "@/icons/OpenEPILogoLarge"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import Box from "@mui/material/Box"
import { usePathname } from "next/navigation"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import {
	ArrowOutward,
	Menu as BurgerIcon,
} from "@mui/icons-material"
import { OpenEPILogo } from "@/icons/OpenEPILogo"

const NavBar = () => {
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

	const isCurrentRoute = (route: string) => currentRoute.startsWith(route)

	return (
		<nav className="flex flex-row sticky top-0 z-20 bg-[#FBFDF8] w-full items-center sm:px-6 px-4 sm:py-4 py-2 sm:my-8 my-4 justify-between">
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
				</Menu>
			</Box>
		</nav>
	)
}

export default NavBar
