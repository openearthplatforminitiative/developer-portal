import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { PythonLogo } from "@/app/icons/PythonLogo"
import { JavascriptLogo } from "@/app/icons/JavascriptLogo"
import InfoCard from "@/app/components/InfoCard"
import { JavaLogo } from "@/app/icons/JavaLogo"
import { DataCatalog } from "../components/DataCatalog/DataCatalog"

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
					Search and explore our data catalog to find the data you need.
				</Typography>
			</Box>
			<DataCatalog />
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
