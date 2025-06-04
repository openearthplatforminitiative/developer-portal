"use client"

import { Button, Typography } from "@mui/material"
import { useState } from "react"
import Image from "next/image"

const partners = [
	"/hackathon/partners/norad.png",
	"/hackathon/partners/dhis2.png",
	"/hackathon/partners/geo.png",
	"/hackathon/partners/hub_ocean.png",
	"/hackathon/partners/met.png",
	"/hackathon/partners/varda.png",
	"/hackathon/partners/wri.png",
	"/hackathon/partners/knowit.png",
]

const Page = () => {
	const [showIFrame, setShowIFrame] = useState(false)

	return (
		<div className="w-full h-full max-w-[700px] px-8 lg:my-44 my-20">
			<div className="flex flex-col mb-20 items-start lg:text-center lg:items-center">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] font-semibold text-4xl xs:text-6xl"
				>
					Open data Hackation
				</Typography>
				<Typography className="text-2xl xs:text-3xl mt-4 mb-12">
					{"Endless "}
					<span className="relative">
						Opportunities
						<Image
							src="/hackathon/green_stroke.svg"
							alt="green stroke"
							width={200}
							height={50}
							className="absolute -bottom-5 xs:-bottom-7 left-0 w-full h-auto"
						/>
					</span>
				</Typography>
				<Typography className="text-lg xs:text-2xl font-medium mb-2">
					Are <span className="text-primary-40 italic font-bold">you</span> an
					aspiring changemaker?
				</Typography>
				<Typography variant="body1" className="leading-6">
					- are you into code, understanding users needs, connecting the dots in
					data or crafting sustainable solutions for tomorrow or similar?
				</Typography>
				<Typography className="text-4xl xs:text-5xl font-semibold mt-24 flex flex-wrap gap-2">
					<span>30th June</span>-<span>27th July</span>
				</Typography>
				<Typography className="mt-4 relative">
					Claim your spot - before it&apos;s full!
					<Image
						src="/hackathon/self_managed_work_and.svg"
						alt="free to attend"
						width={200}
						height={50}
						className="absolute -bottom-15 w-full max-w-72 h-auto"
					/>
				</Typography>
				<Typography className="mt-32 mb-24 leading-6">
					<span className="text-primary-40 font-medium">
						&apos;Hackation&apos; / hækˈeɪʃən /
					</span>{" "}
					: Combining the focus of a hackathon with the flexibility of your
					vacation
				</Typography>
				<div className="w-full relative flex flex-col items-center gap-3">
					<Image
						src="/hackathon/free_to_attend.svg"
						alt="Free to attend"
						width={500}
						height={300}
						className="w-full max-w-72"
					/>
					{showIFrame ? (
						<IFrame />
					) : (
						<Button
							variant="contained"
							onClick={() => setShowIFrame(!showIFrame)}
							className="bg-primary-main hover:bg-primary-30 rounded-full border-neutralvariant-50 normal-case shadow-none text-xl w-full xs:w-auto xs:px-24 py-2"
						>
							Register now!
						</Button>
					)}
				</div>
				<Typography className="text-base mt-32 mb-8 text-center w-full">
					Partners & Contributors
				</Typography>
				<div className="w-full grid grid-cols-2 xs:grid-cols-4 justify-center gap-8 items-center">
					{partners.map((partner, index) => (
						<Image
							key={index}
							src={partner}
							alt={`Partner ${index + 1}`}
							width={50}
							height={50}
							className="w-full max-w-[100px] mx-auto"
						/>
					))}
				</div>
			</div>
		</div>
	)
}

const IFrame = () => {
	return (
		<iframe
			className="w-full h-[1000px] mx-auto border-none"
			src="https://forms.office.com/Pages/ResponsePage.aspx?id=nJI1Z7-dO0efxl-9zSyfxF765mave39GuuYWfo3Gl5hURFQ4TDJMMUMwRFRSSzhCT0ZMSzlYNFBKQS4u&embed=true"
		/>
	)
}

export default Page
