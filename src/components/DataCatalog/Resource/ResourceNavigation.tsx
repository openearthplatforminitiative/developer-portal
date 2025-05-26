"use client"
import { Resource } from "@/types/resource"
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
	timelineItemClasses,
} from "@mui/lab"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"

type ResourceNavigationProps = {
	resource: Resource
}

const hasLinkedResources = (resource: Resource) => {
	return (
		(resource?.parents?.length ?? 0) > 0 ||
		(resource?.children?.length ?? 0) > 0
	)
}

const hasSpatialExtent = (resource: Resource) => {
	return resource?.spatial_extent && resource?.spatial_extent.length > 0
}

const hasCodeExamples = (resource: Resource) => {
	return resource?.code_examples && resource?.code_examples.length > 0
}

const hasExamples = (resource: Resource) => {
	return resource?.examples && resource?.examples.length > 0
}

const test = [
	{
		section: "Top",
		id: "top",
		isAvailable: (resource: Resource) => true,
	},
	{
		section: "Linked Resources",
		id: "linked-resources",
		isAvailable: (resource: Resource) => hasLinkedResources(resource),
	},
	{
		section: "Spatial Extent",
		id: "spatial-extent",
		isAvailable: (resource: Resource) => hasSpatialExtent(resource),
	},
	{
		section: "Code Examples",
		id: "code-examples",
		isAvailable: (resource: Resource) => hasCodeExamples(resource),
	},
	{
		section: "Examples",
		id: "examples",
		isAvailable: (resource: Resource) => hasExamples(resource),
	},
	{
		section: "Providers",
		id: "providers",
		isAvailable: (resource: Resource) => true,
	},
]

export const ResourceNavigation = ({ resource }: ResourceNavigationProps) => {
	const [activeSection, setActiveSection] = useState("top")

	useEffect(() => {
		window.addEventListener("scroll", () => {
			test.forEach((item) => {
				const isVisible = isInViewport(item.id)
				if (isVisible) {
					setActiveSection(item.id)
				}
			})
		})
		return () => {
			window.removeEventListener("scroll", () => {
				test.forEach((item) => {
					const isVisible = isInViewport(item.id)
					if (isVisible) {
						setActiveSection(item.id)
					}
				})
			})
		}
	}, [])

	const isMobile = useMediaQuery("(max-width: 768px)")

	const isInViewport = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			const rect = element.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			)
		}
		return false
	}
	const handleScroll = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest",
			})
		}
	}
	const handleClick = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			const rect = element.getBoundingClientRect()
			const isVisible = isInViewport(id)
			if (!isVisible) {
				handleScroll(id)
			} else {
				const offset = rect.top + window.scrollY
				window.scrollTo({
					top: offset,
					behavior: "smooth",
				})
			}
		}
	}

	if (isMobile) {
		return <div>Test</div>
	} else {
		return (
			<Timeline
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				{test.map((item) => {
					if (item.isAvailable(resource)) {
						return (
							<TimelineItem
								color={activeSection === item.id ? "green" : ""}
								className="cursor-pointer"
								key={item.id}
								onClick={() => handleClick(item.id)}
							>
								<TimelineSeparator>
									<TimelineDot />
									{item.section !== "Providers" && <TimelineConnector />}
								</TimelineSeparator>
								<TimelineContent>{item.section}</TimelineContent>
							</TimelineItem>
						)
					}
					return null
				})}
			</Timeline>
		)
	}
}
