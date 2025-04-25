import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
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
	type: "API" | "Dataset" | "ML Model"
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
	has_spatial_extent: boolean
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
	providers: ResourceProvider[]
	examples?: UseExample[]
	spatial_extent?: SpatialExtent[]
	code_examples?: CodeExample[]
	categories: ResourceCategory[]
}
