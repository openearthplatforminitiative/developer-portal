"use client"

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
	Dispatch,
	SetStateAction,
	useMemo,
} from "react"
import { Feature, Polygon, Point } from "geojson"
import { useDraw } from "@/app/components/DataCatalog/DrawControl/DrawProvider"

interface DataCatalogFiltersContextType {
	tags: string[]
	setTags: Dispatch<SetStateAction<string[]>>
	types: string[]
	setTypes: Dispatch<SetStateAction<string[]>>
	spatial: string[]
	setSpatial: Dispatch<SetStateAction<string[]>>
	categories: string[]
	setCategories: Dispatch<SetStateAction<string[]>>
	providers: string[]
	setProviders: (providers: string[]) => void
	years: string[]
	setYears: Dispatch<SetStateAction<string[]>>
	currentPage: number
	selectedFeatures: Feature<Polygon | Point>[]
	setCurrentPage: Dispatch<SetStateAction<number>>
	pages: number
	setPages: Dispatch<SetStateAction<number>>
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

	const selectedFeatures = useMemo(() => {
		return features.filter((feature) => feature?.properties?.selected === true)
	}, [features])


	useEffect(() => {
		const storage = localStorage.getItem("dataCatalogSearch")
		console.log("STORAGE")
		if (storage && !initialized) {
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
	}, [setFeatures, initialized])

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
				selectedFeatures,
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
