import { Skeleton } from "@mui/material"

export const HowToCardSkeleton = () => {
	return (
		<Skeleton
			variant="rectangular"
			className="relative rounded-xl w-full aspect-square pt-[100%]"
		/>
	)
}
