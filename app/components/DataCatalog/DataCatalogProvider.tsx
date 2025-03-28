"use client"

import { Feature, Point, Polygon } from "geojson"
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	useMemo,
} from "react"
import { fetchDataCatalog } from "@/app/data-catalog/DataCatalogActions"
import { Resource } from "@/app/data-catalog/DataCatalogTypes"
import { useDraw } from "@/app/components/DataCatalog/DrawControl/DrawProvider"

interface DataCatalogContextType {
	selectedAreaId: string | number | undefined
	setSelectedAreaId: (id: string | number | undefined) => void
	resources: Resource[]
	tags: string[]
	setTags: (tags: string[]) => void
	types: string[]
	setTypes: (types: string[]) => void
	selectedFeatures: Feature<Point | Polygon>[]
	spatial: string[]
	setSpatial: (spatial: string[]) => void
	categories: string[]
	setCategories: (categories: string[]) => void
	providers: string[]
	setProviders: (providers: string[]) => void
	years: string[]
	setYears: (years: string[]) => void
	showMap: boolean
	setShowMap: (showMap: boolean) => void
	currentPage: number
	setCurrentPage: (page: number) => void
	pages: number
	setPages: (page: number) => void
}

const DataCatalogContext = createContext<DataCatalogContextType | undefined>(
	undefined
)

export const DataCatalogProvider = ({ children }: { children: ReactNode }) => {
	const [resources, setResources] = useState<Resource[]>([])
	const [tags, setTags] = useState<string[]>([])
	const [types, setTypes] = useState<string[]>([])
	const [spatial, setSpatial] = useState<string[]>([])
	const [selectedAreaId, setSelectedAreaId] = useState<
		string | number | undefined
	>()
	const [categories, setCategories] = useState<string[]>([])
	const [years, setYears] = useState<string[]>([])
	const [providers, setProviders] = useState<string[]>([])
	const [showMap, setShowMap] = useState(true)
	const { features, setFeatures } = useDraw()
	const [initialized, setInitialized] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [pages, setPages] = useState(10)

	const selectedFeatures = useMemo(() => {
		return features.filter((feature) => feature?.properties?.selected === true)
	}, [features])

	useEffect(() => {
		const storage = localStorage.getItem("dataCatalogSearch")
		if (storage) {
			try {
				const parsedStorage = JSON.parse(storage)
				setTypes(parsedStorage.types ?? [])
				setFeatures(parsedStorage.features ?? [])
				setSpatial(parsedStorage.spatial ?? [])
				setTags(parsedStorage.tags ?? [])
				setCategories(parsedStorage.categories ?? [])
				setProviders(parsedStorage.providers ?? [])
				setCurrentPage(parsedStorage.current_page ?? [])
				setPages(parsedStorage.pages ?? [])
			} catch {
				return
			}
		}
		setInitialized(true)
	}, [])

	useEffect(() => {
		if (!initialized) return
		localStorage.setItem(
			"dataCatalogSearch",
			JSON.stringify({
				types: types,
				features: features,
				spatial: spatial,
				tags: tags,
				categories: categories,
				providers: providers,
				current_page: currentPage,
				pages: pages,
			})
		)
	}, [
		types,
		features,
		spatial,
		tags,
		categories,
		providers,
		currentPage,
		pages,
		initialized,
	])

	useEffect(() => {
		const updateResources = async () => {
			setResources(
				await fetchDataCatalog(
					types,
					selectedFeatures,
					spatial,
					categories,
					providers,
					tags
				)
			)
		}
		updateResources()
	}, [types, features, spatial, tags, categories, providers, selectedFeatures])

	return (
		<DataCatalogContext.Provider
			value={{
				selectedAreaId,
				setSelectedAreaId,
				resources,
				tags,
				setTags,
				types,
				setTypes,
				spatial,
				setSpatial,
				selectedFeatures,
				categories,
				setCategories,
				providers,
				setProviders,
				years,
				setYears,
				showMap,
				setShowMap,
				currentPage,
				setCurrentPage,
				pages,
				setPages,
			}}
		>
			{children}
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
