"use server"

import { Feature, Point, Polygon } from "geojson"
import {
	Category,
	Provider,
	Resource,
	ResourceSummary,
} from "./DataCatalogTypes"

export type SpatialTypes = "REGION" | "GLOBAL" | "NON_SPATIAL"
export type ResourceTypes = "API" | "Dataset" | "ML Model"

export const fetchProviders = async (): Promise<Provider[]> => {
	return await fetch(`http://localhost:8000/providers`, {
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

export const fetchProvider = async (
	id: string
): Promise<Provider | undefined> => {
	return await fetch(`http://localhost:8000/providers/${id}`, {
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

export const fetchDataCatalog = async (
	types: string[],
	features: Feature<Point | Polygon>[],
	spatial: string[],
	categories: string[],
	providers: string[],
	tags: string[],
	page: number,
	limit: number
): Promise<{ total_pages: number, resources: ResourceSummary[] }> => {
	return await fetch(
		`http://localhost:8000/resources?page=${page - 1}&per_page=${limit}`,
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
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			console.error("Error:", error)
			return []
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

export const fetchCategories = async () => {
	return await fetch(`http://localhost:8000/categories`, {
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
