import { ResourceSummary } from "./resource"

type ProviderResource = {
	resource: ResourceSummary
}

export type ProviderSummary = {
	id: string
	name: string
	description: string
	provider_url: string
}

export type Provider = ProviderSummary & {
	resources: ProviderResource[]
}
