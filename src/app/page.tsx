"use client"

import Typography from "@mui/material/Typography"
import InfoCard from "@/components/InfoCard"
import { JavascriptLogo } from "@/icons/JavascriptLogo"
import { PythonLogo } from "@/icons/PythonLogo"
import Button from "@mui/material/Button"
import Link from "next/link"
import { JavaLogo } from "@/icons/JavaLogo"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import {
	LightbulbOutlined,
	LockOpenOutlined,
	VerifiedUserOutlined,
} from "@mui/icons-material"
import { Categories } from "@/components/Categories"

const Home = () => {
	const { data: session } = useSession()

	return (
		<div className="w-full">
			<div className="flex flex-col bg-[url('/matt-benson-hero-unsplash.jpg')] bg-cover bg-center py-12 sm:py-48">
				<div className="flex flex-col text-primary-99 w-full sm:max-w-7xl sm:mx-auto px-8 gap-12 pb-4 justify-center">
					<div className="flex flex-col gap-2 xs:gap-3">
						<Typography
							variant="h1"
							className="flex-1 text-4xl xs:text-6xl text-shadow-lg"
						>
							Global open source data
						</Typography>
						<Typography
							variant="h2"
							className="flex-1 text-3xl xs:text-5xl text-shadow-lg"
						>
							enabling local innovation
						</Typography>
					</div>
					<div className="flex flex-col gap-4 justify-center">
						<div className="flex flex-row gap-2 items-center">
							<LockOpenOutlined className="text-2xl xs:text-4xl text-shadow-lg" />
							<Typography className="text-xl xs:text-3xl text-shadow-lg">
								Truly open source
							</Typography>
						</div>
						<div className="flex flex-row gap-2">
							<VerifiedUserOutlined className="text-2xl xs:text-4xl text-shadow-lg" />
							<Typography className="text-xl xs:text-3xl text-shadow-lg">
								Verified and quality assured data
							</Typography>
						</div>
						<div className="flex flex-row gap-2">
							<LightbulbOutlined className="text-2xl xs:text-4xl text-shadow-lg" />
							<Typography className="text-xl xs:text-3xl text-shadow-lg">
								Built to support innovation
							</Typography>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-4 w-fit">
						<Link href="/data-catalog">
							<Button
								variant="contained"
								className="rounded-full normal-case shadow-none text-xl px-8 py-4 self-start w-full"
							>
								Explore our data catalog
							</Button>
						</Link>
						<Link href="/resources">
							<Button
								variant="contained"
								className="bg-primary-98 hover:bg-neutral-95 text-neutral-0 rounded-full normal-case shadow-none text-xl px-8 py-4 self-start w-full"
							>
								Explore our resources
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="bg-neutral-95 py-16">
				<div className="flex flex-col gap-10 sm:w-full sm:max-w-7xl sm:mx-auto px-8">
					<Typography className="text-3xl xs:text-4xl">
						Open data Hackathon 2025
					</Typography>
					<Typography className="text-xl xs:text-2xl">
						Thank you to everyone who registered! The registration has now
						closed, but if you have signed up, click below to explore everything
						you need to know about the event, timeline, and resources.
					</Typography>
					<Link href="/hackathon-2025">
						<Button
							variant="contained"
							className="rounded-full normal-case shadow-none text-xl px-8 py-4 self-start"
						>
							Read more
						</Button>
					</Link>
				</div>
			</div>
			<div className="flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto mt-16 px-8">
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
			<div className="flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto my-28 px-8">
				<div className="flex flex-col lg:mx-0 mx-2">
					<div className="flex flex-col gap-8 mb-16">
						<Typography variant="h2" className="text-3xl xs:text-4xl">
							Client libraries
						</Typography>
						<Typography className="text-xl xs:text-2xl">
							To ease your integration with our APIs, we provide three client
							libraries
						</Typography>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
					</div>
				</div>
			</div>
			<div className="bg-neutral-95 py-20">
				<div className="flex flex-col lg:flex-row gap-14 sm:w-full sm:max-w-7xl sm:mx-auto px-8 items-center">
					<div className="flex flex-1 flex-col gap-10 w-full">
						<Typography className="text-3xl xs:text-4xl">
							Explore our catalog and start building your innovation
						</Typography>
						<Typography className="text-xl xs:text-2xl">
							OpenEPI is an enabler for the worlds open-source data, linking
							developers to verified, high-quality data to support innovation.
							We provide a range of climate and geospatial data. OpenEPI,
							together with our partners, provide APIs, Datasets, ML Models and
							more
						</Typography>
						<div className="grid md:grid-cols-2 gap-4 w-fit">
							<Link href="/resources">
								<Button
									variant="contained"
									className="rounded-full normal-case shadow-none text-xl px-8 py-4 self-start w-full"
								>
									Explore our data catalog
								</Button>
							</Link>
							{!session && (
								<Button
									variant="outlined"
									className="rounded-full normal-case shadow-none text-xl px-8 py-4 self-start w-full"
									onClick={() =>
										signIn("keycloak", { callbackUrl: "/dashboard" })
									}
								>
									Register for increased rate limits
								</Button>
							)}
						</div>
					</div>
					<Image
						width={256}
						height={256}
						alt="about"
						src="about-logo.svg"
						className="w-40 h-40 xs:w-48 xs:h-48 lg:w-64 lg:h-64"
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
