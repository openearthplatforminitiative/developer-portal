"use client"

import { Button, useMediaQuery, Icon } from "@mui/material"
import ApiCard from "./ApiCard"
import { useEffect, useMemo, useRef, useState } from "react"
import { fetchCategories } from "../data-catalog/DataCatalogActions"
import { CategorySummary } from "../data-catalog/DataCatalogTypes"

export const Categories = () => {
	const [show, setShow] = useState(false)
	const [categories, setCategories] = useState<CategorySummary[]>([])

	const containerRef = useRef<HTMLDivElement>(null)

	const getCategories = async () => {
		setCategories(await fetchCategories())
	}

	const lg = useMediaQuery("(min-width: 1024px)")
	const xs = useMediaQuery("(min-width: 580px)")

	const filteredCategories = useMemo(() => {
		if (show) return categories
		else {
			if (!xs) return categories.slice(0, 3)
			else if (!lg) return categories.slice(0, 4)
			else return categories.slice(0, 6)
		}
	}, [categories, show, lg, xs])

	useEffect(() => {
		getCategories()
	}, [])

	const handleClick = () => {
		setShow(!show)
		setTimeout(() => {
			if (containerRef.current && show) {
				containerRef.current.scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "center",
				})
			}
		}, 100)
	}

	return (
		<div className="relative grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 py-12 gap-14 transition-all h-min">
			{filteredCategories.map((category) => (
				<ApiCard
					key={category.id}
					header={category.title}
					subHeader={category.abstract}
					cardIcon={
						<span className="material-symbols-outlined">{category.icon}</span>
					}
					href={`data-catalog/category/${category.id}`}
				/>
			))}
			<div
				ref={containerRef}
				className="absolute bottom-0 flex justify-center w-full pointer-events-none"
			>
				<Button
					onClick={handleClick}
					className="rounded-full pointer-events-auto normal-case shadow-none text-xl px-8 py-4 translate-y-1/2"
					variant="contained"
				>
					{show ? "Show Less" : "Show All"}
				</Button>
			</div>
		</div>
	)
}
