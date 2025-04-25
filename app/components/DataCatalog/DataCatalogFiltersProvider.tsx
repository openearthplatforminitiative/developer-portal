"use client"

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react"
import { Resource } from "@/types/resource"
import { useDraw } from "@/app/components/DataCatalog/DrawControl/DrawProvider"

interface DataCatalogFiltersContextType {
	selectedAreaId: string | number | undefined
	setSelectedAreaId: (id: string | number | undefined) => void
	resources: Resource[]
	tags: string[]
	setTags: (tags: string[]) => void
	types: string[]
	setTypes: (types: string[]) => void
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
	initialized: boolean
}

const DataCatalogFiltersContext = createContext<
	DataCatalogFiltersContextType | undefined
>(undefined)

export const DataCatalogFiltersProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [types, setTypes] = useState<string[]>([])
	const [tags, setTags] = useState<string[]>([])
	const [spatial, setSpatial] = useState<string[]>([])
	const [categories, setCategories] = useState<string[]>([])
	const [years, setYears] = useState<string[]>([])
	const [providers, setProviders] = useState<string[]>([])
	const [initialized, setInitialized] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [pages, setPages] = useState(10)

	const { features, setFeatures } = useDraw()

	useEffect(() => {
		const storage = localStorage.getItem("dataCatalogSearch")
		console.log("STORAGE")
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
			} catch (e) {
				console.log(e)
			}
		}
		setInitialized(true)
	}, [])

	useEffect(() => {
		setCurrentPage(1)
	}, [types, features, spatial, tags, categories, providers])

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

	return (
		<DataCatalogFiltersContext.Provider
			value={{
				tags,
				setTags,
				types,
				setTypes,
				spatial,
				setSpatial,
				categories,
				setCategories,
				providers,
				setProviders,
				years,
				setYears,
				currentPage,
				setCurrentPage,
				pages,
				setPages,
				initialized,
			}}
		>
			{children}
		</DataCatalogFiltersContext.Provider>
	)
}

export const useDataCatalogFilters = () => {
	const context = useContext(DataCatalogFiltersContext)
	if (context === undefined) {
		throw new Error(
			"useDataCatalogFilters must be used within a DataCatalogFilterProvider"
		)
	}
	return context
}
