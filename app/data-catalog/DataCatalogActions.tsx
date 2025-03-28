import { Feature, Point, Polygon } from "geojson"
import { DataCatalogDummyData } from "./DataCatalogDummyData"
import { booleanContains } from "@turf/turf"
import { Provider, ProviderSummary, Resource } from "./DataCatalogTypes"
import { DummyCategories } from "./DataCatalogDummyCategories"

export type SpatialTypes = "Region" | "Global" | "Non"
export type ResourceTypes = "API" | "Dataset" | "ML Model"

export const fetchProviders = async () => {
	return DataCatalogDummyData.reduce((providers, resource) => {
		resource.providers?.forEach((provider) => {
			if (!providers.some((p) => p.id === provider.id)) {
				providers.push(provider)
			}
		})
		return providers
	}, [] as ProviderSummary[])
}

export const fetchProvider = async (id: string): Promise<Provider | null> => {
	const providerSummary = DataCatalogDummyData.reduce(
		(foundProvider, resource) => {
			if (foundProvider) return foundProvider
			return resource.providers?.find((provider) => provider.id === id) || null
		},
		null as ProviderSummary | null
	)

	if (!providerSummary) return null

	const resources: Resource[] = DataCatalogDummyData.filter((resource) =>
		resource.providers?.some((p) => p.id === id)
	)

	return { ...providerSummary, resources }
}

export const fetchDataCatalog = async (
	types: string[],
	features: Feature<Point | Polygon>[],
	spatial: string[],
	categories: string[],
	providers: string[],
	tags: string[]
) => {
	return DataCatalogDummyData.filter((resource) => {
		if (types.length > 0 && !types.includes(resource.type)) {
			return false
		}

		if (
			spatial.length > 0 &&
			!spatial.some((spatialType) => {
				if (spatialType === "Non") {
					return !resource.spatialExtent || resource.spatialExtent.length === 0
				}
				return resource.spatialExtent?.some(
					(extent) => extent.type === spatialType
				)
			})
		) {
			return false
		}

		const coversAllFeatures = features.every((feature) =>
			resource.spatialExtent?.some((extent) => {
				if (extent.type === "Global") return true
				return extent.geometry.some((geometry) =>
					booleanContains(geometry, feature.geometry)
				)
			})
		)
		if (!coversAllFeatures) {
			return false
		}

		if (
			categories.length > 0 &&
			!categories.some((categoryId) =>
				resource.categories?.some((category) => category.id === categoryId)
			)
		) {
			return false
		}

		if (
			providers.length > 0 &&
			!providers.some((providerId) =>
				resource.providers?.some((provider) => provider.name === providerId)
			)
		) {
			return false
		}

		// Filter by tags
		const resourceText = [
			resource.title,
			resource.keywords?.join(" "),
			resource.abstract,
			resource.html_content,
			resource.providers?.map((provider) => provider.name).join(" "),
		]
			.join(" ")
			.toLowerCase()

		if (tags.length > 0) {
			return tags.some((tag) => resourceText.includes(tag.toLowerCase()))
		}
		return true
	})
}

export const fetchResource = async (id: string) => {
	return DataCatalogDummyData.find((resource) => resource.id === id)
}

export const fetchCategories = async () => {
	return DummyCategories
}
