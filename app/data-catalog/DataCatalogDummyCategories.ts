import {
	AgricultureOutlined,
	AirOutlined,
	BoltOutlined,
	EmojiNatureOutlined,
	EmojiTransportationOutlined,
	ForestOutlined,
	GroupsOutlined,
	LandscapeOutlined,
	LocalFireDepartmentOutlined,
	RocketLaunchOutlined,
	SatelliteAltOutlined,
	SettingsOutlined,
	WarningAmberOutlined,
	WaterDropOutlined,
	WaterOutlined,
} from "@mui/icons-material"
import { CategorySummary } from "./DataCatalogTypes"

export const DummyCategories: CategorySummary[] = [
	{
		id: "1",
		name: "Remote Sensing",
		description:
			"Earth observation data from satellites, aerial sensors, and Lidar systems.",
		icon: SatelliteAltOutlined,
	},
	{
		id: "2",
		name: "Forest",
		description:
			"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
		icon: ForestOutlined,
	},
	{
		id: "3",
		name: "Agriculture",
		description:
			"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
		icon: AgricultureOutlined,
	},
	{
		id: "4",
		name: "Biodiversity",
		description:
			"Species records, habitat patterns, extinction risk, and diversity modeling.",
		icon: EmojiNatureOutlined,
	},
	{
		id: "5",
		name: "Climate",
		description:
			"Weather, air quality, and climate trends from historical and real-time sources.",
		icon: AirOutlined,
	},
	{
		id: "6",
		name: "Ocean",
		description:
			"Marine ecosystems, seafloor, water properties, species, and sea level change.",
		icon: WaterOutlined,
	},
	{
		id: "7",
		name: "Complementary",
		description:
			"Extra geographic layers, maps, and tools that support integration and analysis.",
		icon: SettingsOutlined,
	},
	{
		id: "8",
		name: "Energy",
		description:
			"Grids, production, renewables, usage patterns, emissions, and energy potential.",
		icon: BoltOutlined,
	},
	{
		id: "9",
		name: "Land cover",
		description:
			"Land classification and surface types based on satellite and mapped sources.",
		icon: LandscapeOutlined,
	},
	{
		id: "10",
		name: "Demographic and Human Footprint",
		description:
			"Population, urban spread, mobility, household estimates, and human pressures.",
		icon: GroupsOutlined,
	},
	{
		id: "11",
		name: "Infrastructure",
		description:
			"Roads, buildings, transport systems, and utility networks across regions.",
		icon: EmojiTransportationOutlined,
	},
	{
		id: "12",
		name: "Natural Hazards",
		description:
			"Wildfires, droughts, earthquakes, floods, volcanoes, and other natural events.",
		icon: LocalFireDepartmentOutlined,
	},
	{
		id: "13",
		name: "Radioactivity",
		description:
			"Environmental radiation levels and monitoring of radioactive exposure.",
		icon: WarningAmberOutlined,
	},
	{
		id: "14",
		name: "Astronomy",
		description:
			"Solar activity, celestial phenomena, and space-based environmental factors.",
		icon: RocketLaunchOutlined,
	},
	{
		id: "15",
		name: "Hydro",
		description:
			"Rivers, ice, rainfall, groundwater, flooding, and inland water dynamics.",
		icon: WaterDropOutlined,
	},
]
