"use client"

import { DataCatalogMap } from "./DataCatalogMap"
import { useDataCatalog } from "./DataCatalogProvider"
import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { DataCatalogFilters } from "./DataCatalogFilters"
import { useDataCatalogFilters } from "./DataCatalogFiltersProvider"
import { useMediaQuery, Pagination, Skeleton } from "@mui/material"
import { DataCatalogModelMap } from "./DataCatalogModelMap"
import { useEffect, useState } from "react"
import { DataCatalogSearch } from "./DataCatalogSearch"
import { ResourceCard } from "../ResourceCard"
import { motion, AnimatePresence } from "motion/react"
import { useDataCatalogSearch } from "@/hooks/useDataCatalogSearch"
import { ResourceSummary } from "@/types/resource"

export const DataCatalog = () => {
	const { initialized } = useDataCatalogFilters()
	if (!initialized) {
		return (
			<div className="w-full h-full flex justify-center items-center">
				<Skeleton
					variant="rectangular"
					className="w-full h-[1000px] rounded-lg"
				/>
			</div>
		)
	}
	return <DataCatalogInitiated />
}

const DataCatalogInitiated = () => {
	const [resources, setResources] = useState<ResourceSummary[]>([])

	const { showMap, setShowMap } = useDataCatalog()
	const {
		types,
		spatial,
		categories: filterCategories,
		providers: filterProviders,
		tags,
		setCurrentPage,
		pages,
		currentPage,
		selectedFeatures,
		setPages,
	} = useDataCatalogFilters()

	const { data, isLoading, error } = useDataCatalogSearch(
		types,
		selectedFeatures,
		spatial,
		filterCategories,
		filterProviders,
		tags,
		currentPage,
		21
	)

	useEffect(() => {
		if (isLoading) return
		if (data?.data) {
			setPages(data?.total_pages || 1)
			setResources(data?.data)
		} else {
			setPages(1)
			setResources([])
		}
	}, [data, isLoading, setPages])

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
			<DataCatalogSearch />
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
				<AnimatePresence mode="popLayout">
					{error ? (
						<motion.div
							key="error"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`${showMap ? "col-span-1 row-span-6" : "col-span-2 row-span-3"} flex justify-center items-center text-center text-xl rounded-lg p-10 bg-neutral-95`}
						>
							Oups! Something went wrong on our side.
							<br />
							Please try again later
						</motion.div>
					) : resources.length > 0 ? (
						resources.map((resource) => (
							<motion.div
								key={resource.id}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ResourceCard resource={resource} isLoading={isLoading} />
							</motion.div>
						))
					) : isLoading ? (
						Array.from({ length: 6 }).map((_, i) => (
							<motion.div
								key={`skeleton-${i}`}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Skeleton
									variant="rectangular"
									className="w-full h-[86px] rounded-lg"
								/>
							</motion.div>
						))
					) : (
						<motion.div
							key="empty"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`${showMap ? "col-span-1 row-span-6" : "col-span-2 row-span-3"} flex justify-center items-center text-center text-xl rounded-lg p-10 bg-neutral-95`}
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
