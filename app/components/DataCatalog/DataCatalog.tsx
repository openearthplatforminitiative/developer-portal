"use client"

import { DataCatalogList } from "./DataCatalogList"
import { DataCatalogMap } from "./DataCatalogMap"
import { DataCatalogProvider, useDataCatalog } from "./DataCatalogProvider"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { DataCatalogFilters } from "./DataCatalogFilters"
import { Tooltip, useMediaQuery } from "@mui/material"
import { DataCatalogModelMap } from "./DataCatalogModelMap"
import { useEffect } from "react"
import { DrawProvider } from "./DrawControl/DrawProvider"
import { MapProvider } from "react-map-gl/maplibre"

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

	const lg = useMediaQuery("(min-width: 1024px)")

	useEffect(() => {
		if (!lg) {
			setShowMap(false)
		}
	}, [lg])

	return (
		<div className="w-full flex flex-col gap-4 mt-16">
			<DataCatalogFilters />
			<div
				className={`max-h-[700px] transition-all w-full flex ${showMap ? "gap-10" : "gap-0"} justify-stretch`}
			>
				{lg ? (
					<div
						className={`relative transition-all max-w-2/3 ${showMap ? "w-full h-[700px]" : "w-0"}`}
					>
						<DataCatalogMap />
						<div className="absolute -right-5 top-0 h-full flex justify-center items-center pointer-events-none">
							<Tooltip title="Toggle map">
								<button
									className="cursor-pointer size-10 rounded-full bg-secondary-90 hover:bg-neutral-90 shadow pointer-events-auto"
									onClick={() => setShowMap(!showMap)}
								>
									{showMap ? <ChevronLeft /> : <ChevronRight />}
								</button>
							</Tooltip>
						</div>
					</div>
				) : (
					<DataCatalogModelMap />
				)}
				<div className="@container gap-5 flex flex-col overflow-y-scroll grow">
					<DataCatalogList />
				</div>
			</div>
		</div>
	)
}
