"use client"

import { Feature, Polygon, Point } from "geojson"
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	useMemo,
} from "react"
import {
	fetchDataCatalog,
	fetchProviders,
	fetchCategories,
} from "@/app/data-catalog/DataCatalogActions"
import { ResourceSummary } from "@/types/resource.ts"
import { Provider } from "@/types/provider.ts"
import { Category } from "@/types/category.ts"
import { useDataCatalogFilters } from "./DataCatalogFiltersProvider.tsx"
import { useDraw } from "@/app/components/DataCatalog/DrawControl/DrawProvider.tsx"

interface DataCatalogDataContextType {
	resources: ResourceSummary[]
	categories: Category[]
	setCategories: (categories: Category[]) => void
	providers: Provider[]
	setProviders: (providers: Provider[]) => void
	selectedFeatures: Feature<Polygon | Point>[]
}

const DataCatalogDataContext = createContext<
	DataCatalogDataContextType | undefined
>(undefined)

export const DataCatalogDataProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [resources, setResources] = useState<ResourceSummary[]>([])
	const [categories, setCategories] = useState<Category[]>([])
	const [providers, setProviders] = useState<Provider[]>([])

	const {
		types,
		spatial,
		categories: filterCategories,
		providers: filterProviders,
		tags,
		currentPage,
		setPages,
		initialized,
	} = useDataCatalogFilters()

	const { features } = useDraw()

	const selectedFeatures = useMemo(() => {
		return features.filter((feature) => feature?.properties?.selected === true)
	}, [features])

	useEffect(() => {
		const updateCategories = async () => {
			setCategories(await fetchCategories())
		}
		updateCategories()
	}, [])

	useEffect(() => {
		const updateProviders = async () => {
			setProviders(await fetchProviders())
		}
		updateProviders()
	}, [])

	useEffect(() => {
		console.log(initialized)
		if (!initialized) return
		const updateResources = async () => {
			const data = await fetchDataCatalog(
				types,
				selectedFeatures,
				spatial,
				filterCategories,
				filterProviders,
				tags,
				currentPage,
				21
			)
			console.log(data)
			setPages(data.total_pages)
			setResources(data.data)
		}
		updateResources()
	}, [types, spatial, tags, filterCategories, filterProviders, selectedFeatures, currentPage, initialized, setPages])

	return (
		<DataCatalogDataContext.Provider
			value={{
				resources,
				categories,
				setCategories,
				providers,
				setProviders,
				selectedFeatures,
			}}
		>
			{children}
		</DataCatalogDataContext.Provider>
	)
}

export const useDataCatalogData = () => {
	const context = useContext(DataCatalogDataContext)
	if (context === undefined) {
		throw new Error("useSitesMap must be used within a SitesMapProvider")
	}
	return context
}
