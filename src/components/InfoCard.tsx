import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import { CardProps } from "@/components/CategoryCard"
import { ArrowForward, ArrowOutward } from "@mui/icons-material"

interface InfoCardProps extends CardProps {
	externalLink: boolean
}

const InfoCard = ({
	header,
	subHeader,
	cardIcon,
	href,
	externalLink,
}: InfoCardProps) => {
	return (
		<Link
			href={href}
			target={externalLink ? "_blank" : ""}
			className="flex flex-1 flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full hover:bg-[#6750a414] group"
		>
			<Box className="flex flex-row justify-between px-2 items-center">
				<Box className="flex flex-row gap-2 items-center">
					{cardIcon}
					<Typography className="text-xl xs:text-2xl">{header}</Typography>
				</Box>
				<Box
					className={`transform transition-transform duration-300 group-hover:translate-x-2 ${externalLink ? "group-hover:-translate-y-2" : ""}`}
				>
					{externalLink ? <ArrowOutward /> : <ArrowForward />}
				</Box>
			</Box>
			<Typography className="text-base">{subHeader}</Typography>
		</Link>
	)
}

export default InfoCard
