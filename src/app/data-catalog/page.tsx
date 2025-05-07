import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { DataCatalog } from "@/components/DataCatalog/DataCatalog"

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
		</Box>
	)
}

export default DataCatalogPage