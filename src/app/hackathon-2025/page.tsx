import { DiscordIcon } from "@/icons/DiscordIcon"
import { Button, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

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
					<div className="relative text-left mb-8 leading-normal mx-auto overflow-x-visible">
						<p>Important dates:</p>
						<ul>
							<li className="list-disc ml-6">
								<s>
									Application deadline: <b>22. June</b>
								</s>
							</li>
							<li className="list-disc ml-6">
								<s>
									UNLEASH Hack (kickoff): <b>1. - 2. July</b>
								</s>
							</li>
							<li className="list-disc ml-6">
								<s>
									Submission deadline: <b>3. August</b>
								</s>
							</li>
							<li className="list-disc ml-6">
								<s>
									Virtual Semi-Finals: <b>11. August</b>
								</s>
							</li>
							<li className="list-disc ml-6">
								<s>
									Finale (In-person): <b>TBA</b>
								</s>
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
				</div>
			</div>
			<div className="w-full px-8 flex flex-col items-center max-w-2xl mb-16">
				<div className="prose mt-6">
					<div className="flex flex-col">
						<p>
							To get regular updates, events information, support and more,
							please join our Discord server.
						</p>
						<Link
							href="https://discord.gg/R4ASSWRe7c"
							target="_blank"
							className="w-fit"
						>
							<Button
								variant="contained"
								className="bg-primary-main rounded-full border-neutralvariant-50 normal-case shadow-none text-xl px-8 py-4"
								startIcon={<DiscordIcon />}
							>
								Join on Discord
							</Button>
						</Link>
					</div>
					<p>
						We will post more information continuously, but for now, this is
						what you need to know.
					</p>

					<h3>🗓️ Important dates – what and when:</h3>
					<ul>
						<li>
							<b>1–2 July:</b> The Hackathon kicks off with a 2-day virtual
							UNLEASH Hack, hosted by innovation organization UNLEASH. These
							days are designed to equip you with tools, mindsets, and
							collaborative frameworks for developing actionable, data-driven
							sustainability solutions using the OpenEPI platform.
						</li>
						<li>
							<b>3 July – 2 August:</b> After the UNLEASH Hack, teams will enter
							Build Mode, working independently to prototype and refine their
							solution based on their chosen problem statement.
						</li>
						<li>
							<b>3 August:</b> Submission deadline
							<br />
							Each team must submit:
							<ul>
								<li>A link to a GitHub repo containing their project code</li>
								<li>A written description and documentation of the solution</li>
							</ul>
							This should be sent to{" "}
							<a href="mailto:hackathon@openepi.io">hackathon@openepi.io</a>
						</li>
						<li>
							<b>11 August:</b> Virtual Semi-Finals
							<br />
							Selected teams will submit a short pitch and present their
							solution to a panel of judges.
						</li>
						<li>
							<b>TBA:</b> Finale (In-person)
							<br />
							Finalists will be invited to a fully-funded, two-day in-person
							Grand Finale event, where they’ll receive expert feedback and
							coaching before pitching their refined solutions. The overall
							winner and category awardees will be announced.
						</li>
					</ul>

					<h3>🤝 Team formation – who will you be working with:</h3>
					<ul>
						<li>Participants may register as individuals or teams.</li>
						<li>
							Those without a team will be matched after the registration
							deadline to form diverse, interdisciplinary groups – ideally
							blending skills from software development, data science,
							environmental research, and UX/design.
						</li>
					</ul>

					<h3>💡 What’s the challenge?</h3>
					<ul>
						<li>
							Participants are invited to create innovative digital solutions
							using open data from OpenEPI (and beyond) that contribute to one
							or more of the UN Sustainable Development Goals (SDGs).
						</li>
						<li>Your solution must:</li>
						<ul>
							<li>Use at least one open dataset accessible via OpenEPI</li>
							<li>Include a GitHub repo, documentation, and a pitch</li>
							<li>Be relevant, feasible, and well-documented</li>
						</ul>
					</ul>
					<Image
						src="hackathon/goals.svg"
						alt="UN goals"
						width={50}
						height={50}
						className="w-full max-w-2xl mx-auto"
					/>
					<h3>🏆 Awards and Recognition:</h3>
					<ul>
						<li>Main Prize: Best overall solution</li>
						<li>
							Special Award: Best female-focused solution – recognizing
							solutions addressing women’s needs, particularly in the Global
							South
						</li>
						<li>
							Bonus Award: Technical excellence – for outstanding use of
							OpenEPI&apos;s generic building blocks and collaborative,
							interdisciplinary work
						</li>
					</ul>

					<h3>🌍 Inclusion & Global Reach:</h3>
					<ul>
						<li>
							While the hackathon is open to everyone, special focus is given to
							Sub-Saharan Africa, South America, and South-East Asia.
						</li>
						<li>
							We especially encourage female developers and innovators to apply.
							Diversity is key – from your skills to your geography.
						</li>
					</ul>

					<h3>🧭 Purpose of the event:</h3>
					<ul>
						<li>Promote OpenEPI and grow its developer community</li>
						<li>
							Foster innovation and real-world experimentation using open data
						</li>
						<li>Build momentum for climate solutions aligned with SDGs</li>
						<li>
							Test and improve the OpenEPI platform through real user feedback
						</li>
					</ul>

					<h3>📍 Finale Location (TBD):</h3>
					<p>
						We aim to host the Grand Finale towards the end of August or
						beginning of September 2025
					</p>

					<h3>📣 How to participate:</h3>
					<ul>
						<li>Register on: (either solo or with a team)</li>
						<li>
							Get access to OpenEPI’s data catalogue and tech building blocks
						</li>
						<li>Attend the UNLEASH Hack and start building</li>
						<li>
							Submit your solution, get selected, and prepare for the Grand
							Finale
						</li>
					</ul>

					<h3>📬 Contact:</h3>
					<p>
						The Open Data Hackathon team uses Discord and email for all
						communications. Details will be shared after registration.
					</p>
					<p>
						If you have any questions, feel free to contact us at{" "}
						<a href="mailto:hackathon@openepi.io">hackathon@openepi.io</a>
					</p>
					<h3>💡 UNLEASH Hackathon host</h3>
					<p>
						UNLEASH, a globally recognized non-profit innovation organization,
						is a core partner of the Open Data Hackathon 2025. They bring deep
						expertise in innovation design and facilitation, having empowered
						over 9,000 young changemakers globally. As part of the partnership,
						UNLEASH will:
					</p>
					<ul>
						<li>Deliver the 2-day virtual UNLEASH Hack</li>
						<li>
							Facilitate team innovation journeys, with trained facilitators
							offering ongoing guidance during the build phase
						</li>
						<li>
							Host the Virtual Semi-Final, selecting finalists for the Grand
							Finale
						</li>
						<li>
							Onboard all participants into the UNLEASH Innovation Hub, offering
							continued access to a global community, tools, and learning
							resources
						</li>
					</ul>
					<p>
						This collaboration ensures that participants benefit from a
						world-class innovation experience, and that their ideas are
						supported not just during the hackathon, but long after it ends
					</p>
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
