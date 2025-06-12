import { createClient, groq, PortableTextProps } from "next-sanity"

export type CustomButton = {
	text: string
	url: string
}

export interface Featured {
	_id: string
	title: string
	description: string
	buttons: CustomButton[]
	promoted: boolean
}

export interface Article {
	_id: string
	_createAt: string
	title: string
	body: object[]
	slug: string
	mainImage: string
	description: string
	publishedAt: string
}

export interface ArticleObject {
	articles: Article[]
	total: number
}

interface CodeBlock {
	code: string
	language: string
}

export interface Document {
	_id: string
	title: string
	slug: { current: string }
	parentSlug?: { current: string }
	parentTitle?: string
	body: object[]
	code_examples: CodeBlock[]
}

export interface Partner {
	_id: string
	title: string
	url: string
	description: string
	partnerLogo: string
}

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

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	useCdn: false,
	apiVersion: "2025-05-22",
}

export const sanityClient = createClient(config)

export async function fetchResourceTutorials(): Promise<ResourceTutorial[]> {
	const query = groq`*[_type == "resource_tutorial"] | order(_createdAt desc) {...}`
	return sanityClient.fetch(query)
}
export async function fetchLatestResourceTutorials(
	limit: number = 3,
	currentSlug?: string
): Promise<ResourceTutorial[]> {
	if (!currentSlug) {
		const query = `*[_type == "resource_tutorial"] | order(_createdAt desc)[0...$limit]{...}`
		return sanityClient.fetch(query, { limit })
	}
	const query = `*[_type == "resource_tutorial" && slug.current != $currentSlug] | order(_createdAt desc)[0...$limit]{...}`
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
	]{...}`
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
