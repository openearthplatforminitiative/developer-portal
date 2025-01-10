import { Box } from "@mui/material"

interface SpinnerProps {
	height: number
	width: number
}

const Circle = () => (
	<svg
		className="h-full animate-spinFrom90"
		viewBox="0 0 600 600"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="300"
			cy="300"
			r="253"
			stroke="#77DAA0"
			strokeWidth="6"
			strokeDasharray="24 24 48 24 64 24"
		/>
		<circle
			cx="300"
			cy="300"
			r="293"
			stroke="#77DAA0"
			strokeWidth="6"
			strokeDasharray="24 24 48 24 64 24"
		/>
	</svg>
)

export const CircleSpinner = () => (
	<Box className="absolute h-full aspect-square -left-[20%] -bottom-[20%]">
		<Circle />
	</Box>
)
