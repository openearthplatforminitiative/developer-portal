"use client"

import { DataCatalogMap } from "./DataCatalogMap"
import { DataCatalogProvider, useDataCatalog } from "./DataCatalogProvider"
import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { DataCatalogFilters } from "./DataCatalogFilters"
import { useDataCatalogFilters } from "./DataCatalogFiltersProvider"
import { useDataCatalogData } from "./DataCatalogDataProvider"
import { useMediaQuery, Pagination } from "@mui/material"
import { DataCatalogModelMap } from "./DataCatalogModelMap"
import { useEffect } from "react"
import { DrawProvider } from "./DrawControl/DrawProvider"
import { MapProvider } from "react-map-gl/maplibre"
import { DataCatalogSearch } from "./DataCatalogSearch"
import { ResourceCard } from "../ResourceCard.tsx"
import { motion, AnimatePresence } from "motion/react"

export const DataCatalog = () => {
	return (
		<MapProvider>
			<DrawProvider>
				<DataCatalogProvider>
					<DataCatalogContent />
				</DataCatalogProvider>
			</DrawProvider>
		</MapProvider>
	)
}

export const DataCatalogContent = () => {
	const { showMap, setShowMap } = useDataCatalog()
	const { resources } = useDataCatalogData()
	const { setCurrentPage, currentPage, pages } = useDataCatalogFilters()

	const lg = useMediaQuery("(min-width: 1024px)")

	useEffect(() => {
		if (!lg) {
			setShowMap(false)
		}
	}, [lg, setShowMap])

	const handlePagination = (event: any, newPage: number) => {
		console.log(newPage)
		setCurrentPage(newPage)
	}

	return (
		<div className="w-full flex flex-col gap-4 mt-16">
			<DataCatalogFilters />
			<div className="w-full">
				<DataCatalogSearch />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(92px, 1fr)] gap-4 content-stretch">
				{lg && (
					<motion.div
						layout
						className={`relative ${showMap ? "min-h-[632px] col-[span_2] row-[span_6]" : "min-h-[308px] row-[span_3]"}`}
					>
						<div className="w-full h-full overflow-hidden rounded-lg">
							<DataCatalogMap />
						</div>
						<div className="absolute -right-3 -bottom-3 flex justify-center items-center pointer-events-none">
							<button
								className="cursor-pointer size-10 rounded-full bg-secondary-90 hover:bg-neutral-90 shadow pointer-events-auto"
								onClick={() => setShowMap(!showMap)}
							>
								{showMap ? (
									<UnfoldLess className="-rotate-z-45" />
								) : (
									<UnfoldMore className="-rotate-z-45" />
								)}
							</button>
						</div>
					</motion.div>
				)}
				<AnimatePresence>
					{resources.length > 0 ? (
						resources.map((resource) => (
							<motion.div
								key={resource.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ResourceCard resource={resource} />
							</motion.div>
						))
					) : (
						<motion.div
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key="empty"
							className={`${showMap ? "col-span-1 row-span-7" : "col-span-2 row-span-3"} flex justify-center items-center text-center text-xl rounded-lg p-10 bg-neutral-95`}
						>
							Sorry, we dont have any resources on your search.
							<br />
							Please try a new search.
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className="w-full flex justify-center">
				<Pagination
					siblingCount={0}
					count={pages}
					page={currentPage}
					onChange={handlePagination}
				/>
			</div>
			{!lg && <DataCatalogModelMap />}
		</div>
	)
}
