"use client"

import Box from "@mui/material/Box"
import { CircleSpinner } from "@/app/components/CircleSpinner"
import Typography from "@mui/material/Typography"
import ApiCard from "@/app/components/ApiCard"
import { WeatherIcon } from "@/app/icons/WeatherIcon"
import { GeocodingIcon } from "@/app/icons/GeocodingIcon"
import { FloodIcon } from "@/app/icons/FloodIcon"
import InfoCard from "@/app/components/InfoCard"
import { JavascriptLogo } from "@/app/icons/JavascriptLogo"
import { PythonLogo } from "@/app/icons/PythonLogo"
import Button from "@mui/material/Button"
import Link from "next/link"
import { JavaLogo } from "@/app/icons/JavaLogo"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import {
	LightbulbOutlined,
	LockOpenOutlined,
	VerifiedUserOutlined,
} from "@mui/icons-material"
import { Categories } from "./components/Categories"

const Home = () => {
	const { data: session } = useSession()

	return (
		<Box className="lg:mb-28 mb-16 w-full">
			<Box className="flex lg:flex-row flex-col">
				<Box className="relative flex flex-col bg-primary-90 lg:w-1/2 overflow-hidden">
					<CircleSpinner />
					<Typography
						variant="h1"
						className="flex-1 py-48 text-4xl xs:text-6xl w-full h-full lg:w-[40rem] px-8 pr-16 lg:ml-auto z-10"
					>
						<b>Global open source data</b>
						<br /> enabling local innovation
					</Typography>
				</Box>
				<Box className="flex flex-col lg:w-1/2 gap-10 justify-center py-16 px-8 bg-neutral-90">
					<Box className="flex flex-row gap-2">
						<LockOpenOutlined className="text-4xl" />
						<Typography className="text-2xl xs:text-3xl">
							Truly open source
						</Typography>
					</Box>
					<Box className="flex flex-row gap-2">
						<VerifiedUserOutlined className="text-4xl" />
						<Typography className="text-2xl xs:text-3xl">
							Verified and quality assured data
						</Typography>
					</Box>
					<Box className="flex flex-row gap-2">
						<LightbulbOutlined className="text-4xl" />
						<Typography className="text-2xl xs:text-3xl">
							Built to support innovation
						</Typography>
					</Box>
				</Box>
			</Box>
			{!session && (
				<Box className="bg-neutral-95 py-20">
					<Box className="flex flex-col-reverse lg:flex-row gap-14 sm:w-full sm:max-w-7xl sm:mx-auto px-8">
						<Box className="flex flex-1 flex-col gap-10">
							<Typography className="text-3xl xs:text-4xl">
								Explore our catalog and start building your innovation
							</Typography>
							<Typography className="text-xl xs:text-2xl">
								OpenEPI is an enabler for the worlds open-source data, linking
								developers to verified, high-quality data to support innovation.
								While our APIs are available without authentication, signing up
								can offer additional benefits like increased rate limits for
								greater flexibility.
							</Typography>
							<Button
								variant="contained"
								className="rounded-full normal-case shadow-none text-xl px-8 py-4 self-start"
								onClick={() =>
									signIn("keycloak", { callbackUrl: "/dashboard" })
								}
							>
								Register for increased rate limits
							</Button>
						</Box>
						<Image
							width={256}
							height={256}
							alt="about"
							src="about-logo.svg"
							className="w-40 h-40 xs:w-48 xs:h-48 lg:w-64 lg:h-64"
						/>
					</Box>
				</Box>
			)}
			<Box className="flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto mt-28 px-8">
				<Box className="flex flex-col gap-8 mb-6">
					<Typography variant="h2" className="text-3xl xs:text-4xl">
						Data catalog of open data
					</Typography>
					<Typography className="text-xl xs:text-2xl">
						We provide a range of climate and geospatial data.
						<br />
						OpenEPI, together with our partners, provide APIs, Datasets, ML Models and more
					</Typography>
					<Link href="/data-catalog" className="lg:w-fit w-full">
						<Button
							variant="contained"
							className="rounded-full normal-case shadow-none text-xl px-8 py-4"
						>
							Explore all our data catalog
						</Button>
					</Link>
				</Box>
			</Box>
			<div className="flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto mt-28 px-8">
				<div className="flex flex-col gap-8 mb-6">
					<Typography variant="h2" className="text-3xl xs:text-4xl">
						Categories
					</Typography>
					<Typography className="text-xl xs:text-2xl">
						We currently provide data from these categories
					</Typography>
				</div>
				<Categories />
			</div>
			<Box className="flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto mt-28 px-8">
				<Box className="flex flex-col lg:mx-0 mx-2">
					<Box className="flex flex-col gap-8 mb-16">
						<Typography variant="h2" className="text-3xl xs:text-4xl">
							Client libraries
						</Typography>
						<Typography className="text-xl xs:text-2xl">
							To ease your integration with our APIs, we provide three client
							libraries
						</Typography>
					</Box>
					<Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
		</Box >
	)
}

export default Home
