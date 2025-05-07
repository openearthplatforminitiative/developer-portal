"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { DataCatalogFiltersProvider } from "./DataCatalogFiltersProvider"

interface DataCatalogContextType {
	selectedAreaId: string | number | undefined
	setSelectedAreaId: Dispatch<SetStateAction<string | number | undefined>>
	showMap: boolean
	setShowMap: Dispatch<SetStateAction<boolean>>
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
				{children}
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
