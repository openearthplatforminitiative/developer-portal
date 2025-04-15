import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { Feature, Polygon } from "geojson"

export type CategorySummary = {
	id: string
	title: string
	abstract: string
	icon: string
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

export type ProviderData = {
	id: string
	name: string
	description?: string
	url: string
}

export type Provider = {
	id: string
	name: string
	description?: string
	resources: ResourceSummary[]
}

export type UseExample = {
	id: string
	name: string
	description: string
	example_url: string
}

export type GlobalSpatialExtent = {
	id: string
	type: "GLOBAL"
	details?: string
	spatial_resolution?: string
}

export type RegionSpatialExtent = {
	id: string
	type: "REGION"
	region: string
	details?: string
	geometry: Feature<Polygon>[]
	spatial_resolution?: string
}

export type SpatialExtent = GlobalSpatialExtent | RegionSpatialExtent

export type Code = {
	id: string
	language: "Java" | "Javascript" | "Python" | "Go" | "Bash"
	source: string
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
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
	has_spatial_extent: boolean
}

export type ResourceData = {
	id: string
	title: string
	abstract: string
	type: "API" | "Dataset" | "ML Model"
	html_content?: string
	openapi_url?: string
	download_url?: string
	git_url?: string
	documentation_url?: string
	update_frequency?: string
	release_date?: string
	client_library: boolean
	keywords: string[]
	version: string
	license: string
	basedOn: string[]
	usedBy: string[]
	providers: string[]
	examples?: UseExample[]
	spatial_extent?: SpatialExtent[]
	code_examples?: CodeExample[]
	categories: string[]
}

export type Resource = ResourceSummary & {
	html_content?: string
	icon: string
	openapi_url?: string
	download_url?: string
	git_url?: string
	documentation_url?: string
	update_frequency?: string
	release_date?: string
	client_library: boolean
	keywords: string[]
	version: string
	license: License
	based_on?: ResourceSummary[]
	used_by?: ResourceSummary[]
	providers: ProviderSummary[]
	examples?: UseExample[]
	spatial_extent?: SpatialExtent[]
	code_examples?: CodeExample[]
	categories: CategorySummary[]
}
