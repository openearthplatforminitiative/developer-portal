"use client"

import { getContentHeadings } from "@/lib/ContentHeadings"
import { Toc } from "@mui/icons-material"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { PortableTextProps } from "next-sanity"
import { useEffect, useMemo, useState } from "react"

type TableOfContentsProps = {
	value: PortableTextProps["value"]
}

export const TableOfContentsMenu = ({ value }: TableOfContentsProps) => {
	const headings = useMemo(() => {
		return getContentHeadings(value)
	}, [value])

	const [currentHeading, setCurrentHeading] = useState<string>()
	const [anchorEl, setAnchorEl] = useState<HTMLElement>()
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(undefined)
	}

	useEffect(() => {
		if (!headings || headings.length === 0) return

		const handleScroll = () => {
			const viewportHeight = window.innerHeight
			for (const heading of headings) {
				const element = document.getElementById(heading.id)
				if (
					element &&
					element.getBoundingClientRect().top >= 0 &&
					element.getBoundingClientRect().bottom <= viewportHeight / 2
				) {
					setCurrentHeading(heading.id)
					break
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [headings])

	const OFFSET = 100

	const handleHeadingClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		event.preventDefault()
		const element = document.getElementById(id)
		if (element) {
			const offsetPosition =
				element.getBoundingClientRect().top + window.pageYOffset - OFFSET
			window.scrollTo({ behavior: "smooth", top: offsetPosition })
		}
	}

	if (!headings || headings.length === 0) {
		return null
	}

	return (
		<>
			<IconButton
				aria-controls={open ? "table-of-contents-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				className="bg-neutral-90 text-3xl rounded-full w-14 h-14 shadow-xl"
			>
				<Toc fontSize="inherit" />
			</IconButton>
			<Menu
				id="table-of-contents-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				open={open}
				onClose={handleClose}
			>
				{headings.map((heading) => (
					<MenuItem key={heading.id} onClick={handleClose}>
						<a
							className={`py-1 block text-sm transition-colors mb-2 w-full
                ${currentHeading === heading.id
									? "text-black font-medium"
									: "text-gray-600"
								}`}
							href={`#${heading.id}`}
							onClick={(event) => handleHeadingClick(event, heading.id)}
						>
							{heading.text}
						</a>
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
