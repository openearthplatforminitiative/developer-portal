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
	"/hackathon/partners/unleash.png",
]

const Page = () => {
	const [showIFrame, setShowIFrame] = useState(false)

	return (
		<>
			<div className="w-full h-full max-w-[1000px] px-8 lg:mt-44 mt-20 overflow-hidden">
				<div className="flex flex-col mb-20 items-start lg:text-center lg:items-center">
					<Typography className="text-2xl mb-8 relative">
						OpenEPI <b>X</b> UNLEASH
						<Image
							src="/hackathon/black_line.svg"
							alt="line"
							width={50}
							height={50}
							className="absolute -bottom-2 left-0 object-fill w-full"
						/>
					</Typography>
					<Typography
						variant="h1"
						className="leading-[48px] xs:leading-[64px] text-tertiary-40 font-semibold text-4xl xs:text-6xl"
					>
						{"Open data Hackathon "}
						<span className="inline-flex items-center">
							2025&nbsp;
							<Image
								src="/hackathon/globe.png"
								alt="Globe"
								width={50}
								height={50}
								className="xs:w-16 w-9 object-contain"
							/>
						</span>
					</Typography>
					<Typography className="text-2xl mt-4 mb-12 max-w-3xl leading-normal">
						Passionate about using open source data to develop solutions
						targeting <b>Sub-Saharan Africa</b>, <b>Latin America</b> or{" "}
						<b>South-East Asia</b>?
						<br />
						Join
						<span className="relative">
							{" our Virtual Quest "}
							<Image
								src="/hackathon/swosj.svg"
								alt="swosj"
								width={400}
								height={20}
								className="absolute -bottom-3 left-0 object-fill w-full"
							/>
						</span>
						for innovation!
					</Typography>
					<Typography className="text-3xl mb-2 leading-normal">
						<b>
							<span className="relative">
								Are <span className="text-primary-40 italic">{" you "}</span>
								<Image
									src="/hackathon/swosj.svg"
									alt="swosj"
									width={200}
									height={50}
									className="absolute -bottom-2 left-3 object-fill w-[calc(100%+10rem)]"
								/>
							</span>
							a young aspiring changemaker?
						</b>
						<br />
						-are you into code, understanding users needs, connecting the dots
						in data or crafting sustainable solutions for tomorrow...
					</Typography>
					<Image
						src="/hackathon/self_managed_work.svg"
						alt="Self Managed Work"
						width={500}
						height={300}
						className="w-full max-w-96 mb-24 mx-auto"
					/>
					<div className="relative text-left mb-24 leading-normal mx-auto overflow-x-visible">
						<p>Important dates:</p>
						<ul>
							<li className="list-disc ml-6">
								Application deadline: <b>22. June</b>
							</li>
							<li className="list-disc ml-6">
								UNLEASH Hack (kickoff): <b>1. - 2. July</b>
							</li>
							<li className="list-disc ml-6">
								Submission deadline: <b>27. July</b>
							</li>
						</ul>

						<div className="absolute -top-8 -left-32 -right-12 -bottom-8 -z-10">
							<Image
								src="/hackathon/splash_background.svg"
								alt="Splash Background"
								fill
							/>
						</div>
					</div>
					<div className="w-full relative flex flex-col items-center gap-3 mb-24">
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
				</div>
			</div>
			<div className="w-full max-w-7xl px-8">
				<div className="relative w-full aspect-video">
					<Image
						src="hackathon/footer_image.svg"
						alt="Opportunities Hackathon"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="w-full max-w-7xl grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-8 my-16 gap-8 px-8 justify-items-center items-center">
				{partners.map((partner, index) => (
					<Image
						key={index}
						src={partner}
						alt={`Partner ${index + 1}`}
						width={50}
						height={50}
						className="w-full max-w-[100px] max-h-[50px] object-contain"
					/>
				))}
			</div>
		</>
	)
}

const IFrame = () => {
	return (
		<iframe
			className="w-full max-w-[700px] h-[650px] mx-auto border-none"
			src="https://forms.office.com/Pages/ResponsePage.aspx?id=nJI1Z7-dO0efxl-9zSyfxF765mave39GuuYWfo3Gl5hURFQ4TDJMMUMwRFRSSzhCT0ZMSzlYNFBKQS4u&embed=true"
		/>
	)
}

export default Page
