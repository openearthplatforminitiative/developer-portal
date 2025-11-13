import { bbox, simplify } from "@turf/turf"

async function importResources() {
	try {
		const resources = await fetch(
			"https://api.openepi.io/catalog/v1/resources/?per_page=1000"
		)
		const data = await resources.json()
		return data.data
	} catch (error) {
		throw new Error("Failed to import resources: " + error.message)
	}
}

async function importResourceById(id) {
	if (!id) {
		throw new Error("Resource ID is required")
	}
	try {
		const resource = await fetch(
			`https://api.openepi.io/catalog/v1/resources/${id}`,
			{
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
		const data = await resource.json()
		if (data.spatial_extent && data.spatial_extent.length > 0) {
			data.spatial_extent_type = data.spatial_extent.some(
				(extent) => extent.type === "GLOBAL"
			)
				? "GLOBAL"
				: "REGION"
			data.has_spatial_extent = true
			data.spatial_extent = data.spatial_extent.map((extent) => {
				if (extent.geometry) {
					extent.geometry = simplify(extent.geometry)
					extent.geometry.bbox = bbox(extent.geometry)
				}
				return extent
			})
		}
		return data
	} catch (error) {
		throw new Error("Failed to import resource by ID: " + error.message)
	}
}

const resources = await importResources()
const detailedResources = await Promise.all(
	resources.map(async (resource) => {
		const detailedResource = await importResourceById(resource.id)
		return detailedResource
	})
)

// write to a local file
// export const Resources = detailedResources

const fileName = "resources.ts"

import { writeFileSync } from "fs"
writeFileSync(
	`src/data/${fileName}`,
	`import { Resource } from "@/types/resource"

    export const Resources: Resource[] = ${JSON.stringify(detailedResources, null, 2)};`
)
