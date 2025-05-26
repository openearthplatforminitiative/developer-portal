import Box from "@mui/material/Box"
import { ReactNode } from "react"
import Link from "next/link"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { ArrowForward } from "@mui/icons-material"

export interface CardProps {
	id?: number
	header: string
	subHeader: string
	cardIcon: ReactNode
	href: string
}

const CategoryCard = ({ header, subHeader, cardIcon, href }: CardProps) => {
	return (
		<Link href={href}>
			<Card className="group w-full h-full bg-card hover:bg-secondary-90 relative overflow-visible transition duration-300 shadow-none rounded-xl">
				<Box className="absolute -left-6 -top-6 size-12 flex items-center justify-center bg-primary-40 rounded-full text-neutral-100">
					{cardIcon}
				</Box>
				<Box className="flex flex-col pt-8 pb-10 pr-6 pl-6">
					<Box className="flex flex-row justify-between my-2">
						<Typography className="text-2xl">{header}</Typography>
						<Box className="transform transition-transform duration-300 group-hover:translate-x-2">
							<ArrowForward />
						</Box>
					</Box>
					<Typography className="text-base">{subHeader}</Typography>
				</Box>
			</Card>
		</Link>
	)
}

export default CategoryCard
