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
import { MapProvider } from "react-map-gl/maplibre"
import { DrawProvider } from "./DrawControl/DrawProvider"
import {
	fetchDataCatalog,
	ResourceTypes,
	SpatialTypes,
} from "@/app/data-catalog/DataCatalogActions"
import { Resource } from "@/app/data-catalog/DataCatalogTypes"
import { useDraw } from "@/app/components/DataCatalog/DrawControl/DrawProvider"

interface DataCatalogContextType {
	selectedAreaId: string | number | undefined
	setSelectedAreaId: (id: string | number | undefined) => void
	resources: Resource[]
	tags: string[]
	setTags: (tags: string[]) => void
	types: ResourceTypes[]
	setTypes: (types: string[]) => void
	selectedFeatures: Feature<Point | Polygon>[]
	spatial: SpatialTypes[]
	setSpatial: (spatial: string[]) => void
	categories: string[]
	setCategories: (categories: string[]) => void
	providers: string[]
	setProviders: (providers: string[]) => void
	years: string[]
	setYears: (years: string[]) => void
	showMap: boolean
	setShowMap: (showMap: boolean) => void
}

const DataCatalogContext = createContext<DataCatalogContextType | undefined>(
	undefined
)

export const DataCatalogProvider = ({ children }: { children: ReactNode }) => {
	const [resources, setResources] = useState<Resource[]>([])
	const [tags, setTags] = useState<string[]>([])
	const [types, setTypes] = useState<ResourceTypes[]>([])
	const [spatial, setSpatial] = useState<SpatialTypes[]>([])
	const [selectedAreaId, setSelectedAreaId] = useState<
		string | number | undefined
	>()
	const [categories, setCategories] = useState<string[]>([])
	const [years, setYears] = useState<string[]>([])
	const [providers, setProviders] = useState<string[]>([])
	const [showMap, setShowMap] = useState(true)
	const { features } = useDraw()

	const selectedFeatures = useMemo(() => {
		return features.filter((feature) => feature?.properties?.selected === true)
	}, [features])

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
	}, [types, features, spatial, tags, categories, providers])

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
