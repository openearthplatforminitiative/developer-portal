"use server"

import { Feature, Point, Polygon } from "geojson"
import { Resource, ResourceSummary } from "@//types/resource"
import { Provider, ProviderSummary } from "@//types/provider"
import { Category, CategorySummary } from "@//types/category"
import { Pagination } from "@//types/pagination"

export type SpatialTypes = "REGION" | "GLOBAL" | "NON_SPATIAL"
export type ResourceTypes = "API" | "Dataset" | "ML Model"

export const fetchProviders = async (): Promise<ProviderSummary[]> => {
	return await fetch(`http://localhost:8000/providers`, {
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.then((data) => data)
		.catch(() => {
			throw new Error("Could not fetch providers")
		})
}

export const fetchProvider = async (
	id: string
): Promise<Provider | undefined> => {
	return await fetch(`http://localhost:8000/providers/${id}`, {
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.then((data) => data)
		.catch(() => {
			throw new Error("Could not fetch provider")
		})
}

export const fetchDataCatalog = async (
	types: string[],
	features: Feature<Point | Polygon>[],
	spatial: string[],
	categories: string[],
	providers: string[],
	tags: string[],
	page: number,
	limit: number
): Promise<Pagination<ResourceSummary>> => {
	return await fetch(
		`http://localhost:8000/resources/search?page=${page - 1}&per_page=${limit}`,
		{
			method: "POST",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				types: types,
				features: features,
				spatial: spatial,
				categories: categories,
				providers: providers,
				tags: tags,
			}),
		}
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.then((data) => data)
		.catch(() => {
			throw new Error("Could not fetch data catalog")
		})
}

export const fetchResource = async (
	id: string
): Promise<Resource | undefined> => {
	return await fetch(`http://localhost:8000/resources/${id}`, {
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			console.log("response", response)
			return response.json()
		})
		.then((data) => {
			console.log("data", data)
			return data
		})
		.catch((error) => {
			console.error("Error:", error)
			return []
		})
}

export const fetchCategories = async (): Promise<CategorySummary[]> => {
	return await fetch(`http://localhost:8000/categories`, {
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		})
		.then((data) => data)
		.catch(() => {
			throw new Error("Could not fetch categories")
		})
}

export const fetchCategory = async (
	id: string
): Promise<Category | undefined> => {
	return await fetch(`http://localhost:8000/categories/${id}`, {
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			console.error("Error:", error)
			return []
		})
}
