"use client"

import {
	KeyboardArrowDownOutlined,
	KeyboardArrowUpOutlined,
	ArrowOutward,
} from "@mui/icons-material"
import { Menu } from "@mui/material"
import { useState } from "react"
import Link from "next/link"
import { License } from "@/types/license"

type LicenseInfoType = {
	license: License
}

export const LicenseInfo = ({ license }: LicenseInfoType) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<button
				onClick={handleOpen}
				className="flex items-center gap-2 px-4 py-2 bg-neutral-90 hover:bg-neutral-80 cursor-pointer rounded-full"
			>
				{license.name}{" "}
				{open ? (
					<KeyboardArrowUpOutlined fontSize="inherit" />
				) : (
					<KeyboardArrowDownOutlined fontSize="inherit" />
				)}
			</button>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				className="max-h-96"
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<Link
					className="group bg-neutral-95 hover:bg-neutral-90 flex items-center gap-5 rounded-lg -my-2 p-5 h-full w-full"
					href={license.url}
					target="_blank"
				>
					<div className="flex flex-col gap-2">{license.description}</div>
					<span className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
						<ArrowOutward />
					</span>
				</Link>
			</Menu>
		</>
	)
}
