import { ResourceSummary } from "./resource"

type ProviderResource = {
	resource: ResourceSummary
}

export type ProviderSummary = {
	id: string
	name: string
	short_name: string
	description: string
	provider_url: string
	created_by: string
}

export type Provider = ProviderSummary & {
	resources: ProviderResource[]
}
