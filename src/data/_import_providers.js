async function importProviders() {
	try {
		const providers = await fetch(
			"https://api.openepi.io/catalog/v1/providers/"
		)
		return await providers.json()
	} catch (error) {
		throw new Error("Failed to import providers: " + error.message)
	}
}

async function importProviderById(id) {
	if (!id) {
		throw new Error("Provider ID is required")
	}
	try {
		const provider = await fetch(
			`https://api.openepi.io/catalog/v1/providers/${id}`,
			{
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
		const data = await provider.json()
		return data
	} catch (error) {
		throw new Error("Failed to import provider by ID: " + error.message)
	}
}

const providers = await importProviders()
const detailedProviders = await Promise.all(
	providers.map(async (provider) => {
		const detailedProvider = await importProviderById(provider.id)
		return detailedProvider
	})
)

const fileName = "providers.ts"

import { writeFileSync } from "fs"

writeFileSync(
	`src/data/${fileName}`,
	`export const Providers = ${JSON.stringify(detailedProviders, null, 2)};`
)
