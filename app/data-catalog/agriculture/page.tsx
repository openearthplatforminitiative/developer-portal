import { AgricultureExample } from "@/app/code-examples/AgricultureExample"
import InfoCard from "@/app/components/InfoCard"
import { BackIcon } from "@/app/icons/BackIcon"
import { GithubIconBlack } from "@/app/icons/GithubIconBlack"
import { OpenApiIcon } from "@/app/icons/OpenApiIcon"
import { Box, Link, Typography } from "@mui/material"

const AgriculturePage = () => {
	return (
		<Box className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>

			<Box className="flex flex-col gap-8 mt-14">
				<Typography variant="h1" className="text-4xl xs:text-5xl">
					Agriculture API
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					Summary of the other API&apos;s, relevant for agriculture.
				</Typography>
			</Box>
			<Box className="flex lg:flex-row flex-col gap-6 mt-20">
				<InfoCard
					externalLink={true}
					header="OpenAPI Spec"
					subHeader="Specification of all endpoints available in the agriculture api."
					cardIcon={<OpenApiIcon />}
					href="https://api.openepi.io/agriculture/redoc"
				/>
				<InfoCard
					externalLink={true}
					header="Github"
					subHeader="Explore the source code behind the agriculture api."
					cardIcon={<GithubIconBlack />}
					href="https://github.com/openearthplatforminitiative/agriculture-api"
				/>
			</Box>
			<Box className="flex flex-col mt-28">
				<Typography className="text-3xl xs:text-4xl">More info</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">
					Data sources
				</Typography>
				<Typography className="text-base mt-6">
					This API aggregates data from our other APIs. It gives a summary of
					the most useful data for agriculture. Specifically it provides
					summerized data from deforestation, flood, soil and weather APIs.
				</Typography>

				<Typography className="text-3xl xs:text-4xl mt-16">Examples</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">Example 1</Typography>
				<Typography className="text-base mt-6">
					Retrieving summary of agricultural relevant data from all the APIs.
				</Typography>
				<AgricultureExample />
			</Box>
		</Box>
	)
}

export default AgriculturePage
