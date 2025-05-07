import { CategorySummary } from "./category"
import { ProviderSummary } from "./provider"
import { UseExample } from "./use-example"
import { License } from "./license"
import { SpatialExtent } from "./spatial-extent"
import { CodeExample } from "./code"

type ResourceProvider = {
	provider: ProviderSummary
	role: string
}

type ResourceCategory = {
	category: CategorySummary
	is_main_category: boolean
}

export type ResourceSummary = {
	id: string
	title: string
	abstract: string
	type: "API" | "DATASET" | "ML_MODEL" | "DATASET_COLLECTION"
	icon: string
	has_spatial_extent: boolean
	covers_all: boolean
	intersects_all: boolean
	covers_some: boolean
	intersects_some: boolean
}

export type Resource = ResourceSummary & {
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
	license: License
	based_on?: ResourceSummary[]
	used_by?: ResourceSummary[]
	providers: ResourceProvider[]
	examples?: UseExample[]
	spatial_extent?: SpatialExtent[]
	code_examples?: CodeExample[]
	categories: ResourceCategory[]
}
