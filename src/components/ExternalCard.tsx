import { Card } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon"
import Link from "next/link"
import Image from "next/image"

interface ExternalCardProps {
	header: string
	subHeader: string
	href: string
	imageUrl: string
	alt: string
}
export const ExternalCard = ({
	header,
	subHeader,
	imageUrl,
	href,
	alt,
}: ExternalCardProps) => {
	return (
		<Link
			target="_blank"
			href={href}
			className="flex flex-1 md:min-w-[350px] min-w-[250px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)] h-full"
		>
			<Card className="group rounded-xl bg-neutralvariant-90 hover:bg-secondary-90 w-full h-full shadow-none">
				<Image
					src={imageUrl}
					alt={alt}
					width={350}
					height={250}
					className="h-full w-full"
				/>
				<Box className="flex flex-col p-6">
					<Box className="flex flex-row justify-between items-center">
						<Typography variant="h5" className="text-xl xs:text-2xl">
							{header}
						</Typography>
						<Box className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
							<ExternalLinkIcon />
						</Box>
					</Box>
					<Typography variant="body2">{subHeader}</Typography>
				</Box>
			</Card>
		</Link>
	)
}
