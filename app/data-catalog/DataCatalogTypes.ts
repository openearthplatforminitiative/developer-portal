import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { Feature, Polygon } from "geojson"

export type CategorySummary = {
	id: string
	name: string
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
	description: string
}

export type Category = CategorySummary & {
	resources: ResourceSummary[]
}

export type License = {
	id: string
	name: string
	description: string
	url: string
}

export type ProviderSummary = {
	id: string
	name: string
	description: string
	url: string
}

export type Provider = {
	id: string
	name: string
	description?: string
	url: string
	resources: ResourceSummary[]
}

export type UseExample = {
	id: string
	title: string
	description: string
	example_url: string
}

export type GlobalSpatialExtent = {
	id: string
	type: "Global"
	details?: string
	spatialResolution?: string
}

export type RegionSpatialExtent = {
	id: string
	type: "Region"
	region: string
	details?: string
	geometry: Feature<Polygon>[]
	spatialResolution?: string
}

export type SpatialExtent = GlobalSpatialExtent | RegionSpatialExtent

export type Code = {
	id: string
	language: "Java" | "Javascript" | "Python" | "Go" | "Bash"
	code: string
}

export type CodeExample = {
	id: string
	title: string
	description?: string
	code: Code[]
}

export type ResourceSummary = {
	id: string
	title: string
	abstract: string
	type: "API" | "Dataset" | "ML Model"
}

export type Resource = {
	id: string
	title: string
	abstract: string
	type: "API" | "Dataset" | "ML Model"
	html_content?: string
	openapi_url?: string
	download_url?: string
	github_url?: string
	documentation_url?: string
	update_frequency?: string
	release_date?: string
	client_library: boolean
	keywords: string[]
	version: string
	license: License
	basedOn?: ResourceSummary[]
	usedBy?: ResourceSummary[]
	providers: ProviderSummary[]
	useExamples?: UseExample[]
	spatialExtent?: SpatialExtent[]
	codeExamples?: CodeExample[]
	categories: CategorySummary[]
}
