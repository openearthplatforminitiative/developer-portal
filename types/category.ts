import { ResourceSummary } from "./resource"

type CategoryResource = {
	resource: ResourceSummary
}

export type CategorySummary = {
	id: string
	title: string
	abstract: string
	icon: string
}

export type Category = CategorySummary & {
	resources: CategoryResource[]
}
