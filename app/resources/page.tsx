import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Card } from "@mui/material"
import { ExternalLinkIcon } from "@/app/icons/ExternalLinkIcon"
import Link from "next/link"
import { ExternalCard } from "@/app/components/ExternalCard.tsx"
import { PythonLogo } from "@/app/icons/PythonLogo"
import { JavascriptLogo } from "@/app/icons/JavascriptLogo"
import InfoCard from "@/app/components/InfoCard"
import { JavaLogo } from "@/app/icons/JavaLogo"

const ResourcesPage = () => {
	return (
		<Box className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Box className="flex flex-col gap-8 mb-20">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					Open source resources
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					Design and frontend resources, policies and specifications.
				</Typography>
			</Box>
			<Box className="flex flex-col gap-32">
				<Box className="flex flex-col gap-8">
					<Typography variant="h2" className="text-3xl xs:text-4xl w-fit">
						Documents
					</Typography>
					<Box className="flex flex-row flex-wrap gap-6 w-full">
						<Link
							href="https://www.openepi.io/resources/open-policy"
							target="_blank"
							className="w-full flex flex-1 md:min-w-[300px] min-w-[250px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)]"
						>
							<Card className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl">
								<Box className="flex flex-col p-6 gap-3">
									<Box className="flex flex-row justify-between items-baseline">
										<Typography variant="h5" className="text-xl xs:text-2xl">
											Our open policy
										</Typography>
										<Box className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
											<ExternalLinkIcon />
										</Box>
									</Box>
									{/*
                    <Typography variant='body2'>Sub text</Typography>
                  */}{" "}
								</Box>
							</Card>
						</Link>
						<Link
							href="https://www.openepi.io/resources/metadata-specification"
							target="_blank"
							className="w-full flex flex-1 md:min-w-[300px] min-w-[250px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)]"
						>
							<Card className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl">
								<Box className="flex flex-col p-6 gap-3">
									<Box className="flex flex-row justify-between items-baseline">
										<Typography variant="h5" className="text-xl xs:text-2xl">
											Our metadata specification
										</Typography>
										<Box className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
											<ExternalLinkIcon />
										</Box>
									</Box>
								</Box>
							</Card>
						</Link>
						<Link
							target="_blank"
							href="https://swagger.io/specification/"
							className="w-full flex flex-1 md:min-w-[300px] min-w-[250px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)]"
						>
							<Card className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl">
								<Box className="flex flex-col p-6 gap-3">
									<Box className="flex flex-row justify-between items-baseline">
										<Typography variant="h5" className="text-xl xs:text-2xl">
											OpenAPI Specification
										</Typography>
										<Box className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
											<ExternalLinkIcon />
										</Box>
									</Box>
								</Box>
							</Card>
						</Link>
					</Box>
				</Box>
				<Box className="flex flex-col gap-8">
					<Typography variant="h2" className="text-3xl xs:text-4xl">
						Client libraries
					</Typography>
					<Typography className="text-xl xs:text-2xl">
						We provide three client libraries to make use of our data easier.
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
				<Box className="flex flex-col gap-8">
					<Typography variant="h2" className="text-3xl xs:text-4xl w-full">
						Frontend
					</Typography>
					<Box className="flex flex-wrap gap-6">
						<ExternalCard
							header="Material UI"
							subHeader=""
							href="https://mui.com"
							imageUrl="/mui.png"
							alt="mui logo"
						/>
						<ExternalCard
							header="Next JS"
							subHeader=""
							href="https://nextjs.org"
							imageUrl="/next.png"
							alt="next logo"
						/>
						<ExternalCard
							header="Typescript"
							subHeader=""
							href="https://www.typescriptlang.org/"
							imageUrl="/ts.png"
							alt="typescript logo"
						/>
						<ExternalCard
							header="Tailwind CSS"
							subHeader=""
							href="https://tailwindcss.com/"
							imageUrl="/tailwind.png"
							alt="tailwind css logo"
						/>
					</Box>
				</Box>
				<Box className="flex flex-col gap-8">
					<Typography variant="h2" className="text-3xl xs:text-4xl">
						Design
					</Typography>
					<Box className="flex flex-1 flex-wrap gap-6">
						<ExternalCard
							header="Google fonts"
							subHeader=""
							href="https://fonts.google.com/"
							imageUrl="/google-fonts.png"
							alt="google fonts logo"
						/>
						<ExternalCard
							header="Material design"
							subHeader=""
							href="https://m3.material.io/"
							imageUrl="/material-design.png"
							alt="material design logo"
						/>
						<ExternalCard
							header="Material symbols"
							subHeader=""
							href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_back:FILL@0;wght@400;GRAD@0;opsz@24"
							imageUrl="/material-symbols.png"
							alt="material symbols logo"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default ResourcesPage
