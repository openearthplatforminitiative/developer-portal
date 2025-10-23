async function importCategories() {
	try {
		const categories = await fetch(
			"https://api.openepi.io/catalog/v1/categories/"
		)
		return await categories.json()
	} catch (error) {
		throw new Error("Failed to import categories: " + error.message)
	}
}

async function importCategoryById(id) {
	if (!id) {
		throw new Error("Category ID is required")
	}
	try {
		const category = await fetch(
			`https://api.openepi.io/catalog/v1/categories/${id}`,
			{
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
		const data = await category.json()
		return data
	} catch (error) {
		throw new Error("Failed to import category by ID: " + error.message)
	}
}

const categories = await importCategories()
const detailedCategories = await Promise.all(
	categories.map(async (category) => {
		const detailedCategory = await importCategoryById(category.id)
		return detailedCategory
	})
)

const fileName = "categories.ts"

import { writeFileSync } from "fs"

writeFileSync(
	`src/data/${fileName}`,
	`export const Categories = ${JSON.stringify(detailedCategories, null, 2)};`
)
