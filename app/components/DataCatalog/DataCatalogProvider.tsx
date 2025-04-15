"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { DataCatalogFiltersProvider } from "./DataCatalogFiltersProvider"
import { DataCatalogDataProvider } from "./DataCatalogDataProvider"

interface DataCatalogContextType {
	selectedAreaId: string | number | undefined
	setSelectedAreaId: (id: string | number | undefined) => void
	showMap: boolean
	setShowMap: (showMap: boolean) => void
}

const DataCatalogContext = createContext<DataCatalogContextType | undefined>(
	undefined
)

export const DataCatalogProvider = ({ children }: { children: ReactNode }) => {
	const [selectedAreaId, setSelectedAreaId] = useState<
		string | number | undefined
	>()
	const [showMap, setShowMap] = useState(true)

	return (
		<DataCatalogContext.Provider
			value={{
				selectedAreaId,
				setSelectedAreaId,
				showMap,
				setShowMap,
			}}
		>
			<DataCatalogFiltersProvider>
				<DataCatalogDataProvider>{children}</DataCatalogDataProvider>
			</DataCatalogFiltersProvider>
		</DataCatalogContext.Provider>
	)
}

export const useDataCatalog = () => {
	const context = useContext(DataCatalogContext)
	if (context === undefined) {
		throw new Error("useSitesMap must be used within a SitesMapProvider")
	}
	return context
}
