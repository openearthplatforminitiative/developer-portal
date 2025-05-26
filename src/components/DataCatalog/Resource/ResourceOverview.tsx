import { Resource } from "@/types/resource"
import { Typography } from "@mui/material"
import { ResourceInfoTags } from "./ResourceInfoTags"
import { ResourceTag } from "./ResourceTag"
import { ResourceLinks } from "./ResourceLinks"

type ResourceOverviewProps = {
	resource: Resource
}

export const ResourceOverview = ({ resource }: ResourceOverviewProps) => {
	return (
		<>
			<div id="top" className="flex flex-col gap-8 mt-14">
				<div className="flex items-center gap-4">
					<span className="text-4xl xs:text-5xl w-min text-wrap material-symbols-outlined">
						{resource.icon}
					</span>
					<Typography variant="h1" className="text-4xl xs:text-5xl">
						{resource.title}
					</Typography>
					<ResourceTag resource={resource} />
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<ResourceInfoTags resource={resource} />
				</div>
				<div className="flex items-center gap-4">
					{resource.keywords && resource.keywords.length > 0 && (
						<Typography variant="body2">
							{resource.keywords.join(" • ")}
						</Typography>
					)}
				</div>
				<Typography className="text-xl xs:text-2xl">
					{resource.abstract}
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
				<ResourceLinks resource={resource} />
			</div>
		</>
	)
}
