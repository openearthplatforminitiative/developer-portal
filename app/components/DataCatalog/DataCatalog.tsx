"use client"

import { DataCatalogMap } from "./DataCatalogMap"
import { DataCatalogProvider, useDataCatalog } from "./DataCatalogProvider"
import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { DataCatalogFilters } from "./DataCatalogFilters"
import { useMediaQuery, Pagination } from "@mui/material"
import { DataCatalogModelMap } from "./DataCatalogModelMap"
import { useEffect } from "react"
import { DrawProvider } from "./DrawControl/DrawProvider"
import { MapProvider } from "react-map-gl/maplibre"
import { DataCatalogSearch } from "./DataCatalogSearch"
import { ResourceCard } from "../ResourceCard.tsx"

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
	const { resources, showMap, setCurrentPage, currentPage, pages, setShowMap } =
		useDataCatalog()

	const lg = useMediaQuery("(min-width: 1024px)")

	useEffect(() => {
		if (!lg) {
			setShowMap(false)
		}
	}, [lg, setShowMap])

	const handlePagination = (event: any, newPage: number) => {
		setCurrentPage(newPage)
	}

	return (
		<div className="w-full flex flex-col gap-4 mt-16">
			<DataCatalogFilters />
			<div className="w-full">
				<DataCatalogSearch />
			</div>
			<div className="transition-all grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(92px,1fr)] gap-4">
				{lg ? (
					<div
						className={`transition-all relative ${showMap ? "w-auto col-span-2 row-span-7" : "row-span-3"}`}
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
					</div>
				) : (
					<DataCatalogModelMap />
				)}
				{resources.length > 0 ? (
					resources.map((resource) => (
						<div key={resource.id}>
							<ResourceCard resource={resource} />
						</div>
					))
				) : (
					<div
						className={`${showMap ? "col-span-1 row-span-7" : "col-span-2 row-span-3"} flex justify-center items-center text-center text-xl rounded-lg p-10 bg-neutral-95`}
					>
						Sorry, we dont have any resources on your search.
						<br />
						Please try a new search.
					</div>
				)}
			</div>
			<div className="w-full flex justify-center">
				<Pagination
					count={pages}
					page={currentPage}
					onChange={handlePagination}
				/>
			</div>
		</div>
	)
}
