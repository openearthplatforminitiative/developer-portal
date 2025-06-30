import {
	ClientConfig,
	createClient,
	groq,
	PortableTextProps,
} from "next-sanity"

export type SanityImage = {
	_type: string
	alt: string
	caption: string
	_key: string
	asset: {
		_ref: string
		_type: string
	}
}

export interface ResourceTutorial {
	_id: string
	_createdAt: string
	_updatedAt: string
	title: string
	slug: { current: string }
	mainImage: SanityImage
	relevantResources?: {
		resources: { title: string; id: string }[]
		includeResourceChildren?: boolean
		includeResourceParents?: boolean
		excludedResourceTypes?: string[]
	}
	body: PortableTextProps["value"]
}

const config: ClientConfig = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: false,
	apiVersion: "2025-06-17",
	perspective: process.env.NODE_ENV === "development" ? "raw" : undefined,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}

export const sanityClient = createClient(config)

export async function fetchResourceTutorials(): Promise<ResourceTutorial[]> {
	const query = groq`*[_type == "resource_tutorial"] | order(_updatedAt desc) {...}`
	return sanityClient.fetch(query)
}
export async function fetchLatestResourceTutorials(
	limit: number = 3,
	currentSlug?: string
): Promise<ResourceTutorial[]> {
	if (!currentSlug) {
		const query = groq`*[_type == "resource_tutorial"] | order(_updatedAt desc)[0...$limit]{...}`
		return sanityClient.fetch(query, { limit })
	}
	const query = groq`*[_type == "resource_tutorial" && slug.current != $currentSlug] | order(_updatedAt desc)[0...$limit]{...}`
	return sanityClient.fetch(query, { limit, currentSlug })
}
export async function fetchRelevantResourceTutorialsForResource(
	resourceTitle: string,
	parentsTitles: string[],
	childrenTitles: string[],
	resourceType: string
): Promise<ResourceTutorial[]> {
	const query = groq`*[
		_type == "resource_tutorial" &&
		(
			$resourceTitle in relevantResources.resources[].title  ||
			(
				(!defined(relevantResources.excludedResourceTypes) || !($resourceType in relevantResources.excludedResourceTypes)) &&
				(
					(
						relevantResources.includeResourceChildren &&
						count(relevantResources.resources[@.title in $parentsTitles]) > 0
					) ||
					(
						relevantResources.includeResourceParents &&
						count(relevantResources.resources[@.title in $childrenTitles]) > 0
					)
				)
			)
		)
	] | order(($resourceTitle in relevantResources.resources[].title) desc, count(relevantResources.resources[].title) asc, _createdAt asc){...}`
	return sanityClient.fetch(query, {
		resourceTitle,
		parentsTitles,
		childrenTitles,
		resourceType,
	})
}
export async function fetchRelevantResourceTutorialsForTutorial(
	relevantResourceTitles: string[],
	slug: string = ""
): Promise<ResourceTutorial[]> {
	const query = groq`*[_type == "resource_tutorial" &&
		count(relevantResources.resources[@.title in $relevantResourceTitles]) > 0 &&
		slug.current != $slug
	][0...3]{...}`
	return sanityClient.fetch(query, { relevantResourceTitles, slug })
}

export async function fetchResourceTutorialBySlug(
	slug: string
): Promise<ResourceTutorial> {
	const query = groq`*[_type == "resource_tutorial" && slug.current == $slug][0]{..., blockContentWithCode{..., resourceTutorialLink->}}`
	return sanityClient.fetch(query, { slug })
}
export async function fetchResourceTutorialById(
	id: string
): Promise<ResourceTutorial> {
	const query = groq`*[_type == "resource_tutorial" && _id == $id][0]{...}`
	return sanityClient.fetch(query, { id })
}
