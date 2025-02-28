import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { PythonLogo } from "@/app/icons/PythonLogo"
import { JavascriptLogo } from "@/app/icons/JavascriptLogo"
import { FloodIcon } from "@/app/icons/FloodIcon"
import { WeatherIcon } from "@/app/icons/WeatherIcon"
import { GeocodingIcon } from "@/app/icons/GeocodingIcon"
import { DeforestationIcon } from "@/app/icons/DeforestationIcon"
import { SoilIcon } from "@/app/icons/SoilIcon"
import { CropHealthIcon } from "@/app/icons/CropHealthIcon"

import ApiCard, { CardProps } from "@/app/components/ApiCard"
import InfoCard from "@/app/components/InfoCard"
import { JavaLogo } from "@/app/icons/JavaLogo"
import { AgricultureIcon } from "@/app/icons/AgricultureIcon"

const cards: CardProps[] = [
	{
		id: 1,
		header: "Weather",
		subHeader: "This section provides access to real-time weather data.",
		cardIcon: <WeatherIcon />,
		href: "/data-catalog/weather",
	},
	{
		id: 2,
		header: "Flood",
		subHeader: "This section provides access to real-time flood forecasts.",
		cardIcon: <FloodIcon />,
		href: "/data-catalog/flood",
	},
	{
		id: 3,
		header: "Geocoding",
		subHeader: "This section provides geocoding and address lookup services.",
		cardIcon: <GeocodingIcon />,
		href: "/data-catalog/geocoding",
	},
	{
		id: 4,
		header: "Deforestation",
		subHeader:
			"This section provides data on deforestation and environmental conservation efforts.",
		cardIcon: <DeforestationIcon />,
		href: "/data-catalog/deforestation",
	},
	{
		id: 5,
		header: "Soil",
		subHeader: "This section provides precise soil data on a global scale.",
		cardIcon: <SoilIcon />,
		href: "/data-catalog/soil",
	},
	{
		id: 6,
		header: "Crop Health",
		subHeader:
			"This section provides early disease detection in crops using machine learning.",
		cardIcon: <CropHealthIcon />,
		href: "/data-catalog/crop-health",
	},
	{
		id: 7,
		header: "Agriculture",
		subHeader:
			"This section provides a summary of agricultural relevant data from the other APIs.",
		cardIcon: <AgricultureIcon />,
		href: "/data-catalog/agriculture",
	},
]

const DataCatalogPage = () => {
	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Box className="flex flex-col gap-8 mb-20">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					Data catalog of open data
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					We currently have 6 APIs available.
				</Typography>
			</Box>
			<Box className="flex flex-wrap justify-stretch gap-14 mt-16">
				{cards.map((card) => (
					<ApiCard
						key={card.id}
						header={card.header}
						subHeader={card.subHeader}
						cardIcon={card.cardIcon}
						href={card.href}
					/>
				))}
			</Box>
			<Box className="flex flex-col gap-8 mt-28 w-full">
				<Typography variant="h2" className="text-3xl xs:text-4xl">
					Client libraries
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					We provide two client libraries to make use of our data easier.
				</Typography>
				<Box className="flex justify-stretch lg:flex-row flex-col justify-s gap-6 mt-8 w-full">
					<InfoCard
						externalLink={true}
						header="Javascript"
						subHeader="A javascript client for accessing data from OpenEPI."
						cardIcon={<JavascriptLogo />}
						href="https://www.npmjs.com/package/openepi-client"
					/>
					<InfoCard
						externalLink={true}
						header="Python"
						subHeader="A python client for accessing data from OpenEPI."
						cardIcon={<PythonLogo />}
						href="https://pypi.org/project/openepi-client/"
					/>
					<InfoCard
						externalLink={true}
						header="Java"
						subHeader="A java client for accessing data from OpenEPI."
						cardIcon={<JavaLogo />}
						href="https://central.sonatype.com/artifact/io.openepi/openepi-client"
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default DataCatalogPage
