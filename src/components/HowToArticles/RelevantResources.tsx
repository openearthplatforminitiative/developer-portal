import { fetchResource } from "@/app/data-catalog/DataCatalogActions"
import { ResourceTutorial } from "@/sanity/api"
import { ResourceSummary } from "@/types/resource"
import { Typography } from "@mui/material"
import { ResourceCard } from "../ResourceCard"

export async function RelevantResources({
	tutorial,
}: {
	tutorial: ResourceTutorial
}) {
	const directResourcesIds =
		tutorial.relevantResources?.resources?.map((resource) => resource.id) ?? []
	const excludedResourceTypes =
		tutorial.relevantResources?.excludedResourceTypes || []
	const includeResourceChildren =
		tutorial.relevantResources?.includeResourceChildren || false
	const includeResourceParents =
		tutorial.relevantResources?.includeResourceParents || false
	const directResources = directResourcesIds.map((id) =>
		fetchResource(id)
			.then((resource) => {
				if (!resource) {
					return null
				}
				return resource
			})
			.catch(() => null)
	)
	const resources = await Promise.all(directResources)
	const filteredResources = resources.filter((resource) => !!resource)
	if (filteredResources.length === 0) {
		return null
	}
	const allResources = [...filteredResources] as ResourceSummary[]
	for (const resource of filteredResources) {
		if (resource) {
			if (includeResourceChildren && resource.children) {
				for (const child of resource.children) {
					if (!excludedResourceTypes.includes(child.type)) {
						allResources.push(child)
					}
				}
			}
			if (includeResourceParents && resource.parents) {
				for (const parent of resource.parents) {
					if (!excludedResourceTypes.includes(parent.type)) {
						allResources.push(parent)
					}
				}
			}
		}
	}
	return (
		<div>
			<Typography variant="h2" className="mt-8 mb-6">
				Relevant Resources
			</Typography>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{allResources.map((resource) => (
					<ResourceCard key={resource.id} resource={resource} />
				))}
			</div>
		</div>
	)
}
