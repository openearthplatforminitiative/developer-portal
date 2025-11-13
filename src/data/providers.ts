import { Provider } from "@/types/provider"

export const Providers: Provider[] = [
	{
		id: "164dcab3-d124-4169-94f0-7b659a532c97",
		name: "World Resources Institute",
		short_name: "WRI",
		provider_url: "https://www.wri.org/",
		description:
			"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "0809e814-6890-4ce6-a513-174d91ba158e",
					title: "Global Forest Watch Data API",
					abstract:
						"Global Forest Watch (GFW) is an online platform that provides data and tools for monitoring forests. The GFW Data API gives access historica and near real-time information about where and how forests are changing around the world.",
					type: "API",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "d82e346f-02db-42c5-b137-7b898b3c21ae",
					title: "Net Forest Change",
					abstract:
						" The data shows how much more or less tree cover a given area (country, state/province, or county/municipality) had in 2020 compared to 2000. This is not an annual data set and is displayed as a 20-year cumulative layer with a baseline year of 2000 and end year of 2020.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "dde97ae6-eaec-4f6f-bc24-9bcef979e099",
					title: "Emerging Hotspots",
					abstract:
						"A statistical analysis identifying and categorizing tropical primary forest loss hot spots from 2002–2023 using high-resolution satellite data and geospatial clustering tools.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "d28ea030-560a-42df-8149-5b4f2b174685",
					title: "Tree Cover Loss due to Fires",
					abstract:
						"This dataset is produced by the Global Land Analysis & Discovery (GLAD) lab at the University of Maryland (UMD) and measures areas of tree cover loss due to fire, compared to all other drivers across all global land (except Antarctica and other Arctic islands), at approximately 30 × 30-meter resolution. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "208f5a3b-b0db-4a8e-9727-6ea47e263c45",
					title: "Annual Tree Cover Height",
					abstract:
						"The Annual Tree Cover Height dataset maps global forest canopy height at 30-meter resolution. It was developed using GEDI lidar and Landsat time-series data. The model estimates forest height worldwide, including regions beyond GEDI coverage, through advanced regression modeling.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5790279f-de0b-41a5-adb5-d66d0f1de43f",
					title: "Net GHG flux (forest)",
					abstract:
						"The  GHG Net Flux dataset estimates greenhouse gas emissions and removals from forest-related land use across the tropics. It combines satellite-based tree cover change data with carbon stock and land-use information to track CO₂ fluxes annually at a high spatial resolution.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "798a806e-aa8a-4bc2-b560-7d308a7f757f",
					title: "Gross GHG emissions (forest)",
					abstract:
						"The Gross GHG Emissions (forest) dataset quantifies carbon dioxide emissions from forest loss, including both aboveground and belowground biomass, across the tropics. It reflects gross emissions without accounting for forest regrowth, supporting climate impact assessments and mitigation planning.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "f57e1cc2-96ec-466e-a648-4a2fb8e819d1",
					title: "Resource Watch API",
					abstract:
						"  The Resource Watch API offers a gateway to hundreds of curated datasets on climate, energy, forests, water, and more.",
					type: "API",
					icon: "landscape",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "a2e1dde2-8105-4faf-bed5-0070790be8a5",
					title: "Natural Forest map",
					abstract:
						"This dataset displays the extent of natural forest and non-natural tree cover in 2020, drawing from the relevant classes delineated in the Science Based Targets Network 2019s (STBN) Natural Lands Map. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "23c4c70e-08b7-41bd-ab83-38a3551d4729",
					title: "Integrated Deforestation Alerts",
					abstract:
						"The Integrated Deforestation Alerst aggregates deforestation alerts from three alert systems (GLAD-L, GLAD-S2, RADD) into a single, integrated deforestation alert layer. This integration allows users to detect deforestation events faster than any single system alone, as the integrated layer is updated when any of the source alert systems are updated.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "cdd71a00-6a36-44d7-88c6-f87601f974d3",
					title: "Spatial Database of Planted Trees (SDPT) v2.0",
					abstract:
						"The Spatial Database of Planted Trees (SDPT) v2.0 maps planted forests and agricultural tree crops across 158 countries. It enables users to distinguish between planted and natural forests using satellite-derived datasets and harmonized classifications.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "99afc756-5ecc-42ea-974f-d6452c12a8d8",
					title: "Places to Watch - highlights areas of concern",
					abstract:
						"The Places to Watch (PTW) initiative is an automated workflow to identify high-priority areas of deforestation alerts each quarter, based on the intersection of the integrated deforestation alerts with other datasets.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5dd4695e-3046-4b23-b7c4-108cd96213e4",
					title: "Tropical Tree Cover",
					abstract:
						"The tropical tree cover data maps tree extent at a 10-meter scale and tree cover at a half-hectare scale to support accurate monitoring of trees in urban areas, agricultural lands, and open canopy or dry forest ecosystems. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "86a2ca03-2ceb-47b7-9168-6fcad5e7c4f7",
		name: "The National Aeronautics and Space Administration",
		short_name: "NASA",
		provider_url: "https://www.nasa.gov/",
		description:
			"The National Aeronautics and Space Administration (NASA) is the U.S. government agency responsible for space exploration, scientific discovery, and aeronautics research. Founded in 1958, NASA leads missions to explore space, study Earth and other planets, and develop cutting-edge technology to advance knowledge and innovation.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "ad413484-f196-4a1f-ae9b-0e2539c6d7a6",
					title: "Tree Cover Loss",
					abstract:
						"The Tree Cover Loss dataset measures areas of tree cover loss across all global land (except  - Antarctica and other Arctic islands) at approximately 30 × 30 meter resolution. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "80b82b1c-2065-498f-b30b-e065084f8ace",
					title: "VIIRS I-Band 375 m Active Fire Data",
					abstract:
						"VIIRS I-Band 375 m Active Fire Data provides global fire detections at 375-meter resolution using thermal observations from NASA and NOAA satellites. It supports real-time wildfire monitoring and response through daily satellite overpasses.",
					type: "DATASET",
					icon: "e911_emergency",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "351a072e-f658-4a97-99be-e3b95bc0c2a4",
		name: "HUB Ocean",
		short_name: "HUBO",
		provider_url: "https://www.hubocean.earth/",
		description:
			"HUB Ocean is a non-profit technology organization dedicated to unlocking the power of ocean data to drive sustainable ocean stewardship. Based in Norway, it develops digital tools and platforms that combine science, industry, and policy data, enabling better decisions for the health and future of the ocean.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "91c73904-ea9d-498c-864d-876afb087a44",
					title: "HUB Ocean API",
					abstract:
						"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
					type: "API",
					icon: "water",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "3483bb35-d375-4d9c-8a06-4da9a2d182ae",
					title: "OpenStreetMap Physical Boundaries - Coastlines",
					abstract:
						"The OpenStreetMap Physical Boundaries – Coastlines dataset provides accurate, up-to-date representations of global shorelines. It is derived from OSM’s natural=coastline features.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "41c88778-472d-4ea0-b457-cfc9e5f6d17c",
		name: "The International Union for Conservation of Nature",
		short_name: "IUCN",
		provider_url: "https://iucn.org/",
		description:
			"The International Union for Conservation of Nature (IUCN) is a global organization that works to conserve nature and ensure sustainable use of natural resources.It brings together governments, NGOs, and experts to address biodiversity loss and support environmental policy worldwide.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "fa4537f2-9f6b-415e-8766-721fde4709f2",
					title: "IUCN Red List Habitat Data",
					abstract:
						"This dataset consists if geospatial layers describing habitat types used in IUCN Red List assessments. It assists in evaluating species distributions, habitat suitability, and conservation priorities.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "87887d80-3ea4-4d29-b4f0-fd18790215cc",
					title: "The World Database on Protected Areas (WDPA)",
					abstract:
						"The World Database on Protected Areas (WDPA) is the most comprehensive global spatial data set on marine and terrestrial protected areas available. ",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "9b52fcba-fac9-4291-a382-a56583dc1458",
		name: "International Food Policy Research Institute",
		short_name: "IFPRI",
		provider_url: "https://www.ifpri.org/",
		description:
			"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
					title: "MapSPAM",
					abstract:
						"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
					type: "DATASET_COLLECTION",
					icon: "agriculture",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "29fa3a59-fa44-49e6-bbfd-75a774496f11",
					title: "MapSPAM: Physical Crop Area (42 crops mapped separately)",
					abstract:
						"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5aa55cd3-dd02-4826-b7b6-3a1295793908",
					title: "MapSPAM: Harvested Crop Area (42 crops mapped separately)",
					abstract:
						"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "f034e890-f287-4d49-a10e-b53c58d5d0ee",
					title: "MapSPAM: Yield (42 crops mapped separately)",
					abstract:
						"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "100a8a0a-8424-413e-bb43-a35395ca59e2",
					title:
						"MapSPAM: Production System (irrigated/rainfed and high/low input for 42 crops mapped separately)",
					abstract:
						"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "8b562ad7-aab3-4516-bcb5-ade15f94f1de",
		name: "The National Oceanic and Atmospheric Administration",
		short_name: "NOAA",
		provider_url: "https://www.noaa.gov/",
		description:
			"The National Oceanic and Atmospheric Administration (NOAA) is a U.S. government agency focused on understanding and protecting the Earth’s atmosphere, oceans, and coasts. Through research, monitoring, and forecasting, NOAA provides vital information on weather, climate, marine ecosystems, and environmental hazards to support public safety and sustainable resource management.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "4bc18f21-f716-4c38-9283-197da87589f3",
					title: "Global Ocean Data Analysis Project (GLODAP) data",
					abstract:
						"The Global Ocean Data Analysis Project (GLODAP) is a comprehensive, quality-controlled dataset of ocean interior biogeochemical observations, compiled from ship-based measurements collected over decades. It includes variables such as carbon dioxide (CO₂), total alkalinity,pH nutrients, oxygen, and more, from all major ocean basins.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "0302ef91-941b-4bda-aac5-633d2f64d102",
		name: "Allen Coral Atlas Partnership ",
		short_name: "ACA",
		provider_url: "https://www.allencoralatlas.org",
		description:
			"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "621ff0ba-de92-4ad0-b33b-28f125deaced",
					title: "Allen Coral Atlas",
					abstract:
						"The Allen Coral Atlas is a global-scale coral reef habitat mapping project using Planet Dove 3.7m resolution daily satellite imagery, wave models, and ecological data to create consistent global coral reef habitat maps supporting science and conservation. ",
					type: "DATASET_COLLECTION",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5090485f-e578-4d4f-a3e7-524cf19f594a",
					title: "Allen Coral Atlas - Benthic Habitats",
					abstract:
						"This dataset provides a global-scale map of coral reef bottom types, encompassing living benthic organisms, various sediment types, and the underlying substrate.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "8491eb1a-d7a1-4ced-bd86-6405f9713f63",
					title: "Allen Coral Atlas - Geomorphic Zones",
					abstract:
						"This dataset provides a detailed mapping of twelve distinct coral reef structural zones, from seaward-facing to internal features.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5389ee3b-abe6-43b1-b96f-ce81f49d18a3",
					title: "Allen Coral Atlas - Mapped Regions",
					abstract:
						"This dataset provides geographic boundaries defining the distinct coral reef regions mapped by the Allen Coral Atlas, providing a framework for accessing and analyzing reef data across different global marine territories.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "e17195f3-e204-45ab-9cc8-aac91a44c1b9",
					title: "Allen Coral Atlas - Reef Extent",
					abstract:
						"This dataset provides a comprehensive mapping product showing the extent of shallow coral reef environments visible from satellites. ",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "95f1c5f7-a307-45ae-aba4-b62be1fee126",
		name: "Global Fishing Watch",
		short_name: "GFIW",
		provider_url: "https://globalfishingwatch.org/",
		description:
			"Global Fishing Watch is an international nonprofit organization that uses satellite technology and machine learning to map and monitor global fishing activity in near real-time. By promoting transparency in ocean governance, it helps governments, researchers, and the public combat illegal fishing and support sustainable fisheries management.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "798a806e-aa8a-4bc2-b560-7d308a7f757f",
					title: "Gross GHG emissions (forest)",
					abstract:
						"The Gross GHG Emissions (forest) dataset quantifies carbon dioxide emissions from forest loss, including both aboveground and belowground biomass, across the tropics. It reflects gross emissions without accounting for forest regrowth, supporting climate impact assessments and mitigation planning.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "2327cc56-98e3-4abc-975d-2a272b3120b5",
					title: "Global Offshore Infrastructure Detection (2017-2021)",
					abstract:
						"The Global Offshore Infrastructure Detection (2017–2021) dataset presents monthly detections of fixed offshore structures using deep learning applied to satellite imagery. It provides global coverage of oil platforms, wind turbines, and other installations with confidence classifications.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "7a1e5fb3-c4f6-49f3-90a7-e47bab728f23",
		name: "Varda",
		short_name: "VARDA",
		provider_url: "https://www.varda.ag/",
		description:
			"​Varda is an ag-tech data service provider aiming to enhance collaboration across the agriculture industry through improved data discovery and sharing. Their flagship platform, Global FieldID, assigns unique identifiers to agricultural fields, facilitating seamless data exchange and improving traceability throughout the food supply chain.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "b83bed16-967a-4c29-bb30-f9094355d777",
					title: "SoilHive API",
					abstract:
						"SoilHive API provides access to a wealth of soil and spatial data, facilitating research, analysis, and data-driven decision making. Our API leverages modern web standards like JSON-LD and schema.org to ensure data is well-structured, discoverable, and interoperable.",
					type: "API",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "e6e9bd6d-39d1-4590-b4f0-b2fad4cc2b09",
					title: "Global Field ID",
					abstract:
						"Varda’s Global Field ID is a unique, persistent identifier system for agricultural fields worldwide, enabling interoperability and traceability across geospatial datasets. It facilitates collaboration, data exchange, and sustainable agriculture by linking diverse information to standardized land units.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
		name: "Global Biodiversity Information Facility",
		short_name: "GBIF",
		provider_url: "https://www.gbif.org/",
		description:
			"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "d09e060e-21ba-46d6-b6b4-01b354221b79",
					title: "GBIF API",
					abstract:
						"The GBIF API provides seamless access to global species occurrence records and taxonomic data, biodiversity data crucial for ecological research and conservation planning. ",
					type: "API",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "6ba47c5b-52a6-4650-ad03-95b0bb87a276",
					title: "GBIF Backbone Taxonomy",
					abstract:
						"A curated taxonomic framework maintained by GBIF, providing a unified reference for classifying and matching species names. It supports data integration and quality control across global biodiversity datasets.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "3c9c4ff7-c382-4285-887a-b1a6616bf034",
					title: "Catalogue of Life",
					abstract:
						"A comprehensive and authoritative global index of species of organisms on Earth. It aggregates taxonomic data from hundreds of expert-validated sources to support research and biodiversity assessments.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "a128fe53-fe91-4071-9fa7-aace641bf4f9",
					title: "GBIF - Occurrences",
					abstract:
						"The GBIF Occurrence API provides access to millions of species observations and specimen records. It supports querying by taxonomy, geography, date, and data quality filters.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "fa4537f2-9f6b-415e-8766-721fde4709f2",
					title: "IUCN Red List Habitat Data",
					abstract:
						"This dataset consists if geospatial layers describing habitat types used in IUCN Red List assessments. It assists in evaluating species distributions, habitat suitability, and conservation priorities.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "9a62085a-8983-4335-87dd-f1c89c9d0d74",
		name: "European Commission – Joint Research Centre",
		short_name: "JRC",
		provider_url: "https://joint-research-centre.ec.europa.eu/",
		description:
			"European Commission – Joint Research Centre (JRC) is the scientific and technical arm of the European Commission. It conducts research to support EU policy-making, including soil monitoring through initiatives like LUCAS Soil, which provides harmonized soil data across Europe.",
		created_by: "sander@kroglid.com",
		resources: [],
	},
	{
		id: "8fe5cb51-94d7-4dc9-9e0e-7d9aed9bcec6",
		name: "International Soil Reference and Information Centre",
		short_name: "ISRIC",
		provider_url: "https://www.isric.org/",
		description:
			"International Soil Reference and Information Centre (ISRI), based in the Netherlands, is a global center for soil data, mapping, and information. It develops and maintains major platforms like SoilGrids and WOSIS, providing open access to high-quality soil data to support global research, sustainable land use, and policy.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "c7a6a723-62eb-4fcf-8193-5a6edf1825a7",
					title: "Soilgrids Data Aggregated 1000m",
					abstract:
						"SoilGrids is a system for digital soil mapping based on a global compilation of soil profile data (WoSIS) and environmental layers.",
					type: "DATASET",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "7e791a5b-6da6-445b-aa3a-7a1f7d0e7b22",
		name: "iSDA",
		short_name: "ISDA",
		provider_url: "https://www.isda-africa.com/about/",
		description:
			"iSDA (Innovative Solutions for Decision Agriculture) is an organization that uses advanced data analytics, satellite imagery, and AI to deliver actionable insights and digital tools for improving agricultural productivity and decision-making, especially in sub-Saharan Africa.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "eca08614-e664-4d59-a2cd-f30262af0805",
					title: "iSDAsoil",
					abstract:
						"iSDAsoil is a high-resolution (30m) soil dataset for Africa, providing machine learning–based predictions of over 20 soil properties at two depths (0–20 cm and 20–50 cm), derived from satellite data and 100,000+ soil samples.",
					type: "DATASET_COLLECTION",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "a496e8cb-8b8d-4339-b915-3d6d93ebab3d",
					title: "iSDAsoil API",
					abstract:
						"iSDAsoil is a high-resolution (30m) soil dataset for Africa, providing machine learning–based predictions of over 20 soil properties at two depths (0–20 cm and 20–50 cm), derived from satellite data and 100,000+ soil samples.",
					type: "API",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "f39d5eb8-c8e4-4262-80a6-b4755e422de7",
		name: "The Norwegian Meteorological Institute",
		short_name: "MET",
		provider_url: "https://www.met.no",
		description:
			"The Norwegian Meteorological Institute forecasts weather, monitors the climate and conducts research",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "4a3e1e8f-a517-4c26-9ea8-47e4970c8d32",
					title: "Location Weather Forecast API",
					abstract: "Weather forecast for a specified place",
					type: "API",
					icon: "air",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "57a1a466-e0b1-483e-b879-0ed4002fdeae",
		name: "OpenEPI",
		short_name: "OEPI",
		provider_url: "https://openepi.io",
		description:
			"OpenEPI is an initiative to drive local innovation globally. Open data, AI, and digital technologies will be crucial catalysts for collaboration, innovation, and informed decision-making in addressing climate change – building resilience and preparing for climate mitigation in agriculture and fisheries.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "0a0af8a6-1cdf-4ccf-9a47-046dfd1fffda",
					title: "OpenEPI Crop Health Model API",
					abstract:
						"Early disease detection in crops using open data and machine learning",
					type: "API",
					icon: "agriculture",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "67c49484-fcad-4dc7-aec3-2ae2fdf91268",
					title: "OpenEPI SoilGrids API",
					abstract: "Global soil information based on SoilGrids-data",
					type: "API",
					icon: "agriculture",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "17c6bd74-1e52-49ed-843f-3162881da1e6",
					title: "OpenEPI Deforestation API",
					abstract: "Aggregated deforestation data on a global scale",
					type: "API",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "0b792d08-c891-4929-b065-ded3615b45f6",
					title: "OpenEPI Flood Forecast API",
					abstract:
						"Flood forecasting based on the Global Flood Awareness System (GloFAS)",
					type: "API",
					icon: "e911_emergency",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "38d5ce81-1f5e-43e2-abbb-f4e3dcf39e50",
					title: "OpenEPI Agriculture API",
					abstract:
						"Summary of agriculture relevant data from other OpenEPI APIs",
					type: "API",
					icon: "agriculture",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "ddd2a0b7-4160-4317-83ac-cb41ceb4c374",
					title: "OpenEPI Geocoding API",
					abstract:
						"Geocoding and reverse-geocoding based on OpenStreetMap®-data",
					type: "API",
					icon: "settings",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "58a2b4af-2e7e-40f7-b16f-0168702779d6",
					title: "OpenEPI Super Resolved Sentinel 2 Raster",
					abstract:
						"Provides Super Resolved Sentinel 2 Raster images limited to the country of Brazil",
					type: "DATASET",
					icon: "settings",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "c8049ab6-3b69-4c14-8f33-72838a365c05",
		name: "The Global Land Analysis and Discovery, University of Maryland",
		short_name: "GLAD",
		provider_url: "https://glad.umd.edu/",
		description:
			"The Global Land Analysis and Discovery (GLAD) team at the University of Maryland focuses on monitoring global land cover and forest change using satellite data. Their work supports conservation, climate research, and sustainable land-use planning by providing high-resolution, timely environmental data.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "208f5a3b-b0db-4a8e-9727-6ea47e263c45",
					title: "Annual Tree Cover Height",
					abstract:
						"The Annual Tree Cover Height dataset maps global forest canopy height at 30-meter resolution. It was developed using GEDI lidar and Landsat time-series data. The model estimates forest height worldwide, including regions beyond GEDI coverage, through advanced regression modeling.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "ad413484-f196-4a1f-ae9b-0e2539c6d7a6",
					title: "Tree Cover Loss",
					abstract:
						"The Tree Cover Loss dataset measures areas of tree cover loss across all global land (except  - Antarctica and other Arctic islands) at approximately 30 × 30 meter resolution. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "13b3a7fa-cec8-4eeb-b423-b87156250789",
					title: "DIST alerts (all-ecosystem vegetation disturbance alerts)",
					abstract:
						"DIST Alerts are near real-time vegetation disturbance alerts developed by the GLAD Lab at the University of Maryland. They detect land cover changes across all ecosystems using satellite imagery, helping track degradation beyond forests alone.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "a455acae-cd19-42b9-a53a-f3fbfb7384d2",
		name: "Google",
		short_name: "GOOGLE",
		provider_url: "https://earthengine.google.com/",
		description:
			"Google is a global technology company that develops tools and infrastructure for searching, accessing, and analyzing information. Its platforms, such as Google Earth Engine, support large-scale data processing and are widely used in fields like environmental monitoring, geospatial analysis, and research.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "ad413484-f196-4a1f-ae9b-0e2539c6d7a6",
					title: "Tree Cover Loss",
					abstract:
						"The Tree Cover Loss dataset measures areas of tree cover loss across all global land (except  - Antarctica and other Arctic islands) at approximately 30 × 30 meter resolution. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "c72ffb98-147b-477e-86ab-57563afabdb7",
		name: "Global Forest Watch",
		short_name: "GFW",
		provider_url: "https://www.globalforestwatch.org/",
		description:
			"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "0809e814-6890-4ce6-a513-174d91ba158e",
					title: "Global Forest Watch Data API",
					abstract:
						"Global Forest Watch (GFW) is an online platform that provides data and tools for monitoring forests. The GFW Data API gives access historica and near real-time information about where and how forests are changing around the world.",
					type: "API",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "d82e346f-02db-42c5-b137-7b898b3c21ae",
					title: "Net Forest Change",
					abstract:
						" The data shows how much more or less tree cover a given area (country, state/province, or county/municipality) had in 2020 compared to 2000. This is not an annual data set and is displayed as a 20-year cumulative layer with a baseline year of 2000 and end year of 2020.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "dde97ae6-eaec-4f6f-bc24-9bcef979e099",
					title: "Emerging Hotspots",
					abstract:
						"A statistical analysis identifying and categorizing tropical primary forest loss hot spots from 2002–2023 using high-resolution satellite data and geospatial clustering tools.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "d28ea030-560a-42df-8149-5b4f2b174685",
					title: "Tree Cover Loss due to Fires",
					abstract:
						"This dataset is produced by the Global Land Analysis & Discovery (GLAD) lab at the University of Maryland (UMD) and measures areas of tree cover loss due to fire, compared to all other drivers across all global land (except Antarctica and other Arctic islands), at approximately 30 × 30-meter resolution. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5790279f-de0b-41a5-adb5-d66d0f1de43f",
					title: "Net GHG flux (forest)",
					abstract:
						"The  GHG Net Flux dataset estimates greenhouse gas emissions and removals from forest-related land use across the tropics. It combines satellite-based tree cover change data with carbon stock and land-use information to track CO₂ fluxes annually at a high spatial resolution.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "a2e1dde2-8105-4faf-bed5-0070790be8a5",
					title: "Natural Forest map",
					abstract:
						"This dataset displays the extent of natural forest and non-natural tree cover in 2020, drawing from the relevant classes delineated in the Science Based Targets Network 2019s (STBN) Natural Lands Map. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "23c4c70e-08b7-41bd-ab83-38a3551d4729",
					title: "Integrated Deforestation Alerts",
					abstract:
						"The Integrated Deforestation Alerst aggregates deforestation alerts from three alert systems (GLAD-L, GLAD-S2, RADD) into a single, integrated deforestation alert layer. This integration allows users to detect deforestation events faster than any single system alone, as the integrated layer is updated when any of the source alert systems are updated.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "cdd71a00-6a36-44d7-88c6-f87601f974d3",
					title: "Spatial Database of Planted Trees (SDPT) v2.0",
					abstract:
						"The Spatial Database of Planted Trees (SDPT) v2.0 maps planted forests and agricultural tree crops across 158 countries. It enables users to distinguish between planted and natural forests using satellite-derived datasets and harmonized classifications.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "99afc756-5ecc-42ea-974f-d6452c12a8d8",
					title: "Places to Watch - highlights areas of concern",
					abstract:
						"The Places to Watch (PTW) initiative is an automated workflow to identify high-priority areas of deforestation alerts each quarter, based on the intersection of the integrated deforestation alerts with other datasets.",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
			{
				resource: {
					id: "5dd4695e-3046-4b23-b7c4-108cd96213e4",
					title: "Tropical Tree Cover",
					abstract:
						"The tropical tree cover data maps tree extent at a 10-meter scale and tree cover at a half-hectare scale to support accurate monitoring of trees in urban areas, agricultural lands, and open canopy or dry forest ecosystems. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "0de325ae-95e4-4d14-8f4f-44481349415e",
		name: "European Space Agency",
		short_name: "ESA",
		provider_url: "https://www.esa.int/",
		description:
			"The European Space Agency (ESA) is an intergovernmental organization dedicated to space exploration, Earth observation, and technological innovation. ESA coordinates space missions and scientific research across its 22 member states, working closely with partners like the EU, NASA, and private industry.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "58a2b4af-2e7e-40f7-b16f-0168702779d6",
					title: "OpenEPI Super Resolved Sentinel 2 Raster",
					abstract:
						"Provides Super Resolved Sentinel 2 Raster images limited to the country of Brazil",
					type: "DATASET",
					icon: "settings",
					has_spatial_extent: true,
					spatial_extent_type: "REGION",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "916c92c2-ed86-4024-a53c-adea20ab5b4c",
		name: "The Catalogue of Life Partnership",
		short_name: "COLP",
		provider_url: "https://www.catalogueoflife.org/",
		description:
			"The Catalogue of Life (CoL) is a partnership between Species 2000 and ITIS, with the Global Biodiversity Information Facility (GBIF) hosting the latest version of the CoL website since December 2020. CoL aims to provide a widely accepted classification of species, based on expert consensus",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "3c9c4ff7-c382-4285-887a-b1a6616bf034",
					title: "Catalogue of Life",
					abstract:
						"A comprehensive and authoritative global index of species of organisms on Earth. It aggregates taxonomic data from hundreds of expert-validated sources to support research and biodiversity assessments.",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "3ac98d0a-d0a7-4296-b6ff-c94087f40e0f",
		name: "Science Based Target Network",
		short_name: "SBTN",
		provider_url: "https://sciencebasedtargetsnetwork.org",
		description:
			"The Science Based Targets Network (SBTN) is a global collaboration of environmental organizations working to define science-based targets for nature. It helps companies and cities set measurable goals to reduce their impacts on biodiversity, freshwater, land, and oceans in line with Earth’s ecological limits.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "a2e1dde2-8105-4faf-bed5-0070790be8a5",
					title: "Natural Forest map",
					abstract:
						"This dataset displays the extent of natural forest and non-natural tree cover in 2020, drawing from the relevant classes delineated in the Science Based Targets Network 2019s (STBN) Natural Lands Map. ",
					type: "DATASET",
					icon: "forest",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "ee785ec7-e529-41e5-b813-1fa73cf4c518",
		name: "Aerospace Information Research Institute, Chinese Academy of Sciences",
		short_name: "AIRI",
		provider_url: "https://english.aircas.cas.cn/",
		description:
			"The Aerospace Information Research Institute (AIR) is a leading research institution under the Chinese Academy of Sciences, established in 2018 through the merger of three CAS institutes. AIR focuses on aerospace information science, remote sensing, and digital Earth technologies, contributing to advancements in Earth observation and sustainable development.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "a48c53a9-03e5-414e-9160-e23009bb64c1",
					title: "Global Annual Burned Area",
					abstract:
						"The Global Annual Burned Area dataset provides yearly maps of fire-affected land surfaces using satellite-based observations. It supports spatial analysis of fire patterns, ecosystem impacts, and carbon emissions modeling at global scale.",
					type: "DATASET",
					icon: "landscape",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "3a62e721-8105-4bdf-bb4b-dcc42a87e3c6",
		name: "NGA Maritime Safety Information",
		short_name: "NGASI",
		provider_url: "https://msi.nga.mil",
		description:
			"The NGA Maritime Safety Information service, provided by the U.S. National Geospatial-Intelligence Agency (NGA), delivers critical navigational updates to support safe maritime operations worldwide.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "23c218fc-dfeb-4dc1-98db-70b89ee41f99",
					title: "World Port Index",
					abstract:
						"The World Port Index (Pub 150) contains the location and physical characteristics of, and the facilities and services offered by major ports and terminals world-wide.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "38c3f5c9-4cc2-4be6-8d4d-2b5fcac863b3",
		name: "World Wildlife Fund US",
		short_name: "WWF US",
		provider_url: "https://www.worldwildlife.org/",
		description:
			"WWF-US is the United States branch of the World Wide Fund for Nature, one of the world’s leading conservation organizations. WWF works to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.\n",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "5db148e9-6de5-4755-adb2-0589535778e1",
					title: "Global Lakes and Wetlands Database version 2",
					abstract:
						"The Global Lakes and Wetlands Database (GLWD) version 2 provides global spatial data on the extent and distribution of inland water bodies, including lakes, reservoirs, rivers, and wetlands. It offers high-resolution polygon and grid datasets for use in hydrological modeling, climate research, and biodiversity assessments.",
					type: "DATASET",
					icon: "water_drop",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "edcc1e35-70a4-4c7c-854c-f39e13c7e6d7",
		name: "The Technical University of Denmark",
		short_name: "DTU",
		provider_url: "https://www.dtu.dk/english",
		description:
			"The Technical University of Denmark (DTU), founded in 1829 by physicist Hans Christian Ørsted, is a leading European institution specializing in engineering and the natural sciences. Located in Kongens Lyngby, just north of Copenhagen, DTU is renowned for its cutting-edge research, innovation, and sustainability initiatives.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "de860cd8-f2ce-4898-a8f6-c7b0c5413cc2",
					title: "Global Wind Atlas",
					abstract:
						"The Global Wind Atlas provides high-resolution, long-term averaged wind resource data—including wind speed, power density, and wind direction—at a spatial resolution of 250 meters. It supports wind energy planning by offering free, globally consistent data modeled using mesoscale and microscale techniques.",
					type: "DATASET",
					icon: "bolt",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "4635e2a0-c67e-415b-a963-63a17d90be26",
		name: "Earth Observation Group (EOG)",
		short_name: "EOG",
		provider_url: "https://payneinstitute.mines.edu/eog/",
		description:
			"The Earth Observation Group (EOG) is a research unit within NOAA's National Centers for Environmental Information. It specializes in processing and analyzing satellite data to monitor global environmental and human activity, with a focus on nighttime lights and energy infrastructure.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "100edfc8-499b-4a76-9500-4fd5ed3ee0fd",
					title: "VIIRS Nighttime Lights",
					abstract:
						"The VIIRS Nighttime Lights dataset, produced by the Earth Observation Group at NOAA, offers global measurements of artificial lighting as seen from space during nighttime. This dataset is widely used for monitoring human activity, urbanization, economic development, and disaster impacts.",
					type: "DATASET",
					icon: "bolt",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "f662a5f1-3e25-40bc-a818-76fc5ac38831",
		name: "OpenStreetMap",
		short_name: "OSM",
		provider_url: "https://www.openstreetmap.org/",
		description:
			"OpenStreetMap (OSM) is an open-source, user-driven mapping platform that provides freely accessible geospatial data. Contributors use GPS, satellite imagery, and local knowledge to create and edit vector-based maps. Widely used in GIS applications, OSM supports routing, spatial analysis, and custom map rendering. It is maintained by the OpenStreetMap Foundation, which advocates for open geographic data and collaborative mapping.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "3483bb35-d375-4d9c-8a06-4da9a2d182ae",
					title: "OpenStreetMap Physical Boundaries - Coastlines",
					abstract:
						"The OpenStreetMap Physical Boundaries – Coastlines dataset provides accurate, up-to-date representations of global shorelines. It is derived from OSM’s natural=coastline features.",
					type: "DATASET",
					icon: "water",
					has_spatial_extent: false,
					created_by: "sander@kroglid.com",
					updated_by: "sander@kroglid.com",
				},
			},
		],
	},
	{
		id: "32b0bb05-533c-4ada-93bb-8e773de9413b",
		name: "United Nations Environment Programme World Conservation Monitoring Centre",
		short_name: "UNEP-WCMC",
		provider_url: "https://www.unep-wcmc.org/",
		description:
			"The United Nations Environment Programme World Conservation Monitoring Centre (UNEP-WCMC) is a global center of excellence on biodiversity. It provides data, analysis, and tools to support environmental decision-making and conservation policy.",
		created_by: "sander@kroglid.com",
		resources: [
			{
				resource: {
					id: "87887d80-3ea4-4d29-b4f0-fd18790215cc",
					title: "The World Database on Protected Areas (WDPA)",
					abstract:
						"The World Database on Protected Areas (WDPA) is the most comprehensive global spatial data set on marine and terrestrial protected areas available. ",
					type: "DATASET",
					icon: "emoji_nature",
					has_spatial_extent: true,
					spatial_extent_type: "GLOBAL",
					created_by: "sander@kroglid.com",
				},
			},
		],
	},
]
