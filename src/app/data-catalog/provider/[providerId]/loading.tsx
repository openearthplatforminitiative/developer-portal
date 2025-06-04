import { BackIcon } from "@/icons/BackIcon"
import { Link, Skeleton, Typography } from "@mui/material"

export default function Loading() {
	return (
		<div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>
			<div className="flex flex-col mt-14 gap-8">
				<Skeleton variant="rectangular" className="w-full h-12" />
				<Skeleton variant="rectangular" className="w-1/3 h-8" />
			</div>
		</div>
	)
}
