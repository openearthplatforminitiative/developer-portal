import { Resource } from "@/types/resource"

export const Resources: Resource[] = [
	{
		id: "621ff0ba-de92-4ad0-b33b-28f125deaced",
		title: "Allen Coral Atlas",
		abstract:
			"The Allen Coral Atlas is a global-scale coral reef habitat mapping project using Planet Dove 3.7m resolution daily satellite imagery, wave models, and ecological data to create consistent global coral reef habitat maps supporting science and conservation. ",
		icon: "water",
		html_content:
			" <p>The Allen Coral Atlas collection consists of four complementary datasets:</p>\n  <ul>\n    <li>\n      <strong>Reef Extent</strong> – Provides the overall boundary of reef environments visible from satellites.\n    </li>\n    <li>\n      <strong>Geomorphic Zones</strong> – Maps the physical structure of reefs (slopes, crests, flats, etc.).\n    </li>\n    <li>\n      <strong>Benthic Habitats</strong> – Characterizes the seafloor cover types (coral/algae, sand, rubble, etc.).\n    </li>\n    <li>\n      <strong>Mapped Regions</strong> – Defines the geographic boundaries that have been analyzed.\n    </li>\n  </ul>",
		documentation_url: "https://allencoralatlas.org/",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "a71c20b2-9537-41a8-97f4-e64286b4c1ec",
				type: "REGION",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-178.5, 28.6],
										[-156.6, 21.4],
										[-114.9, 18.6],
										[-109.6, 23.6],
										[-65, 32.6],
										[-25.7, 17.5],
										[-16, 30.3],
										[50.1, 29.9],
										[64.9, 25.1],
										[92.2, 21.4],
										[129.5, 30.1],
										[142.1, 27.9],
										[166.8, 19.6],
										[180, -9.1],
										[180, -19.3],
										[159.1, -31.8],
										[113.9, -29.2],
										[96.8, -12.4],
										[63.5, -20],
										[45.5, -26.4],
										[32.9, -28.5],
										[32.7, -25.9],
										[1.6, 5.8],
										[-7.8, 4.2],
										[-38.5, -18],
										[-80.1, 1],
										[-89.5, -1.6],
										[-124.6, -24.7],
										[-144.3, -27.9],
										[-179.2, -24.2],
										[-178.5, 28.6],
									],
								],
							},
						},
					],
					bbox: [-179.2, -31.8, 180, 32.6],
				},
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "3fd0c8da-aa1f-4d15-b8ea-d817df684d87",
				start_date: "2017-12-31",
				end_date: "2023-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "Allen Coral Atlas <support@allencoralatlas.org",
		keywords: [
			"Reef",
			"Marine Conservation",
			"Marine Ecosystem",
			"Coral Reef Monitoring",
			"Benthic Habitats",
			"Reef Extent",
			"Geomorphology",
			"Marine Habitats",
			"Coral Reefs",
		],
		version: "",
		type: "DATASET_COLLECTION",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "0302ef91-941b-4bda-aac5-633d2f64d102",
					name: "Allen Coral Atlas Partnership ",
					short_name: "ACA",
					provider_url: "https://www.allencoralatlas.org",
					description:
						"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
			{
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
			{
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
			{
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
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "5090485f-e578-4d4f-a3e7-524cf19f594a",
		title: "Allen Coral Atlas - Benthic Habitats",
		abstract:
			"This dataset provides a global-scale map of coral reef bottom types, encompassing living benthic organisms, various sediment types, and the underlying substrate.",
		icon: "water",
		html_content:
			"<p>\n  These data are part of the <strong>Allen Coral Atlas</strong> data collection, a comprehensive global coral reef monitoring initiative that leverages high-resolution satellite imagery and advanced analytics to support conservation and marine spatial planning.\n</p>\n<p>\n  The classification of Benthic Habitats includes six main categories: <strong>coral/algae habitat</strong>, <strong>sand</strong>, <strong>rubble</strong>, <strong>rock</strong>, <strong>seagrass</strong>, and <strong>microalgal mats</strong>, designed to maximize information available from <em>Planet Dove</em> remote sensing data.\n</p>",
		documentation_url: "https://allencoralatlas.org/",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/df287fcf-d1bf-4af4-8661-5b6473a3c2a6/allen-coral-atlas-benthic-habitats-files",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "c86b0532-b6d4-4bd3-8820-74f7a276a7c3",
				type: "REGION",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-178.5, 28.6],
										[-156.6, 21.4],
										[-114.9, 18.6],
										[-109.6, 23.6],
										[-65, 32.6],
										[-25.7, 17.5],
										[-16, 30.3],
										[50.1, 29.9],
										[64.9, 25.1],
										[92.2, 21.4],
										[129.5, 30.1],
										[142.1, 27.9],
										[166.8, 19.6],
										[180, -9.1],
										[180, -19.3],
										[159.1, -31.8],
										[113.9, -29.2],
										[96.8, -12.4],
										[63.5, -20],
										[45.5, -26.4],
										[32.9, -28.5],
										[32.7, -25.9],
										[1.6, 5.8],
										[-7.8, 4.2],
										[-38.5, -18],
										[-80.1, 1],
										[-89.5, -1.6],
										[-124.6, -24.7],
										[-144.3, -27.9],
										[-179.2, -24.2],
										[-178.5, 28.6],
									],
								],
							},
						},
					],
					bbox: [-179.2, -31.8, 180, 32.6],
				},
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "0951c2cb-d7cb-4d74-b3ec-5e9bddc5b64b",
				start_date: "2017-12-31",
				end_date: "2023-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "Allen Coral Atlas <support@allencoralatlas.org",
		keywords: [
			"coreal reef",
			"seaben mapping",
			"coral habitat",
			"seagrass",
			"marine",
			"ocean",
			"",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "0302ef91-941b-4bda-aac5-633d2f64d102",
					name: "Allen Coral Atlas Partnership ",
					short_name: "ACA",
					provider_url: "https://www.allencoralatlas.org",
					description:
						"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "8491eb1a-d7a1-4ced-bd86-6405f9713f63",
		title: "Allen Coral Atlas - Geomorphic Zones",
		abstract:
			"This dataset provides a detailed mapping of twelve distinct coral reef structural zones, from seaward-facing to internal features.",
		icon: "water",
		html_content:
			"<p>\n  These data are part of the <strong>Allen Coral Atlas</strong> data collection, a comprehensive global coral reef monitoring initiative that leverages high-resolution satellite imagery and advanced analytics to support conservation and marine spatial planning.\n</p>\n<p>\n  The Geometric Zones mapped in this dataset zones include <strong>reef slopes</strong>, <strong>crests</strong>, <strong>flats</strong>, <strong>lagoons</strong>, and other key structural elements that are consistent across biogeographic regions and serve as reliable predictors of <em>biological habitat richness and diversity</em>.\n</p>",
		documentation_url: "https://allencoralatlas.org/",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/8185a850-28fb-49fb-98d5-0f6bdc961771/allen-coral-atlas-geomorphic-zones",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "f873c7fa-f9ca-43ab-a15b-555dc7b37451",
				type: "REGION",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-178.5, 28.6],
										[-156.6, 21.4],
										[-114.9, 18.6],
										[-109.6, 23.6],
										[-65, 32.6],
										[-25.7, 17.5],
										[-16, 30.3],
										[50.1, 29.9],
										[64.9, 25.1],
										[92.2, 21.4],
										[129.5, 30.1],
										[142.1, 27.9],
										[166.8, 19.6],
										[180, -9.1],
										[180, -19.3],
										[159.1, -31.8],
										[113.9, -29.2],
										[96.8, -12.4],
										[63.5, -20],
										[45.5, -26.4],
										[32.9, -28.5],
										[32.7, -25.9],
										[1.6, 5.8],
										[-7.8, 4.2],
										[-38.5, -18],
										[-80.1, 1],
										[-89.5, -1.6],
										[-124.6, -24.7],
										[-144.3, -27.9],
										[-179.2, -24.2],
										[-178.5, 28.6],
									],
								],
							},
						},
					],
					bbox: [-179.2, -31.8, 180, 32.6],
				},
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "aaae3d49-19e4-43b4-98f5-e8f2ed695e80",
				start_date: "2017-12-31",
				end_date: "2023-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "Allen Coral Atlas <support@allencoralatlas.org",
		keywords: [
			"Reef Crest",
			"Reef Slopes",
			"Reef Features",
			"Lagoons",
			"Coral Reef",
			"Geomorphology",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "0302ef91-941b-4bda-aac5-633d2f64d102",
					name: "Allen Coral Atlas Partnership ",
					short_name: "ACA",
					provider_url: "https://www.allencoralatlas.org",
					description:
						"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "5389ee3b-abe6-43b1-b96f-ce81f49d18a3",
		title: "Allen Coral Atlas - Mapped Regions",
		abstract:
			"This dataset provides geographic boundaries defining the distinct coral reef regions mapped by the Allen Coral Atlas, providing a framework for accessing and analyzing reef data across different global marine territories.",
		icon: "water",
		html_content:
			'<p>\n  These data are part of the <strong>Allen Coral Atlas</strong> data collection, a comprehensive global coral reef monitoring initiative that leverages high-resolution satellite imagery and advanced analytics to support conservation and marine spatial planning.\n</p>  \n<p>\n    The <strong>Allen Coral Atlas - Mapped Regions</strong> dataset provides a globally consistent spatial framework for coral reef mapping, delineating the extent of shallow tropical coral reefs worldwide. These boundaries are essential for organizing and standardizing reef data across different regions, facilitating comparative analyses and integration with other spatial datasets.\n  </p>\n\n  <p>\n    Developed through a collaboration between <strong>Arizona State University</strong>, <strong>Planet Labs</strong>, the <strong>University of Queensland</strong>, and other partners, the boundaries are derived from high-resolution satellite imagery and advanced remote sensing techniques. The dataset supports applications in marine spatial planning, conservation prioritization, and environmental monitoring.\n  </p>\n\n  <p>\n    The boundaries are available in vector formats compatible with common GIS software and can be accessed through platforms like the <a href="https://app.hubocean.earth/catalog/dataset/allencoralatlas_boundaries" target="_blank">HubOcean Data Platform</a>. Developers can utilize these boundaries to contextualize reef-related data, align analyses across different geographic scales, and support decision-making processes in marine management.\n  </p>\n',
		documentation_url: "https://allencoralatlas.org/",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/0a1c8ed3-ba02-4bd3-92dd-9a69791724c4/allen-coral-atlas-mapped-regions",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "49b1296a-05c0-4e5e-b3d2-064ac8451267",
				type: "REGION",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-178.5, 28.6],
										[-156.6, 21.4],
										[-114.9, 18.6],
										[-109.6, 23.6],
										[-65, 32.6],
										[-25.7, 17.5],
										[-16, 30.3],
										[50.1, 29.9],
										[64.9, 25.1],
										[92.2, 21.4],
										[129.5, 30.1],
										[142.1, 27.9],
										[166.8, 19.6],
										[180, -9.1],
										[180, -19.3],
										[159.1, -31.8],
										[113.9, -29.2],
										[96.8, -12.4],
										[63.5, -20],
										[45.5, -26.4],
										[32.9, -28.5],
										[32.7, -25.9],
										[1.6, 5.8],
										[-7.8, 4.2],
										[-38.5, -18],
										[-80.1, 1],
										[-89.5, -1.6],
										[-124.6, -24.7],
										[-144.3, -27.9],
										[-179.2, -24.2],
										[-178.5, 28.6],
									],
								],
							},
						},
					],
					bbox: [-179.2, -31.8, 180, 32.6],
				},
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "7fd9f646-92ba-40a5-ad97-93a61920e462",
				start_date: "2017-12-31",
				end_date: "2023-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "Allen Coral Atlas <support@allencoralatlas.org",
		keywords: [
			"Coral reef regions",
			"reef boundaries",
			"marine territories",
			"global reef coverage",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "0302ef91-941b-4bda-aac5-633d2f64d102",
					name: "Allen Coral Atlas Partnership ",
					short_name: "ACA",
					provider_url: "https://www.allencoralatlas.org",
					description:
						"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "e17195f3-e204-45ab-9cc8-aac91a44c1b9",
		title: "Allen Coral Atlas - Reef Extent",
		abstract:
			"This dataset provides a comprehensive mapping product showing the extent of shallow coral reef environments visible from satellites. ",
		icon: "water",
		html_content:
			"<p>\n  These data are part of the <strong>Allen Coral Atlas</strong> data collection, a comprehensive global coral reef monitoring initiative that leverages high-resolution satellite imagery and advanced analytics to support conservation and marine spatial planning.\n</p>\n<p>\n  This Reef Extent dataset at <strong>5-meter resolution</strong> combines <strong>geomorphic zones</strong>, <em>machine learning-based coral reef habitat detection</em>, and additional processing to provide an inclusive representation of reef areas, including deeper structures and turbid water regions while excluding very deep and highly turbid areas.\n</p>",
		documentation_url: "https://allencoralatlas.org/",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/ab673425-b205-4e00-aeaf-4271adf6756e/allen-coral-atlas-reef-extent",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "b98d44b0-4eed-4e46-a05f-2fa9d1f9f16f",
				type: "REGION",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-178.5, 28.6],
										[-156.6, 21.4],
										[-114.9, 18.6],
										[-109.6, 23.6],
										[-65, 32.6],
										[-25.7, 17.5],
										[-16, 30.3],
										[50.1, 29.9],
										[64.9, 25.1],
										[92.2, 21.4],
										[129.5, 30.1],
										[142.1, 27.9],
										[166.8, 19.6],
										[180, -9.1],
										[180, -19.3],
										[159.1, -31.8],
										[113.9, -29.2],
										[96.8, -12.4],
										[63.5, -20],
										[45.5, -26.4],
										[32.9, -28.5],
										[32.7, -25.9],
										[1.6, 5.8],
										[-7.8, 4.2],
										[-38.5, -18],
										[-80.1, 1],
										[-89.5, -1.6],
										[-124.6, -24.7],
										[-144.3, -27.9],
										[-179.2, -24.2],
										[-178.5, 28.6],
									],
								],
							},
						},
					],
					bbox: [-179.2, -31.8, 180, 32.6],
				},
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "357e5939-3f4f-4e59-8cbf-b4ac39df3802",
				start_date: "2017-12-31",
				end_date: "2023-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "Allen Coral Atlas <support@allencoralatlas.org",
		keywords: ["Shallow Reefs", "Remote Sensing", "Reef Extent", "Coral Reefs"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "0302ef91-941b-4bda-aac5-633d2f64d102",
					name: "Allen Coral Atlas Partnership ",
					short_name: "ACA",
					provider_url: "https://www.allencoralatlas.org",
					description:
						"The Allen Coral Atlas is a global coral reef mapping and monitoring platform that supports reef conservation through high-resolution satellite imagery and data. Led by a partnership of research institutions, NGOs, and tech organizations, the Atlas provides open-access tools to track reef health, guide marine management, and protect vital ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "208f5a3b-b0db-4a8e-9727-6ea47e263c45",
		title: "Annual Tree Cover Height",
		abstract:
			"The Annual Tree Cover Height dataset maps global forest canopy height at 30-meter resolution. It was developed using GEDI lidar and Landsat time-series data. The model estimates forest height worldwide, including regions beyond GEDI coverage, through advanced regression modeling.",
		icon: "forest",
		html_content:
			"  <p>\n    This global forest canopy height dataset was developed at a 30-meter spatial resolution by integrating data from NASA’s Global Ecosystem Dynamics Investigation (GEDI) lidar instrument and Landsat time-series imagery.\n  </p>\n\n  <p>\n    GEDI, launched aboard the International Space Station in April 2019, collects high-resolution measurements of forest structure, including canopy height, across latitudes between 52°N and 52°S. The Global Land Analysis and Discovery (GLAD) team at the University of Maryland used GEDI data collected from April to October 2019 and combined it with 2019 Landsat data to produce the height estimates.\n  </p>\n\n  <p>\n    The GEDI RH95 (Relative Height at 95%) metric was used as a reference for training a regression tree ensemble model. Landsat data provided the predictor variables, capturing temporal patterns and landscape characteristics.\n  </p>\n\n  <p>\n    A “moving window” strategy was implemented to ensure locally accurate predictions, and the model was further extended to boreal forests outside of GEDI’s coverage zone to achieve global completeness.\n  </p>\n",
		documentation_url: "https://glad.umd.edu/dataset/gedi/",
		download_url: "https://glad.umd.edu/dataset/gedi/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Annual",
		spatial_extent: [
			{
				id: "aa3cb42b-83a9-4a4d-8d90-a181537bd6dc",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "9653fe5f-5259-43a7-b4f1-7dd2aa62fbb3",
				start_date: "2014-12-31",
				end_date: "2023-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Tree Cover",
			"Tree Height",
			"Canpoy",
			"Canopy Height",
			"LIDAR",
			"Forest",
			"Rainforest",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c8049ab6-3b69-4c14-8f33-72838a365c05",
					name: "The Global Land Analysis and Discovery, University of Maryland",
					short_name: "GLAD",
					provider_url: "https://glad.umd.edu/",
					description:
						"The Global Land Analysis and Discovery (GLAD) team at the University of Maryland focuses on monitoring global land cover and forest change using satellite data. Their work supports conservation, climate research, and sustainable land-use planning by providing high-resolution, timely environmental data.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "3c9c4ff7-c382-4285-887a-b1a6616bf034",
		title: "Catalogue of Life",
		abstract:
			"A comprehensive and authoritative global index of species of organisms on Earth. It aggregates taxonomic data from hundreds of expert-validated sources to support research and biodiversity assessments.",
		icon: "emoji_nature",
		html_content:
			"  <p>\n    The <strong>Catalogue of Life (CoL)</strong> is a comprehensive global index of species compiled from expert-validated taxonomic databases. It provides a reliable and regularly updated checklist of known organisms.\n  </p>\n  <ul>\n    <li><strong>Type of Data:</strong> Species names, taxonomic structure, distribution status, synonyms.</li>\n    <li><strong>Use Cases:</strong> Biodiversity informatics, species inventories, conservation policy, academic research.</li>\n    <li><strong>Benefits:</strong> Acts as a unified species reference for international biodiversity platforms and databases.</li>\n  </ul>",
		documentation_url: "https://www.catalogueoflife.org/",
		download_url:
			"https://www.gbif.org/dataset/7ddf754f-d193-4cc9-b351-99906754a03b",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "helpdesk@gbif.org",
		keywords: ["species", "biodiversity", ""],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "916c92c2-ed86-4024-a53c-adea20ab5b4c",
					name: "The Catalogue of Life Partnership",
					short_name: "COLP",
					provider_url: "https://www.catalogueoflife.org/",
					description:
						"The Catalogue of Life (CoL) is a partnership between Species 2000 and ITIS, with the Global Biodiversity Information Facility (GBIF) hosting the latest version of the CoL website since December 2020. CoL aims to provide a widely accepted classification of species, based on expert consensus",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
					name: "Global Biodiversity Information Facility",
					short_name: "GBIF",
					provider_url: "https://www.gbif.org/",
					description:
						"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
	},
	{
		id: "13b3a7fa-cec8-4eeb-b423-b87156250789",
		title: "DIST alerts (all-ecosystem vegetation disturbance alerts)",
		abstract:
			"DIST Alerts are near real-time vegetation disturbance alerts developed by the GLAD Lab at the University of Maryland. They detect land cover changes across all ecosystems using satellite imagery, helping track degradation beyond forests alone.",
		icon: "forest",
		html_content:
			"\n  <p>\n    <strong>DIST Alerts</strong> (Degradation Identification through Satellite Time Series) are high-frequency vegetation disturbance signals developed by the <strong>GLAD Lab</strong> at the University of Maryland. Unlike traditional forest monitoring systems, DIST provides <em>ecosystem-agnostic alerts</em>, enabling degradation tracking across forests, grasslands, wetlands, and savannas.\n  </p>\n\n  <p>\n    The alerts are generated using a robust time-series analysis of <strong>Sentinel-2 imagery</strong>, offering <strong>10–20 meter spatial resolution</strong> and updates as frequently as every 3–7 days, depending on cloud-free observations. This enables developers to monitor abrupt changes in vegetation condition with minimal latency.\n  </p>\n\n  <p>\n    The system flags areas exhibiting significant deviation from seasonal vegetation baselines, making it especially useful for early warning systems, fire impact assessments, drought monitoring, and detecting encroachment or illegal activity in conservation zones.\n  </p>\n\n  <p>\n    DIST Alerts are available via the <strong>Global Forest Watch APIs</strong> and as downloadable raster tiles, making them suitable for integration into custom dashboards, automated alerting systems, or spatial analytics pipelines.\n  </p>\n\n  <p>\n    The dataset is ideal for  <em>environmental monitoring platforms</em>, <em>land-use change modeling</em>, or <em>real-time conservation applications</em> where multi-ecosystem sensitivity is critical.\n  </p>\n</section>",
		documentation_url: "https://glad.umd.edu/dataset/DIST-ALERT",
		download_url: "https://glad.umd.edu/dataset/DIST-ALERT/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Near Real Time",
		spatial_extent: [
			{
				id: "e19687e2-3cd7-49d5-a8b2-0c647e3f770e",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "b9e0191d-fa25-4ad1-bafe-5213e1f3c9aa",
				start_date: "2021-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "glad@umd.eduglad.geog.umd.edu+1GLAD+1",
		keywords: [
			"NRT",
			"vegetation disturbance",
			"Land cover monitoring",
			"change detection",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "c8049ab6-3b69-4c14-8f33-72838a365c05",
					name: "The Global Land Analysis and Discovery, University of Maryland",
					short_name: "GLAD",
					provider_url: "https://glad.umd.edu/",
					description:
						"The Global Land Analysis and Discovery (GLAD) team at the University of Maryland focuses on monitoring global land cover and forest change using satellite data. Their work supports conservation, climate research, and sustainable land-use planning by providing high-resolution, timely environmental data.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "dde97ae6-eaec-4f6f-bc24-9bcef979e099",
		title: "Emerging Hotspots",
		abstract:
			"A statistical analysis identifying and categorizing tropical primary forest loss hot spots from 2002–2023 using high-resolution satellite data and geospatial clustering tools.",
		icon: "forest",
		html_content:
			"  <p>\n    Due to the increasing size and complexity of global forest monitoring data sources, analysis and interpretation tools for this data are ever more important for intervention efforts, allowing for the quick identification and interpretation of significant forest loss.\n  </p>\n\n  <p>\n    The emerging hot spots dataset identifies the most significant clusters of primary forest loss between 2002–2023 at a country-level basis across tropical regions. A <strong>hot spot</strong> is defined as an area that exhibits statistically significant clustering in the spatial patterns of loss. In this analysis, observed patterns of forest loss are attributed to underlying spatial processes rather than random distribution.\n  </p>\n\n  <h3>Hot Spot Categories</h3>\n  <ul>\n    <li><strong>New</strong>: Statistically significant hot spot only in 2023, with no prior hot spot history.</li>\n    <li><strong>Sporadic</strong>: Intermittent hot spot; fewer than 20 out of 22 years showed significance.</li>\n    <li><strong>Intensifying</strong>: Hot spot in over 90% of the years, including 2023, with increasing intensity.</li>\n    <li><strong>Persistent</strong>: Hot spot in over 90% of the years, with no significant trend in intensity.</li>\n    <li><strong>Diminishing</strong>: Hot spot in over 90% of the years, but with decreasing intensity or not a hot spot in 2023.</li>\n  </ul>\n\n  <p>\n    This analysis uses the annual Hansen et al. (2013) tree cover loss dataset (2002–2023), the Turubanova et al. (2018) primary forest extent data for 2001, and the ESRI ArcGIS Emerging Hot Spot Analysis tool.\n  </p>\n\n  <p>\n    <strong>Primary forest</strong> is defined as mature natural humid tropical forest cover that has not been completely cleared and regrown in recent history. <strong>Forest loss</strong> is defined as “stand replacement disturbance,” or the complete removal of tree cover at the Landsat pixel scale.\n  </p>\n\n  <p>\n    The analysis employs two statistical methods:\n    <ul>\n      <li><strong>Getis-Ord Gi*</strong> statistic – to detect spatial clustering of forest loss.</li>\n      <li><strong>Mann-Kendall trend test</strong> – to assess the trend of forest loss over time.</li>\n    </ul>\n  </p>\n\n  <p>\n    Accuracy: User’s accuracy is 87%, and producer’s accuracy is 83.1% across the tropical biome. As the analysis is performed on a country-by-country basis, results are relative to each country and should not be compared directly across countries. Please exercise caution when interpreting results at the global level.\n  </p>",
		documentation_url: "",
		download_url:
			"https://data.globalforestwatch.org/datasets/e2e70a606cad41e8b7121c3dee00cdb3_0/explore?location=24.648437%2C116.533775%2C4.38",
		git_url: "",
		data_hub_url: "",
		research_paper_url:
			"https://www.researchgate.net/publication/312543231_Using_spatial_statistics_to_identify_emerging_hot_spots_of_forest_loss",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Annual",
		spatial_extent: [
			{
				id: "f96e3d81-2969-488c-8ee0-a8001d65c557",
				type: "REGION",
				region: "Tropics",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-180, -23.4366],
										[180, -23.4366],
										[180, 23.4366],
										[-180, 23.4366],
										[-180, -23.4366],
									],
								],
							},
						},
					],
					bbox: [-180, -23.4366, 180, 23.4366],
				},
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "277167e5-9b47-4f94-8f4d-57441e772ba1",
				start_date: "2001-12-31",
				end_date: "2023-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: ["Forest Change", "Deforestattion", "Forest"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "d09e060e-21ba-46d6-b6b4-01b354221b79",
		title: "GBIF API",
		abstract:
			"The GBIF API provides seamless access to global species occurrence records and taxonomic data, biodiversity data crucial for ecological research and conservation planning. ",
		icon: "emoji_nature",
		html_content:
			"\n  <p>\n    The <strong>Global Biodiversity Information Facility (GBIF) API</strong> provides access to one of the world’s largest biodiversity data repositories. It enable programmatical retrieval of data on species occurrences, taxonomic information, datasets, and more, sourced from a global network of contributors.\n  </p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><strong>Occurrence Search</strong>: Retrieve millions of records of species occurrences based on filters like taxonomy, geography, date, and more.</li>\n    <li><strong>Species API</strong>: Access detailed taxonomic information including scientific names, synonyms, and classification.</li>\n    <li><strong>Dataset Access</strong>: Query metadata and contents of datasets shared through GBIF.</li>\n  </ul>\n\n  <p>\n    The API supports standard HTTP requests and returns data in JSON format, making it accessible for integration into analytical workflows, web applications, and data pipelines.\n  </p>\n\n",
		documentation_url: "https://techdocs.gbif.org/en/",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://techdocs.gbif.org/en/openapi/",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "helpdesk@gbif.org",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		providers: [
			{
				provider: {
					id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
					name: "Global Biodiversity Information Facility",
					short_name: "GBIF",
					provider_url: "https://www.gbif.org/",
					description:
						"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
				id: "6ba47c5b-52a6-4650-ad03-95b0bb87a276",
				title: "GBIF Backbone Taxonomy",
				abstract:
					"A curated taxonomic framework maintained by GBIF, providing a unified reference for classifying and matching species names. It supports data integration and quality control across global biodiversity datasets.",
				type: "DATASET",
				icon: "emoji_nature",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
			{
				id: "a128fe53-fe91-4071-9fa7-aace641bf4f9",
				title: "GBIF - Occurrences",
				abstract:
					"The GBIF Occurrence API provides access to millions of species observations and specimen records. It supports querying by taxonomy, geography, date, and data quality filters.",
				type: "DATASET",
				icon: "emoji_nature",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		children: [],
		created_by: "sander@kroglid.com",
	},
	{
		id: "6ba47c5b-52a6-4650-ad03-95b0bb87a276",
		title: "GBIF Backbone Taxonomy",
		abstract:
			"A curated taxonomic framework maintained by GBIF, providing a unified reference for classifying and matching species names. It supports data integration and quality control across global biodiversity datasets.",
		icon: "emoji_nature",
		html_content:
			"  <p>\n    The <strong>GBIF Backbone Taxonomy</strong> is a standardized and curated classification of organisms used by the Global Biodiversity Information Facility (GBIF). It serves as a taxonomic reference for harmonizing species names across datasets.\n  </p>\n  <ul>\n    <li><strong>Type of Data:</strong> Taxonomic hierarchy, scientific names, synonyms, and higher classification.</li>\n    <li><strong>Use Cases:</strong> Species name matching, biodiversity data validation, automated taxonomy alignment.</li>\n    <li><strong>Benefits:</strong> Ensures consistent classification in global biodiversity data and enables better data integration.</li>\n  </ul>",
		documentation_url:
			"https://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c",
		download_url:
			"https://www.gbif.org/dataset/d7dddbf4-2cf0-4f39-9b2a-bb099caae36c",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "helpdesk@gbif.org",
		keywords: [
			"Species classification system",
			"taxonomy",
			"biodiversity",
			"species",
			"nomenclature",
			"synonyms",
			"animal",
			"bird",
			"plant",
			"fish",
			"organisms",
			"insects",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
					name: "Global Biodiversity Information Facility",
					short_name: "GBIF",
					provider_url: "https://www.gbif.org/",
					description:
						"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "d09e060e-21ba-46d6-b6b4-01b354221b79",
				title: "GBIF API",
				abstract:
					"The GBIF API provides seamless access to global species occurrence records and taxonomic data, biodiversity data crucial for ecological research and conservation planning. ",
				type: "API",
				icon: "emoji_nature",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
	},
	{
		id: "a128fe53-fe91-4071-9fa7-aace641bf4f9",
		title: "GBIF - Occurrences",
		abstract:
			"The GBIF Occurrence API provides access to millions of species observations and specimen records. It supports querying by taxonomy, geography, date, and data quality filters.",
		icon: "emoji_nature",
		html_content:
			"\n  <p>\n    The <strong>GBIF Occurrence API</strong> provides access to over 2 billion species occurrence records shared by museums, research institutions, and citizen science platforms.\n  </p>\n  <ul>\n    <li><strong>Type of Data:</strong> Species observations, specimen records, geolocation, time stamps, data quality metrics.</li>\n    <li><strong>Use Cases:</strong> Ecological modeling, species distribution analysis, biodiversity monitoring, environmental impact studies.</li>\n    <li><strong>Benefits:</strong> Provides the largest global biodiversity dataset for open and reproducible science.</li>\n  </ul>",
		documentation_url:
			"https://www.gbif.org/data-quality-requirements-occurrences",
		download_url: "https://www.gbif.org/occurrence/search",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://techdocs.gbif.org/en/openapi/v1/occurrence",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "helpdesk@gbif.org",
		keywords: ["species occurrence", "biodiversity", "geodata", "distribution"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
					name: "Global Biodiversity Information Facility",
					short_name: "GBIF",
					provider_url: "https://www.gbif.org/",
					description:
						"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "d09e060e-21ba-46d6-b6b4-01b354221b79",
				title: "GBIF API",
				abstract:
					"The GBIF API provides seamless access to global species occurrence records and taxonomic data, biodiversity data crucial for ecological research and conservation planning. ",
				type: "API",
				icon: "emoji_nature",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
	},
	{
		id: "a48c53a9-03e5-414e-9160-e23009bb64c1",
		title: "Global Annual Burned Area",
		abstract:
			"The Global Annual Burned Area dataset provides yearly maps of fire-affected land surfaces using satellite-based observations. It supports spatial analysis of fire patterns, ecosystem impacts, and carbon emissions modeling at global scale.",
		icon: "landscape",
		html_content:
			"  <p>\n    The <strong>Global Annual Burned Area</strong> dataset provides high-resolution, annual maps of fire-affected areas at <strong>30-meter spatial resolution</strong> from 2014 to 2021. It is developed by researchers from the <strong>Aerospace Information Research Institute, Chinese Academy of Sciences</strong>, including Zhaoming Zhang, Baoye Qi, Tengfei Long, Guojin He, and Mingyue Wei.\n  </p>\n\n  <p>\n    The dataset is generated through an automated processing pipeline using <em>Google Earth Engine</em>, based on all available Landsat imagery. It is designed for large-scale fire monitoring, trend analysis, and ecological impact assessment.\n  </p>\n\n  <p>\n    Covering global land surfaces from <strong>80°N to 60°S</strong>, and mapped at a <em>0.00025° resolution</em>, the data supports fine-grained assessments of burned area dynamics across time and geography.\n  </p>\n\n  ",
		documentation_url: "",
		download_url: "https://zenodo.org/records/13858799",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "90242c25-d5b5-4b44-b2ec-c6eb6bf3c45b",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "de93846b-21a4-4c4d-ad2c-6cd22ccdec28",
				start_date: "1999-12-31",
				end_date: "2020-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "",
		keywords: ["land cover", "forest fire", "satellite", "surface", ""],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "935e7a18-7c52-4c29-9404-c352627ddd13",
			name: "CC BY-NC-ND 4.0",
			url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "ee785ec7-e529-41e5-b813-1fa73cf4c518",
					name: "Aerospace Information Research Institute, Chinese Academy of Sciences",
					short_name: "AIRI",
					provider_url: "https://english.aircas.cas.cn/",
					description:
						"The Aerospace Information Research Institute (AIR) is a leading research institution under the Chinese Academy of Sciences, established in 2018 through the merger of three CAS institutes. AIR focuses on aerospace information science, remote sensing, and digital Earth technologies, contributing to advancements in Earth observation and sustainable development.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "f57e1cc2-96ec-466e-a648-4a2fb8e819d1",
				title: "Resource Watch API",
				abstract:
					"  The Resource Watch API offers a gateway to hundreds of curated datasets on climate, energy, forests, water, and more.",
				type: "API",
				icon: "landscape",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "e6e9bd6d-39d1-4590-b4f0-b2fad4cc2b09",
		title: "Global Field ID",
		abstract:
			"Varda’s Global Field ID is a unique, persistent identifier system for agricultural fields worldwide, enabling interoperability and traceability across geospatial datasets. It facilitates collaboration, data exchange, and sustainable agriculture by linking diverse information to standardized land units.",
		icon: "agriculture",
		html_content:
			"  <p>\n    <strong>Varda's Global Field ID</strong> is a universal identifier system designed to assign unique, persistent IDs to individual agricultural fields across the globe.\n  </p>\n\n  <p>\nIt is developed to enhance data interoperability in agriculture, and the Global Field ID links disparate datasets—such as crop type, yield, and input usage—by providing a common geospatial reference framework.\n  </p>\n\n  <p>\nEach field is defined spatially and associated with a globally consistent ID, allowing stakeholders across the agri-food chain to <strong>share, compare, and aggregate field-level data</strong> regardless of system or geography.\n  </p>\n\n   <p>\n Varda’s Global Field ID is accessible via API and integrates with platforms used in agricultural monitoring, land-use planning, and environmental reporting.\n  </p>",
		documentation_url: "https://www.varda.ag/global-field-id",
		download_url: "https://fieldid.varda.ag/hub/downloads",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://developer.varda.ag/docs/getting-started",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "7e9e8c4a-fc48-48f4-9b8f-8e397bbfe20e",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: ["field", "boundary", "farming", "agriculture"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "32e926fe-c386-413d-97ef-561c5f443bcb",
					title: "Complementary",
					abstract:
						"Extra geographic layers, maps, and tools that support integration and analysis.",
					icon: "settings",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "8a193cf6-42ce-4506-abff-12da3e4b687d",
			name: "Field ID Terms of use",
			url: "https://fieldid.varda.ag/help/terms-conditions",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "7a1e5fb3-c4f6-49f3-90a7-e47bab728f23",
					name: "Varda",
					short_name: "VARDA",
					provider_url: "https://www.varda.ag/",
					description:
						"​Varda is an ag-tech data service provider aiming to enhance collaboration across the agriculture industry through improved data discovery and sharing. Their flagship platform, Global FieldID, assigns unique identifiers to agricultural fields, facilitating seamless data exchange and improving traceability throughout the food supply chain.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "0809e814-6890-4ce6-a513-174d91ba158e",
		title: "Global Forest Watch Data API",
		abstract:
			"Global Forest Watch (GFW) is an online platform that provides data and tools for monitoring forests. The GFW Data API gives access historica and near real-time information about where and how forests are changing around the world.",
		icon: "forest",
		html_content:
			"  <p>\n    The <strong>Global Forest Watch (GFW) Data API</strong> provides access to comprehensive data on global forest change, land use, and conservation. It enables  to integrate forest-related data into applications and research tools using real-time and historical geospatial data.\n  </p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><strong>Forest Change Monitoring</strong>: Access satellite-derived data on tree cover loss, gain, and alerts like GLAD and RADD.</li>\n    <li><strong>Land Use and Conservation Layers</strong>: Retrieve data on protected areas, concessions, carbon stocks, and biodiversity hotspots.</li>\n    <li><strong>Geospatial Querying</strong>: Query data by custom geometries, administrative boundaries, or user-defined areas of interest (AOIs).</li>\n  </ul>\n\n  <p>\n    The API supports RESTful endpoints and returns JSON and GeoJSON formats. It’s ideal for creating dashboards, alerts, and spatial analyses involving deforestation and conservation trends.\n  </p>\n\n",
		documentation_url: "https://www.globalforestwatch.org",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url:
			"https://www.globalforestwatch.org/help/developers/guides/create-and-use-an-api-key/",
		openapi_url:
			"https://data-api.globalforestwatch.org/#tag/Query/operation/query_dataset_json_dataset__dataset___version__query_json_get",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "24711235-5a6d-4ece-a6a0-2126e4b7ea96",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "5db148e9-6de5-4755-adb2-0589535778e1",
		title: "Global Lakes and Wetlands Database version 2",
		abstract:
			"The Global Lakes and Wetlands Database (GLWD) version 2 provides global spatial data on the extent and distribution of inland water bodies, including lakes, reservoirs, rivers, and wetlands. It offers high-resolution polygon and grid datasets for use in hydrological modeling, climate research, and biodiversity assessments.",
		icon: "water_drop",
		html_content:
			"  <p>\n<strong>GLWD v2</strong> (Global Lakes and Wetlands Database version 2) is a comprehensive global dataset mapping the extent and distribution of <em>inland water bodies</em>, including lakes, reservoirs, rivers, and wetlands.\n  </p>\n\n  <p>\nGLWD v2 offers both polygon and raster datasets at global scale, designed to support hydrological modeling, climate impact studies, and ecosystem assessments.\n  </p>\n\n  <p>\nThe database focuses exclusively on <strong>inland aquatic systems</strong>, explicitly excluding marine and coastal waters, and includes water bodies as small as <strong>0.1 km²</strong>, as well as seasonal and permanent wetlands.\n  </p>\n\n  <p>\nGLWD v2 is widely used for applications such as <em>global freshwater biodiversity analysis</em>, <em>water resource monitoring</em>, and <em>environmental planning</em>, offering a foundational layer for large-scale ecological and hydrological research.\n  </p>",
		documentation_url: "https://www.hydrosheds.org/products/glwd",
		download_url: "https://figshare.com/s/e40017f69f41f80d50df",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "dedba7f1-194a-4ebd-90ab-38ab6b751d3b",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "3f805d90-f2ad-4514-9718-ca833d9a3073",
				start_date: "1989-12-31",
				end_date: "2019-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "",
		keywords: [
			"wetlans",
			"inland water body",
			"lake",
			"river",
			"reservoir",
			"peatland",
			"mangrove",
			"delta",
			"saltmarsh",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "1f4c300b-0d80-448e-8425-cbcf95ac6046",
					title: "Hydro",
					abstract:
						"Rivers, ice, rainfall, groundwater, flooding, and inland water dynamics.",
					icon: "water_drop",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "38c3f5c9-4cc2-4be6-8d4d-2b5fcac863b3",
					name: "World Wildlife Fund US",
					short_name: "WWF US",
					provider_url: "https://www.worldwildlife.org/",
					description:
						"WWF-US is the United States branch of the World Wide Fund for Nature, one of the world’s leading conservation organizations. WWF works to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.\n",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "4bc18f21-f716-4c38-9283-197da87589f3",
		title: "Global Ocean Data Analysis Project (GLODAP) data",
		abstract:
			"The Global Ocean Data Analysis Project (GLODAP) is a comprehensive, quality-controlled dataset of ocean interior biogeochemical observations, compiled from ship-based measurements collected over decades. It includes variables such as carbon dioxide (CO₂), total alkalinity,pH nutrients, oxygen, and more, from all major ocean basins.",
		icon: "water",
		html_content:
			"<p>\nThis dataset consists of the GLODAPv2.2022 data product composed of data from 1085 scientific cruises covering the global ocean between 1972 and 2021. It includes full depth discrete bottle measurements of salinity, oxygen, nitrate, silicate, phosphate, dissolved inorganic carbon (TCO2), total alkalinity (TAlk), CO2 fugacity (fCO2), pH, chlorofluorocarbons (CFC-11, CFC-12, CFC-113, and CCl4), SF6, and various isotopes and organic compounds.\n</p>  \n\n  <p>\n    Designed to support global carbon cycle assessments, climate research, and ocean health monitoring, GLODAP data provides <em>gridded products and individual cruise-level data</em> ideal for model validation, trend analysis, and Earth system research.\n  </p>\n\n",
		documentation_url: "https://glodap.info/",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/aea06582-fc49-4995-a9a8-2f31fcc65424/global-ocean-data-analysis-project-glodap-data",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "https://doi.org/10.25921/1f4w-0t92",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "11c0fd4a-b67c-4f71-bed0-a53ec58a0e5c",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact:
			"NOAA National Centers for Environmental Information <ncei.info@noaa.gov>",
		keywords: [
			"Glodap",
			"Oceanography",
			"Ocean Carbon Data",
			"Ocean Chemistry Data",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "29233e5f-eb14-417a-a940-e2e901d47ae3",
			name: "GLODAPv2",
			url: "https://glodap.info/index.php/fair-data-use-statement/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "8b562ad7-aab3-4516-bcb5-ade15f94f1de",
					name: "The National Oceanic and Atmospheric Administration",
					short_name: "NOAA",
					provider_url: "https://www.noaa.gov/",
					description:
						"The National Oceanic and Atmospheric Administration (NOAA) is a U.S. government agency focused on understanding and protecting the Earth’s atmosphere, oceans, and coasts. Through research, monitoring, and forecasting, NOAA provides vital information on weather, climate, marine ecosystems, and environmental hazards to support public safety and sustainable resource management.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "2327cc56-98e3-4abc-975d-2a272b3120b5",
		title: "Global Offshore Infrastructure Detection (2017-2021)",
		abstract:
			"The Global Offshore Infrastructure Detection (2017–2021) dataset presents monthly detections of fixed offshore structures using deep learning applied to satellite imagery. It provides global coverage of oil platforms, wind turbines, and other installations with confidence classifications.",
		icon: "water",
		html_content:
			"<p>\n  Using Sentinel-1 SAR and Sentinel-2 optical imagery, the dataset identifies structures via six-month composites and classifies them with high, medium, or low confidence. Deep learning models achieved over 97% accuracy in object detection and classification.\n</p>\n\n<p>\n  Covering over 15% of the ocean, the analysis processed 67 million image tiles and integrated 53 billion AIS GPS positions to cross-reference vessel presence. The resolution supports detection of most structures larger than 15 meters.\n</p>\n\n<p>\n  This dataset supports the 2024 <em>Nature</em> paper “Satellite mapping reveals extensive industrial activity at sea” and offers critical insights into global offshore industrial activity.\n</p>",
		documentation_url:
			"https://figshare.com/articles/journal_contribution/Satellite_mapping_reveals_extensive_industrial_activity_at_sea_-_analysis_data/24309475",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/2b69f875-cc3d-4dad-b816-8a64d41c6932/global-offshore-infrastructure-detection-2017-2021-",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "16805bf4-11d4-4a84-84c4-e537d4910ea2",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "e5930cfe-881e-4482-9923-547a22ef5d90",
				start_date: "2016-12-31",
				end_date: "2021-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "research@globalfishingwatch.org",
		keywords: [
			"Global Fishing Watch",
			"offshore",
			"infrastructure",
			"oil platform",
			"wind turbines",
			"maritime",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "1660f060-1e31-4308-98f4-00eccb5b439e",
					title: "Infrastructure",
					abstract:
						"Roads, buildings, transport systems, and utility networks across regions.",
					icon: "emoji_transportation",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "71f6899e-0da5-4885-b847-bdf0088345a9",
			name: "CC-BY-NC-4.0",
			url: "https://creativecommons.org/licenses/by-nc/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "95f1c5f7-a307-45ae-aba4-b62be1fee126",
					name: "Global Fishing Watch",
					short_name: "GFIW",
					provider_url: "https://globalfishingwatch.org/",
					description:
						"Global Fishing Watch is an international nonprofit organization that uses satellite technology and machine learning to map and monitor global fishing activity in near real-time. By promoting transparency in ocean governance, it helps governments, researchers, and the public combat illegal fishing and support sustainable fisheries management.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "de860cd8-f2ce-4898-a8f6-c7b0c5413cc2",
		title: "Global Wind Atlas",
		abstract:
			"The Global Wind Atlas provides high-resolution, long-term averaged wind resource data—including wind speed, power density, and wind direction—at a spatial resolution of 250 meters. It supports wind energy planning by offering free, globally consistent data modeled using mesoscale and microscale techniques.",
		icon: "bolt",
		html_content:
			"<p>\n  The <strong>Global Wind Atlas</strong> offers free access to high-resolution wind resource data, including long-term averaged wind speed, wind power density, and prevailing wind directions. This data is available at a spatial resolution of 250 meters, making it suitable for detailed analysis and planning.\n</p>\n\n<p>\n  The data is derived from mesoscale atmospheric models and refined using microscale modeling techniques to account for terrain effects, ensuring accurate representation of wind patterns across diverse geographic regions.\n</p>\n\n<p>\n  Typical uses of the Global Wind Atlas include preliminary site assessments for wind farms, national and regional energy planning, and academic research. The atlas is a valuable tool for policymakers, developers, and researchers involved in renewable energy development and environmental analysis.\n</p>",
		documentation_url: "https://globalwindatlas.info/en/about/dataset",
		download_url: "https://globalwindatlas.info/en/download/gis-files",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "e2573921-df56-4795-9393-e5a171bf4471",
				type: "GLOBAL",
				spatial_resolution: "250m x 250m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: [
			"Wind",
			"energy",
			"renewable energy",
			"wind speed",
			"power",
			"electricity",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "e96bd948-0388-48c9-8cca-98bd2005657f",
					title: "Energy",
					abstract:
						"Grids, production, renewables, usage patterns, emissions, and energy potential.",
					icon: "bolt",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "c8cb7594-0d07-4f0c-9f19-4362ece930e7",
					title: "Climate",
					abstract:
						"Weather, air quality, and climate trends from historical and real-time sources.",
					icon: "air",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "edcc1e35-70a4-4c7c-854c-f39e13c7e6d7",
					name: "The Technical University of Denmark",
					short_name: "DTU",
					provider_url: "https://www.dtu.dk/english",
					description:
						"The Technical University of Denmark (DTU), founded in 1829 by physicist Hans Christian Ørsted, is a leading European institution specializing in engineering and the natural sciences. Located in Kongens Lyngby, just north of Copenhagen, DTU is renowned for its cutting-edge research, innovation, and sustainability initiatives.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "798a806e-aa8a-4bc2-b560-7d308a7f757f",
		title: "Gross GHG emissions (forest)",
		abstract:
			"The Gross GHG Emissions (forest) dataset quantifies carbon dioxide emissions from forest loss, including both aboveground and belowground biomass, across the tropics. It reflects gross emissions without accounting for forest regrowth, supporting climate impact assessments and mitigation planning.",
		icon: "forest",
		html_content:
			"<p>\n  This GHG emissions dataset is part of the forest carbon flux model presented by <strong>Harris et al. (2021)</strong>, which provides a global framework for monitoring forest greenhouse gas (GHG) emissions.\n</p>\n\n<p>\n  It estimates <strong>gross carbon emissions (2001–2023)</strong> resulting from stand-replacing disturbances using tree cover loss data from <em>Hansen et al. (2013)</em>. Emissions include <strong>CO₂, CH₄, and N₂O</strong> from all major ecosystem carbon pools and are calculated per pixel based on 2000 carbon stocks, adjusted for regrowth prior to disturbance.\n</p>\n\n<p>\n  Emissions are assigned to the year of disturbance, with no accounting for post-disturbance regrowth, which is treated separately in a companion removals layer. Emission estimates are influenced by factors such as fire presence, peatland disturbance, and disturbance drivers.\n</p>\n\n<p>\n  Annual updates to tree cover loss and drivers, as well as methodological revisions—including improved belowground biomass ratios, updated peat and fire data, and revised global warming potentials (GWPs)—were incorporated in <strong>2023–2024</strong>.\n</p>\n\n<p>\n  The dataset offers three downloadable raster formats for emissions per hectare or per pixel, with or without <strong>tree cover density (TCD)</strong> thresholds, supporting both visual mapping and quantitative area-specific calculations.\n</p>\n\n<p>\n  All data are harmonized to a spatial resolution of <strong>0.00025°</strong>.\n</p>",
		documentation_url:
			"https://data.globalforestwatch.org/datasets/gfw::forest-greenhouse-gas-emissions/about",
		download_url:
			"https://data.globalforestwatch.org/datasets/gfw::forest-greenhouse-gas-emissions/about",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Annual",
		spatial_extent: [
			{
				id: "9937cadc-cd6a-4a82-b514-737796547cd8",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "50d0c0ae-f83b-4cc1-a5eb-21bfee8115f8",
				start_date: "2000-12-31",
				end_date: "2023-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Emissions",
			"Net Flux",
			"GHG. Green House Gas",
			"Carbon",
			"Forest",
			"Carbon Sink",
			"Tree Cover Loss",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "95f1c5f7-a307-45ae-aba4-b62be1fee126",
					name: "Global Fishing Watch",
					short_name: "GFIW",
					provider_url: "https://globalfishingwatch.org/",
					description:
						"Global Fishing Watch is an international nonprofit organization that uses satellite technology and machine learning to map and monitor global fishing activity in near real-time. By promoting transparency in ocean governance, it helps governments, researchers, and the public combat illegal fishing and support sustainable fisheries management.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "91c73904-ea9d-498c-864d-876afb087a44",
		title: "HUB Ocean API",
		abstract:
			"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
		icon: "water",
		html_content:
			'  <p>\n    The HUB Ocean API offers programmatic access to a comprehensive catalog of ocean datasets, adhering to the SpatioTemporal Asset Catalog (STAC) standard. It facilitates the exploration, search, and retrieval of geospatial data through standardized RESTful endpoints.\n  </p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><strong>Catalog Access:</strong> Retrieve metadata and links to available dataset collections.</li>\n    <li><strong>Collection Listing:</strong> List all available data collections with associated metadata.</li>\n    <li><strong>Item Search:</strong> Perform searches using spatial, temporal, and other filters to find specific data items.</li>\n  </ul>\n\n  <h3>API Endpoints</h3>\n  <ul>\n    <li><code>GET /stac</code>: Access the root STAC catalog.</li>\n    <li><code>GET /stac/collections</code>: List all available collections.</li>\n    <li><code>POST /stac/search</code>: Search for items using filters like bounding box, datetime range, and collection IDs.</li>\n  </ul>\n\n  <h3>Example: Listing Collections</h3>\n  <pre><code>curl -X GET "https://api.hubocean.earth/api/stac/collections"</code></pre>\n\n  <h3>Example: Searching for Items</h3>\n  <pre><code>curl -X POST "https://api.hubocean.earth/api/stac/search" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "collections": ["example-collection"],\n    "bbox": [-180, -90, 180, 90],\n    "datetime": "2020-01-01T00:00:00Z/2020-12-31T23:59:59Z",\n    "limit": 10\n  }\'</code></pre>\n\n  <p>\n    For more detailed information and additional functionalities, please refer to the <a href="https://docs.hubocean.earth/api/stac-api/" target="_blank">HUB Ocean STAC API Documentation</a>.\n  </p>',
		documentation_url: "https://docs.hubocean.earth/",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://docs.hubocean.earth/api/",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		providers: [
			{
				provider: {
					id: "351a072e-f658-4a97-99be-e3b95bc0c2a4",
					name: "HUB Ocean",
					short_name: "HUBO",
					provider_url: "https://www.hubocean.earth/",
					description:
						"HUB Ocean is a non-profit technology organization dedicated to unlocking the power of ocean data to drive sustainable ocean stewardship. Based in Norway, it develops digital tools and platforms that combine science, industry, and policy data, enabling better decisions for the health and future of the ocean.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
		],
		children: [],
		created_by: "sander@kroglid.com",
	},
	{
		id: "23c4c70e-08b7-41bd-ab83-38a3551d4729",
		title: "Integrated Deforestation Alerts",
		abstract:
			"The Integrated Deforestation Alerst aggregates deforestation alerts from three alert systems (GLAD-L, GLAD-S2, RADD) into a single, integrated deforestation alert layer. This integration allows users to detect deforestation events faster than any single system alone, as the integrated layer is updated when any of the source alert systems are updated.",
		icon: "forest",
		html_content:
			"\n  <p>\n    By harmonizing data from different sources, the system improves detection accuracy and reduces latency, offering users more timely and reliable forest change information. Alerts are generated using <em>optical and radar satellite imagery</em> and are updated as frequently as every few days.\n  </p>\n\n  <p>\n    The dataset supports proactive forest monitoring, allowing governments, NGOs, and companies to respond swiftly to illegal deforestation, fire damage, and infrastructure-driven forest encroachment. Each alert includes spatial coordinates, timestamp, alert source, and confidence metrics.\n  </p>\n\n  <p>\n    Ideal for use in <em>deforestation early warning systems, land-use change tracking, law enforcement tools, and supply chain monitoring platforms</em>.\n  </p>\n",
		documentation_url:
			"https://data.globalforestwatch.org/datasets/gfw::integrated-deforestation-alerts/about",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Daily",
		spatial_extent: [
			{
				id: "7e1e3075-dc5f-4f1c-b2c2-d4af616ffc9a",
				type: "REGION",
				region: "Tropics",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-180, -23.4366],
										[180, -23.4366],
										[180, 23.4366],
										[-180, 23.4366],
										[-180, -23.4366],
									],
								],
							},
						},
					],
					bbox: [-180, -23.4366, 180, 23.4366],
				},
				spatial_resolution: "10m x 10m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "b37bb5dc-35a5-487e-ac7a-042c2e8c20a2",
				start_date: "2018-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Forest",
			"Deforestation",
			"Alert",
			"Deforestation Alert",
			"Near Real Time",
			"Tree",
			"RADD",
			"GLAD-L",
			"GLAD-S2",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "eca08614-e664-4d59-a2cd-f30262af0805",
		title: "iSDAsoil",
		abstract:
			"iSDAsoil is a high-resolution (30m) soil dataset for Africa, providing machine learning–based predictions of over 20 soil properties at two depths (0–20 cm and 20–50 cm), derived from satellite data and 100,000+ soil samples.",
		icon: "agriculture",
		html_content:
			'<p>\n  iSDAsoil is a soil resource created by \n  <a href="https://isda-africa.com/" target="_blank">iSDA</a>, containing soil property predictions at 30m resolution \n  for the entire African continent.\n  <br /><br />\n  Maps for over 20 different soil properties have been created at 2 different depths (0-20 and 20-50cm). Soil property \n  predictions were made using machine learning coupled with remote sensing data and a training set of over 100,000 \n  analyzed soil samples. Included in this dataset are images of predicted soil properties, model error and satellite \n  covariates used in the mapping process.\n  <br /><br />\n  To explore the iSDAsoil data, it is recommended to visit the \n  <a href="https://isda-africa.com/isdasoil" target="_blank">iSDAsoil homepage</a>.\n  <br />\n  Further information can be found in the \n  <a href="https://www.isda-africa.com/isdasoil/faq/" target="_blank">FAQ section</a>, and \n  <a href="https://www.isda-africa.com/isdasoil/technical-information/" target="_blank">technical information \n  documentation</a>.\n</p>',
		documentation_url: "https://www.isda-africa.com/isdasoil/isdasoil-on-aws/",
		download_url: "https://isdasoil.s3.amazonaws.com/index.html?t=catalogs",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "9b34fc4c-955d-43e7-aded-f7315a549c74",
				type: "REGION",
				region: "Africa",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "MultiPolygon",
								coordinates: [
									[
										[
											[-16.06314, 11.110826],
											[-16.234731, 11.080634],
											[-16.079986, 11.206244],
											[-16.06314, 11.110826],
										],
									],
									[
										[
											[-16.022125, 11.080471],
											[-16.048899, 11.179145],
											[-15.981191, 11.207099],
											[-16.022125, 11.080471],
										],
									],
									[
										[
											[-16.151519, 11.27619],
											[-16.238515, 11.215277],
											[-16.248687, 11.29442],
											[-16.151519, 11.27619],
										],
									],
									[
										[
											[-16.302113, 11.453518],
											[-16.165517, 11.51557],
											[-16.222483, 11.44009],
											[-16.302113, 11.453518],
										],
									],
									[
										[
											[-15.913442, 11.498358],
											[-16.079213, 11.456977],
											[-15.95226, 11.606757],
											[-15.913442, 11.498358],
										],
									],
									[
										[
											[-16.273549, 11.500922],
											[-16.391469, 11.501899],
											[-16.242584, 11.577826],
											[-16.273549, 11.500922],
										],
									],
									[
										[
											[-16.029408, 11.769192],
											[-16.145009, 11.805487],
											[-16.035227, 11.892971],
											[-16.029408, 11.769192],
										],
									],
									[
										[
											[-24.725453, 14.814114],
											[-24.73762, 14.892035],
											[-24.686757, 14.876166],
											[-24.725453, 14.814114],
										],
									],
									[
										[
											[-24.520619, 14.945258],
											[-24.295766, 14.930487],
											[-24.376536, 14.815985],
											[-24.520619, 14.945258],
										],
									],
									[
										[
											[-23.681752, 15.254828],
											[-23.480214, 14.946601],
											[-23.792592, 15.085761],
											[-23.681752, 15.254828],
										],
									],
									[
										[
											[-23.121571, 15.256415],
											[-23.240631, 15.150051],
											[-23.189849, 15.33275],
											[-23.121571, 15.256415],
										],
									],
									[
										[
											[-22.723866, 16.212633],
											[-22.863678, 15.982367],
											[-22.924428, 16.212958],
											[-22.723866, 16.212633],
										],
									],
									[
										[
											[-24.089996, 16.622463],
											[-24.324696, 16.482652],
											[-24.422597, 16.662299],
											[-24.089996, 16.622463],
										],
									],
									[
										[
											[-22.898793, 16.639472],
											[-22.989247, 16.770941],
											[-22.922434, 16.860297],
											[-22.898793, 16.639472],
										],
									],
									[
										[
											[-24.885894, 16.867743],
											[-25.058176, 16.809638],
											[-24.983998, 16.915961],
											[-24.885894, 16.867743],
										],
									],
									[
										[
											[-25.025868, 17.144924],
											[-25.269195, 16.923],
											[-25.360422, 17.055243],
											[-25.025868, 17.144924],
										],
									],
									[
										[
											[-16.313385, 19.704657],
											[-16.394521, 19.599921],
											[-16.320912, 19.728502],
											[-16.313385, 19.704657],
										],
									],
									[
										[
											[-16.468984, 19.719713],
											[-16.477895, 19.685533],
											[-16.496897, 19.705512],
											[-16.468984, 19.719713],
										],
									],
									[
										[
											[-16.452748, 19.637274],
											[-16.358388, 19.853176],
											[-16.392323, 19.658352],
											[-16.452748, 19.637274],
										],
									],
									[
										[
											[-16.446401, 20.607327],
											[-16.44811, 20.57453],
											[-16.474233, 20.594184],
											[-16.446401, 20.607327],
										],
									],
									[
										[
											[-17.940663, 27.71369],
											[-18.126943, 27.700263],
											[-17.884023, 27.827582],
											[-17.940663, 27.71369],
										],
									],
									[
										[
											[-17.338817, 28.171047],
											[-17.116119, 28.146226],
											[-17.184975, 28.031619],
											[-17.338817, 28.171047],
										],
									],
									[
										[
											[-16.296136, 28.417762],
											[-16.67634, 27.997096],
											[-16.843984, 28.253079],
											[-16.296136, 28.417762],
										],
									],
									[
										[
											[-17.757802, 28.798651],
											[-17.830881, 28.45539],
											[-17.996816, 28.780097],
											[-17.757802, 28.798651],
										],
									],
									[
										[
											[-16.027984, 30.033596],
											[-16.023101, 30.032294],
											[-16.027252, 30.029608],
											[-16.027984, 30.033596],
										],
									],
									[
										[
											[-16.525258, 32.567206],
											[-16.48705, 32.491685],
											[-16.542348, 32.580512],
											[-16.525258, 32.567206],
										],
									],
									[
										[
											[-16.919749, 32.841213],
											[-16.672678, 32.758612],
											[-17.2412, 32.77912],
											[-16.919749, 32.841213],
										],
									],
									[
										[
											[-16.31078, 33.066067],
											[-16.398346, 33.039781],
											[-16.317128, 33.110785],
											[-16.31078, 33.066067],
										],
									],
									[
										[
											[32.934744, -26.044122],
											[32.895356, -26.028416],
											[32.954356, -25.980564],
											[32.934744, -26.044122],
										],
									],
									[
										[
											[11.701977, -16.500393],
											[11.737519, -16.692578],
											[11.669394, -16.55721],
											[11.701977, -16.500393],
										],
									],
									[
										[
											[12.783151, -5.960572],
											[12.854595, -5.86847],
											[12.99459, -5.868244],
											[12.783151, -5.960572],
										],
									],
									[
										[
											[5.642751, -1.462823],
											[5.61199, -1.463637],
											[5.618663, -1.433038],
											[5.642751, -1.462823],
										],
									],
									[
										[
											[8.971202, -0.711521],
											[8.963145, -0.627618],
											[9.038748, -0.743748],
											[8.971202, -0.711521],
										],
									],
									[
										[
											[6.760509, 0.268297],
											[6.516368, 0.033637],
											[6.578298, 0.364569],
											[6.760509, 0.268297],
										],
									],
									[
										[
											[9.379643, 0.806971],
											[9.376786, 0.809986],
											[9.384086, 0.809629],
											[9.379643, 0.806971],
										],
									],
									[
										[
											[-17.090403, 20.961819],
											[-14.202056, 26.392239],
											[-5.523264, 35.863267],
											[-2.563222, 35.096137],
											[9.34254, 37.235338],
											[10.717133, 33.483547],
											[18.653168, 30.422309],
											[21.414806, 32.793402],
											[34.297989, 31.078776],
											[34.438639, 28.109557],
											[32.898611, 29.231024],
											[33.153087, 28.256171],
											[42.684093, 11.582261],
											[44.303722, 10.439846],
											[51.247081, 11.847561],
											[48.328868, 5.079657],
											[39.108653, -4.916599],
											[40.495942, -15.551528],
											[34.934581, -19.829278],
											[35.340505, -23.892022],
											[32.844737, -25.572686],
											[30.009939, -31.29225],
											[26.665375, -33.683689],
											[18.838227, -34.239679],
											[11.745552, -17.683948],
											[13.848481, -10.98211],
											[12.172091, -5.302095],
											[8.966645, -1.104425],
											[9.67628, 3.909003],
											[3.443614, 6.410346],
											[-8.778147, 4.854315],
											[-16.52892, 12.642768],
											[-17.090403, 20.961819],
										],
									],
									[
										[
											[7.456716, 1.638332],
											[7.343761, 1.559882],
											[7.403005, 1.699774],
											[7.456716, 1.638332],
										],
									],
									[
										[
											[8.943126, 3.614203],
											[8.548839, 3.235297],
											[8.702403, 3.760932],
											[8.943126, 3.614203],
										],
									],
									[
										[
											[7.312022, 4.440009],
											[7.181651, 4.382025],
											[7.202159, 4.484442],
											[7.312022, 4.440009],
										],
									],
									[
										[
											[7.584483, 4.484605],
											[7.358165, 4.439276],
											[7.404552, 4.498033],
											[7.584483, 4.484605],
										],
									],
									[
										[
											[-12.504384, 7.561021],
											[-12.532338, 7.392483],
											[-12.95165, 7.56802],
											[-12.504384, 7.561021],
										],
									],
									[
										[
											[-15.908274, 11.053371],
											[-15.981191, 11.052883],
											[-15.946401, 11.200263],
											[-15.908274, 11.053371],
										],
									],
									[
										[
											[-15.693186, 11.25552],
											[-15.773305, 11.173082],
											[-15.749257, 11.277086],
											[-15.693186, 11.25552],
										],
									],
									[
										[
											[-15.831166, 11.302965],
											[-15.837554, 11.214016],
											[-15.896474, 11.248725],
											[-15.831166, 11.302965],
										],
									],
									[
										[
											[-15.653432, 11.480536],
											[-15.679555, 11.440416],
											[-15.735463, 11.469428],
											[-15.653432, 11.480536],
										],
									],
									[
										[
											[-15.490834, 11.563381],
											[-15.569692, 11.549709],
											[-15.4735, 11.63227],
											[-15.490834, 11.563381],
										],
									],
									[
										[
											[-15.383453, 28.024319],
											[-15.439198, 27.80268],
											[-15.815053, 27.901272],
											[-15.383453, 28.024319],
										],
									],
									[
										[
											[-14.428619, 28.071194],
											[-13.972646, 28.735907],
											[-13.966786, 28.227973],
											[-14.428619, 28.071194],
										],
									],
									[
										[
											[-13.46227, 29.065741],
											[-13.774648, 28.839586],
											[-13.798492, 29.048082],
											[-13.46227, 29.065741],
										],
									],
									[
										[
											[-13.508168, 29.289455],
											[-13.477895, 29.266262],
											[-13.517079, 29.226264],
											[-13.508168, 29.289455],
										],
									],
									[
										[
											[-15.873443, 30.143541],
											[-15.86441, 30.152533],
											[-15.85497, 30.139594],
											[-15.873443, 30.143541],
										],
									],
									[
										[
											[32.98699, 31.083645],
											[32.989268, 31.073432],
											[32.969737, 31.086575],
											[32.98699, 31.083645],
										],
									],
									[
										[
											[33.153087, 31.231757],
											[32.955903, 31.163153],
											[33.262462, 31.223619],
											[33.153087, 31.231757],
										],
									],
									[
										[
											[11.060313, 33.800727],
											[10.76342, 33.700163],
											[10.736013, 33.884752],
											[11.060313, 33.800727],
										],
									],
									[
										[
											[10.973837, 34.66301],
											[11.101329, 34.670966],
											[11.055708, 34.620962],
											[10.973837, 34.66301],
										],
									],
									[
										[
											[11.136155, 34.693888],
											[11.25427, 34.825822],
											[11.304796, 34.742294],
											[11.136155, 34.693888],
										],
									],
									[
										[
											[40.331798, -22.348077],
											[40.358653, -22.316013],
											[40.368663, -22.362563],
											[40.331798, -22.348077],
										],
									],
									[
										[
											[35.480968, -21.529555],
											[35.455333, -21.781345],
											[35.426606, -21.748956],
											[35.480968, -21.529555],
										],
									],
									[
										[
											[39.729096, -21.441908],
											[39.73113, -21.444187],
											[39.728282, -21.444594],
											[39.729096, -21.441908],
										],
									],
									[
										[
											[49.32016, -12.155369],
											[50.355235, -15.033136],
											[49.191173, -18.842543],
											[47.012706, -25.012465],
											[44.980968, -25.471856],
											[43.249034, -22.024021],
											[44.238048, -16.970961],
											[49.32016, -12.155369],
										],
									],
									[
										[
											[42.738129, -17.057306],
											[42.751801, -17.076104],
											[42.724376, -17.063572],
											[42.738129, -17.057306],
										],
									],
									[
										[
											[49.854015, -16.936782],
											[49.955821, -16.779718],
											[49.826182, -17.094415],
											[49.854015, -16.936782],
										],
									],
									[
										[
											[39.860824, -16.286503],
											[39.943577, -16.279272],
											[39.906923, -16.378074],
											[39.860824, -16.286503],
										],
									],
									[
										[
											[48.337657, -13.347263],
											[48.22462, -13.400486],
											[48.301036, -13.195408],
											[48.337657, -13.347263],
										],
									],
									[
										[
											[45.110606, -12.685805],
											[45.186371, -12.968845],
											[45.070323, -12.955011],
											[45.110606, -12.685805],
										],
									],
									[
										[
											[45.290863, -12.774021],
											[45.282563, -12.804864],
											[45.262218, -12.76336],
											[45.290863, -12.774021],
										],
									],
									[
										[
											[43.658946, -12.318292],
											[43.635753, -12.236912],
											[43.858165, -12.371352],
											[43.658946, -12.318292],
										],
									],
									[
										[
											[44.492442, -12.368259],
											[44.2199, -12.174981],
											[44.467052, -12.064386],
											[44.492442, -12.368259],
										],
									],
									[
										[
											[43.355154, -11.854587],
											[43.355724, -11.361261],
											[43.498302, -11.882013],
											[43.355154, -11.854587],
										],
									],
									[
										[
											[39.74204, -7.994825],
											[39.801492, -8.006587],
											[39.749165, -8.065492],
											[39.74204, -7.994825],
										],
									],
									[
										[
											[39.841645, -7.877862],
											[39.649913, -7.99391],
											[39.895681, -7.637628],
											[39.841645, -7.877862],
										],
									],
									[
										[
											[39.430186, -6.054864],
											[39.54713, -6.330255],
											[39.313487, -5.718438],
											[39.430186, -6.054864],
										],
									],
									[
										[
											[39.226104, -5.769169],
											[39.237862, -5.856047],
											[39.21447, -5.858106],
											[39.226104, -5.769169],
										],
									],
									[
										[
											[39.569029, -5.406201],
											[39.652181, -5.450943],
											[39.6329, -5.477752],
											[39.569029, -5.406201],
										],
									],
									[
										[
											[39.740245, -4.913832],
											[39.855642, -5.229425],
											[39.643077, -5.413995],
											[39.740245, -4.913832],
										],
									],
									[
										[
											[41.118907, -2.124282],
											[41.01352, -2.148858],
											[41.053966, -2.049574],
											[41.118907, -2.124282],
										],
									],
									[
										[
											[40.100597, 15.814154],
											[40.373546, 15.644355],
											[39.970388, 15.617662],
											[40.100597, 15.814154],
										],
									],
									[
										[
											[39.99822, 16.049628],
											[40.118826, 16.061998],
											[40.09669, 15.981024],
											[39.99822, 16.049628],
										],
									],
									[
										[
											[37.26531, 20.855048],
											[37.271821, 20.766099],
											[37.244151, 20.77265],
											[37.26531, 20.855048],
										],
									],
									[
										[
											[33.975597, 26.790025],
											[34.003591, 26.708197],
											[33.955089, 26.790025],
											[33.975597, 26.790025],
										],
									],
									[
										[
											[34.031098, 27.451483],
											[33.933767, 27.494696],
											[33.964122, 27.534125],
											[34.031098, 27.451483],
										],
									],
									[
										[
											[34.732162, 27.918943],
											[34.681039, 27.915174],
											[34.681773, 27.958703],
											[34.732162, 27.918943],
										],
									],
									[
										[
											[34.557953, 27.97016],
											[34.620453, 27.927802],
											[34.496349, 27.955146],
											[34.557953, 27.97016],
										],
									],
									[
										[
											[33.375987, 31.189521],
											[33.475922, 31.14175],
											[33.298676, 31.212795],
											[33.375987, 31.189521],
										],
									],
								],
							},
						},
					],
					bbox: [-25.360422, -34.239679, 51.247081, 37.235338],
				},
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "c8a79af7-d3fa-4de3-b3a6-258bdb11515f",
				start_date: "2000-12-31",
				end_date: "2017-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "info@isda-africa.com",
		keywords: ["soil", "agriculture", "satellite", "soil properties", "carbon"],
		version: "",
		type: "DATASET_COLLECTION",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "7e791a5b-6da6-445b-aa3a-7a1f7d0e7b22",
					name: "iSDA",
					short_name: "ISDA",
					provider_url: "https://www.isda-africa.com/about/",
					description:
						"iSDA (Innovative Solutions for Decision Agriculture) is an organization that uses advanced data analytics, satellite imagery, and AI to deliver actionable insights and digital tools for improving agricultural productivity and decision-making, especially in sub-Saharan Africa.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "a496e8cb-8b8d-4339-b915-3d6d93ebab3d",
		title: "iSDAsoil API",
		abstract:
			"iSDAsoil is a high-resolution (30m) soil dataset for Africa, providing machine learning–based predictions of over 20 soil properties at two depths (0–20 cm and 20–50 cm), derived from satellite data and 100,000+ soil samples.",
		icon: "agriculture",
		html_content:
			'<p>\n  iSDAsoil is a soil resource created by \n  <a href="https://isda-africa.com/" target="_blank">iSDA</a>, containing soil property predictions at 30m resolution \n  for the entire African continent.\n  <br /><br />\n  Maps for over 20 different soil properties have been created at 2 different depths (0-20 and 20-50cm). Soil property \n  predictions were made using machine learning coupled with remote sensing data and a training set of over 100,000 \n  analyzed soil samples. Included in this dataset are images of predicted soil properties, model error and satellite \n  covariates used in the mapping process.\n  <br /><br />\n  To explore the iSDAsoil data, it is recommended to visit the \n  <a href="https://isda-africa.com/isdasoil" target="_blank">iSDAsoil homepage</a>.\n  <br />\n  Further information can be found in the \n  <a href="https://www.isda-africa.com/isdasoil/faq/" target="_blank">FAQ section</a>, and \n  <a href="https://www.isda-africa.com/isdasoil/technical-information/" target="_blank">technical information \n  documentation</a>.\n</p>',
		documentation_url: "https://www.isda-africa.com/isdasoil/",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://www.isda-africa.com/isdasoil/developer/",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "9f3ff889-82ad-4c9b-897f-bbc7c1f2c96e",
				type: "REGION",
				region: "Africa",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "MultiPolygon",
								coordinates: [
									[
										[
											[-16.06314, 11.110826],
											[-16.234731, 11.080634],
											[-16.079986, 11.206244],
											[-16.06314, 11.110826],
										],
									],
									[
										[
											[-16.022125, 11.080471],
											[-16.048899, 11.179145],
											[-15.981191, 11.207099],
											[-16.022125, 11.080471],
										],
									],
									[
										[
											[-16.151519, 11.27619],
											[-16.238515, 11.215277],
											[-16.248687, 11.29442],
											[-16.151519, 11.27619],
										],
									],
									[
										[
											[-16.302113, 11.453518],
											[-16.165517, 11.51557],
											[-16.222483, 11.44009],
											[-16.302113, 11.453518],
										],
									],
									[
										[
											[-15.913442, 11.498358],
											[-16.079213, 11.456977],
											[-15.95226, 11.606757],
											[-15.913442, 11.498358],
										],
									],
									[
										[
											[-16.273549, 11.500922],
											[-16.391469, 11.501899],
											[-16.242584, 11.577826],
											[-16.273549, 11.500922],
										],
									],
									[
										[
											[-16.029408, 11.769192],
											[-16.145009, 11.805487],
											[-16.035227, 11.892971],
											[-16.029408, 11.769192],
										],
									],
									[
										[
											[-24.725453, 14.814114],
											[-24.73762, 14.892035],
											[-24.686757, 14.876166],
											[-24.725453, 14.814114],
										],
									],
									[
										[
											[-24.520619, 14.945258],
											[-24.295766, 14.930487],
											[-24.376536, 14.815985],
											[-24.520619, 14.945258],
										],
									],
									[
										[
											[-23.681752, 15.254828],
											[-23.480214, 14.946601],
											[-23.792592, 15.085761],
											[-23.681752, 15.254828],
										],
									],
									[
										[
											[-23.121571, 15.256415],
											[-23.240631, 15.150051],
											[-23.189849, 15.33275],
											[-23.121571, 15.256415],
										],
									],
									[
										[
											[-22.723866, 16.212633],
											[-22.863678, 15.982367],
											[-22.924428, 16.212958],
											[-22.723866, 16.212633],
										],
									],
									[
										[
											[-24.089996, 16.622463],
											[-24.324696, 16.482652],
											[-24.422597, 16.662299],
											[-24.089996, 16.622463],
										],
									],
									[
										[
											[-22.898793, 16.639472],
											[-22.989247, 16.770941],
											[-22.922434, 16.860297],
											[-22.898793, 16.639472],
										],
									],
									[
										[
											[-24.885894, 16.867743],
											[-25.058176, 16.809638],
											[-24.983998, 16.915961],
											[-24.885894, 16.867743],
										],
									],
									[
										[
											[-25.025868, 17.144924],
											[-25.269195, 16.923],
											[-25.360422, 17.055243],
											[-25.025868, 17.144924],
										],
									],
									[
										[
											[-16.313385, 19.704657],
											[-16.394521, 19.599921],
											[-16.320912, 19.728502],
											[-16.313385, 19.704657],
										],
									],
									[
										[
											[-16.468984, 19.719713],
											[-16.477895, 19.685533],
											[-16.496897, 19.705512],
											[-16.468984, 19.719713],
										],
									],
									[
										[
											[-16.452748, 19.637274],
											[-16.358388, 19.853176],
											[-16.392323, 19.658352],
											[-16.452748, 19.637274],
										],
									],
									[
										[
											[-16.446401, 20.607327],
											[-16.44811, 20.57453],
											[-16.474233, 20.594184],
											[-16.446401, 20.607327],
										],
									],
									[
										[
											[-17.940663, 27.71369],
											[-18.126943, 27.700263],
											[-17.884023, 27.827582],
											[-17.940663, 27.71369],
										],
									],
									[
										[
											[-17.338817, 28.171047],
											[-17.116119, 28.146226],
											[-17.184975, 28.031619],
											[-17.338817, 28.171047],
										],
									],
									[
										[
											[-16.296136, 28.417762],
											[-16.67634, 27.997096],
											[-16.843984, 28.253079],
											[-16.296136, 28.417762],
										],
									],
									[
										[
											[-17.757802, 28.798651],
											[-17.830881, 28.45539],
											[-17.996816, 28.780097],
											[-17.757802, 28.798651],
										],
									],
									[
										[
											[-16.027984, 30.033596],
											[-16.023101, 30.032294],
											[-16.027252, 30.029608],
											[-16.027984, 30.033596],
										],
									],
									[
										[
											[-16.525258, 32.567206],
											[-16.48705, 32.491685],
											[-16.542348, 32.580512],
											[-16.525258, 32.567206],
										],
									],
									[
										[
											[-16.919749, 32.841213],
											[-16.672678, 32.758612],
											[-17.2412, 32.77912],
											[-16.919749, 32.841213],
										],
									],
									[
										[
											[-16.31078, 33.066067],
											[-16.398346, 33.039781],
											[-16.317128, 33.110785],
											[-16.31078, 33.066067],
										],
									],
									[
										[
											[32.934744, -26.044122],
											[32.895356, -26.028416],
											[32.954356, -25.980564],
											[32.934744, -26.044122],
										],
									],
									[
										[
											[11.701977, -16.500393],
											[11.737519, -16.692578],
											[11.669394, -16.55721],
											[11.701977, -16.500393],
										],
									],
									[
										[
											[12.783151, -5.960572],
											[12.854595, -5.86847],
											[12.99459, -5.868244],
											[12.783151, -5.960572],
										],
									],
									[
										[
											[5.642751, -1.462823],
											[5.61199, -1.463637],
											[5.618663, -1.433038],
											[5.642751, -1.462823],
										],
									],
									[
										[
											[8.971202, -0.711521],
											[8.963145, -0.627618],
											[9.038748, -0.743748],
											[8.971202, -0.711521],
										],
									],
									[
										[
											[6.760509, 0.268297],
											[6.516368, 0.033637],
											[6.578298, 0.364569],
											[6.760509, 0.268297],
										],
									],
									[
										[
											[9.379643, 0.806971],
											[9.376786, 0.809986],
											[9.384086, 0.809629],
											[9.379643, 0.806971],
										],
									],
									[
										[
											[-17.090403, 20.961819],
											[-14.202056, 26.392239],
											[-5.523264, 35.863267],
											[-2.563222, 35.096137],
											[9.34254, 37.235338],
											[10.717133, 33.483547],
											[18.653168, 30.422309],
											[21.414806, 32.793402],
											[34.297989, 31.078776],
											[34.438639, 28.109557],
											[32.898611, 29.231024],
											[33.153087, 28.256171],
											[42.684093, 11.582261],
											[44.303722, 10.439846],
											[51.247081, 11.847561],
											[48.328868, 5.079657],
											[39.108653, -4.916599],
											[40.495942, -15.551528],
											[34.934581, -19.829278],
											[35.340505, -23.892022],
											[32.844737, -25.572686],
											[30.009939, -31.29225],
											[26.665375, -33.683689],
											[18.838227, -34.239679],
											[11.745552, -17.683948],
											[13.848481, -10.98211],
											[12.172091, -5.302095],
											[8.966645, -1.104425],
											[9.67628, 3.909003],
											[3.443614, 6.410346],
											[-8.778147, 4.854315],
											[-16.52892, 12.642768],
											[-17.090403, 20.961819],
										],
									],
									[
										[
											[7.456716, 1.638332],
											[7.343761, 1.559882],
											[7.403005, 1.699774],
											[7.456716, 1.638332],
										],
									],
									[
										[
											[8.943126, 3.614203],
											[8.548839, 3.235297],
											[8.702403, 3.760932],
											[8.943126, 3.614203],
										],
									],
									[
										[
											[7.312022, 4.440009],
											[7.181651, 4.382025],
											[7.202159, 4.484442],
											[7.312022, 4.440009],
										],
									],
									[
										[
											[7.584483, 4.484605],
											[7.358165, 4.439276],
											[7.404552, 4.498033],
											[7.584483, 4.484605],
										],
									],
									[
										[
											[-12.504384, 7.561021],
											[-12.532338, 7.392483],
											[-12.95165, 7.56802],
											[-12.504384, 7.561021],
										],
									],
									[
										[
											[-15.908274, 11.053371],
											[-15.981191, 11.052883],
											[-15.946401, 11.200263],
											[-15.908274, 11.053371],
										],
									],
									[
										[
											[-15.693186, 11.25552],
											[-15.773305, 11.173082],
											[-15.749257, 11.277086],
											[-15.693186, 11.25552],
										],
									],
									[
										[
											[-15.831166, 11.302965],
											[-15.837554, 11.214016],
											[-15.896474, 11.248725],
											[-15.831166, 11.302965],
										],
									],
									[
										[
											[-15.653432, 11.480536],
											[-15.679555, 11.440416],
											[-15.735463, 11.469428],
											[-15.653432, 11.480536],
										],
									],
									[
										[
											[-15.490834, 11.563381],
											[-15.569692, 11.549709],
											[-15.4735, 11.63227],
											[-15.490834, 11.563381],
										],
									],
									[
										[
											[-15.383453, 28.024319],
											[-15.439198, 27.80268],
											[-15.815053, 27.901272],
											[-15.383453, 28.024319],
										],
									],
									[
										[
											[-14.428619, 28.071194],
											[-13.972646, 28.735907],
											[-13.966786, 28.227973],
											[-14.428619, 28.071194],
										],
									],
									[
										[
											[-13.46227, 29.065741],
											[-13.774648, 28.839586],
											[-13.798492, 29.048082],
											[-13.46227, 29.065741],
										],
									],
									[
										[
											[-13.508168, 29.289455],
											[-13.477895, 29.266262],
											[-13.517079, 29.226264],
											[-13.508168, 29.289455],
										],
									],
									[
										[
											[-15.873443, 30.143541],
											[-15.86441, 30.152533],
											[-15.85497, 30.139594],
											[-15.873443, 30.143541],
										],
									],
									[
										[
											[32.98699, 31.083645],
											[32.989268, 31.073432],
											[32.969737, 31.086575],
											[32.98699, 31.083645],
										],
									],
									[
										[
											[33.153087, 31.231757],
											[32.955903, 31.163153],
											[33.262462, 31.223619],
											[33.153087, 31.231757],
										],
									],
									[
										[
											[11.060313, 33.800727],
											[10.76342, 33.700163],
											[10.736013, 33.884752],
											[11.060313, 33.800727],
										],
									],
									[
										[
											[10.973837, 34.66301],
											[11.101329, 34.670966],
											[11.055708, 34.620962],
											[10.973837, 34.66301],
										],
									],
									[
										[
											[11.136155, 34.693888],
											[11.25427, 34.825822],
											[11.304796, 34.742294],
											[11.136155, 34.693888],
										],
									],
									[
										[
											[40.331798, -22.348077],
											[40.358653, -22.316013],
											[40.368663, -22.362563],
											[40.331798, -22.348077],
										],
									],
									[
										[
											[35.480968, -21.529555],
											[35.455333, -21.781345],
											[35.426606, -21.748956],
											[35.480968, -21.529555],
										],
									],
									[
										[
											[39.729096, -21.441908],
											[39.73113, -21.444187],
											[39.728282, -21.444594],
											[39.729096, -21.441908],
										],
									],
									[
										[
											[49.32016, -12.155369],
											[50.355235, -15.033136],
											[49.191173, -18.842543],
											[47.012706, -25.012465],
											[44.980968, -25.471856],
											[43.249034, -22.024021],
											[44.238048, -16.970961],
											[49.32016, -12.155369],
										],
									],
									[
										[
											[42.738129, -17.057306],
											[42.751801, -17.076104],
											[42.724376, -17.063572],
											[42.738129, -17.057306],
										],
									],
									[
										[
											[49.854015, -16.936782],
											[49.955821, -16.779718],
											[49.826182, -17.094415],
											[49.854015, -16.936782],
										],
									],
									[
										[
											[39.860824, -16.286503],
											[39.943577, -16.279272],
											[39.906923, -16.378074],
											[39.860824, -16.286503],
										],
									],
									[
										[
											[48.337657, -13.347263],
											[48.22462, -13.400486],
											[48.301036, -13.195408],
											[48.337657, -13.347263],
										],
									],
									[
										[
											[45.110606, -12.685805],
											[45.186371, -12.968845],
											[45.070323, -12.955011],
											[45.110606, -12.685805],
										],
									],
									[
										[
											[45.290863, -12.774021],
											[45.282563, -12.804864],
											[45.262218, -12.76336],
											[45.290863, -12.774021],
										],
									],
									[
										[
											[43.658946, -12.318292],
											[43.635753, -12.236912],
											[43.858165, -12.371352],
											[43.658946, -12.318292],
										],
									],
									[
										[
											[44.492442, -12.368259],
											[44.2199, -12.174981],
											[44.467052, -12.064386],
											[44.492442, -12.368259],
										],
									],
									[
										[
											[43.355154, -11.854587],
											[43.355724, -11.361261],
											[43.498302, -11.882013],
											[43.355154, -11.854587],
										],
									],
									[
										[
											[39.74204, -7.994825],
											[39.801492, -8.006587],
											[39.749165, -8.065492],
											[39.74204, -7.994825],
										],
									],
									[
										[
											[39.841645, -7.877862],
											[39.649913, -7.99391],
											[39.895681, -7.637628],
											[39.841645, -7.877862],
										],
									],
									[
										[
											[39.430186, -6.054864],
											[39.54713, -6.330255],
											[39.313487, -5.718438],
											[39.430186, -6.054864],
										],
									],
									[
										[
											[39.226104, -5.769169],
											[39.237862, -5.856047],
											[39.21447, -5.858106],
											[39.226104, -5.769169],
										],
									],
									[
										[
											[39.569029, -5.406201],
											[39.652181, -5.450943],
											[39.6329, -5.477752],
											[39.569029, -5.406201],
										],
									],
									[
										[
											[39.740245, -4.913832],
											[39.855642, -5.229425],
											[39.643077, -5.413995],
											[39.740245, -4.913832],
										],
									],
									[
										[
											[41.118907, -2.124282],
											[41.01352, -2.148858],
											[41.053966, -2.049574],
											[41.118907, -2.124282],
										],
									],
									[
										[
											[40.100597, 15.814154],
											[40.373546, 15.644355],
											[39.970388, 15.617662],
											[40.100597, 15.814154],
										],
									],
									[
										[
											[39.99822, 16.049628],
											[40.118826, 16.061998],
											[40.09669, 15.981024],
											[39.99822, 16.049628],
										],
									],
									[
										[
											[37.26531, 20.855048],
											[37.271821, 20.766099],
											[37.244151, 20.77265],
											[37.26531, 20.855048],
										],
									],
									[
										[
											[33.975597, 26.790025],
											[34.003591, 26.708197],
											[33.955089, 26.790025],
											[33.975597, 26.790025],
										],
									],
									[
										[
											[34.031098, 27.451483],
											[33.933767, 27.494696],
											[33.964122, 27.534125],
											[34.031098, 27.451483],
										],
									],
									[
										[
											[34.732162, 27.918943],
											[34.681039, 27.915174],
											[34.681773, 27.958703],
											[34.732162, 27.918943],
										],
									],
									[
										[
											[34.557953, 27.97016],
											[34.620453, 27.927802],
											[34.496349, 27.955146],
											[34.557953, 27.97016],
										],
									],
									[
										[
											[33.375987, 31.189521],
											[33.475922, 31.14175],
											[33.298676, 31.212795],
											[33.375987, 31.189521],
										],
									],
								],
							},
						},
					],
					bbox: [-25.360422, -34.239679, 51.247081, 37.235338],
				},
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "7e791a5b-6da6-445b-aa3a-7a1f7d0e7b22",
					name: "iSDA",
					short_name: "ISDA",
					provider_url: "https://www.isda-africa.com/about/",
					description:
						"iSDA (Innovative Solutions for Decision Agriculture) is an organization that uses advanced data analytics, satellite imagery, and AI to deliver actionable insights and digital tools for improving agricultural productivity and decision-making, especially in sub-Saharan Africa.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "fa4537f2-9f6b-415e-8766-721fde4709f2",
		title: "IUCN Red List Habitat Data",
		abstract:
			"This dataset consists if geospatial layers describing habitat types used in IUCN Red List assessments. It assists in evaluating species distributions, habitat suitability, and conservation priorities.",
		icon: "emoji_nature",
		html_content:
			"\n  <p>\n    The <strong>IUCN Red List Habitat Data</strong> includes geospatial datasets describing habitat preferences and land cover associations for Red List species assessments.\n  </p>\n  <ul>\n    <li><strong>Type of Data:</strong> Habitat classifications, species-habitat relationships, spatial overlays.</li>\n    <li><strong>Use Cases:</strong> Habitat suitability modeling, protected area planning, species conservation strategies.</li>\n    <li><strong>Benefits:</strong> Helps refine risk assessments and prioritize habitats for conservation action.</li>\n  </ul>",
		documentation_url:
			"https://www.iucnredlist.org/resources/data-repository?utm_source=chatgpt.com",
		download_url:
			"https://www.gbif.org/dataset/19491596-35ae-4a91-9a98-85cf505f1bd3",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "redlist@iucn.org",
		keywords: [
			"habitat",
			"species",
			"conservation",
			"ecosystem",
			"biodivesity",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "41c88778-472d-4ea0-b457-cfc9e5f6d17c",
					name: "The International Union for Conservation of Nature",
					short_name: "IUCN",
					provider_url: "https://iucn.org/",
					description:
						"The International Union for Conservation of Nature (IUCN) is a global organization that works to conserve nature and ensure sustainable use of natural resources.It brings together governments, NGOs, and experts to address biodiversity loss and support environmental policy worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "944b7be9-0e95-4e65-8f60-02f1d5238e68",
					name: "Global Biodiversity Information Facility",
					short_name: "GBIF",
					provider_url: "https://www.gbif.org/",
					description:
						"Global Biodiversity Information Facility (GBIF) is an international open-data network that provides free access to millions of biodiversity records from around the world. By aggregating data from museums, research institutions, and citizen science, GBIF supports scientific research, conservation planning, and informed policy-making on biodiversity and ecosystems.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
	},
	{
		id: "4a3e1e8f-a517-4c26-9ea8-47e4970c8d32",
		title: "Location Weather Forecast API",
		abstract: "Weather forecast for a specified place",
		icon: "air",
		html_content:
			'<p>\n  This service delivers a full weather forecast for one location, that is, a forecast with several parameters for a\n  nine-day period.\n</p>\n\n<h3>JSON format and variables</h3>\n<p>\n  Version 2.0 defaults to JSON format for data. For an explanation of the various variables, see the\n  <a href="/doc/locationforecast/datamodel" target="_blank">Datamodel</a> documentation. The JSON format is described in the\n  <a href="/doc/ForecastJSON" target="_blank">General Forecast Format</a> documentation.\n</p>\n\n<h3>XML format</h3>\n<p>\n  For those who want to continue using their existing clients with a minimum of changes, you can also continue using the\n  old XML format. This must be accessed via the <code>classic</code> method, like this:\n</p>\n<pre>\n  <a href="https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=59.93&amp;lon=10.72&amp;altitude=90" target="_blank"></a>\n    <code>https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=59.93&amp;lon=10.72&amp;altitude=90</code>\n  </a>\n</pre>\n<p>\n  <b>Note that the <code>msi</code> parameter is now called <code>altitude</code> in 2.0.</b>\n</p>\n<p>\n  The XML format is considered legacy and as similar to 1.9 as possible except for additional time periods and the XML\n  Schema URI. Future enhancements will primarily be added to the JSON format.\n</p>\n<p>\n  Also, some elements will be removed when version 1.9 is terminated, including the following elements:\n</p>\n<pre>\n  &lt;temperatureProbability unit="probabilitycode" value="0"/&gt;\n  &lt;windProbability unit="probabilitycode" value="0"/&gt;\n  &lt;symbolProbability unit="probabilitycode" value="1"/&gt;\n</pre>\n\n<h3>Weather icons</h3>\n<p>\n  Along with the new JSON format, we also have a new set of weather icons in PNG, SVG, and PDF formats. They can be\n  downloaded from <a href="https://github.com/metno/weathericons/" target="_blank">GitHub</a>.\n</p>\n<p>\n  The filename (minus extension) corresponds to the <code>symbol_code</code> in the JSON format, including variations\n  for day, night, and polar day. This means there is no need for calculations or fetching data from the Sunrise service\n  in order to present the correct weather icons. This has also been added to the XML as an attribute\n  <code>code</code> to the <code>symbol</code> element:\n</p>\n<pre>\n  &lt;symbol id="PartlyCloud" number="3" code="partlycloudy_day"&gt;&lt;/symbol&gt;\n</pre>\n<p>\n  <b>Note:</b> There is a typing error in <code>lightssleetshowersandthunder</code> and\n  <code>lightssnowshowersandthunder</code> (extra "s" after "light"). Unfortunately, correcting this would mean breaking\n  existing applications, so it has been postponed to the next version of weathericon/locationforecast.\n</p>\n\n<h4>Wind symbols</h4>\n<p>\n  Wind direction denotes where the wind is coming from, where 0° is north, 90° east, etc. For GUI applications, we\n  suggest using arrows, like these:\n</p>\n<dl>\n  <dt>⬇</dt>\n  <dd><p>0° (north)</p></dd>\n  <dt>⬅</dt>\n  <dd><p>90° (east)</p></dd>\n  <dt>⬆</dt>\n  <dd><p>180° (south)</p></dd>\n  <dt>➡</dt>\n  <dd><p>270° (west)</p></dd>\n</dl>\n\n<h3>UV index</h3>\n<p>\n  The new format also includes UV radiation forecasts per location, to replace the old graphical UV forecast product.\n  For those wanting UV maps, these can be downloaded directly from\n  <a href="https://atmosphere.copernicus.eu/sample-cams-products-echo" target="_blank">CAMS</a>.\n</p>',
		documentation_url:
			"https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/metadata/get_locations",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url:
			"https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_classic",
		client_library: false,
		maintenance_and_update_frequency: "4 times a day",
		release_date: "2023-12-31",
		spatial_extent: [
			{
				id: "dc4b4232-f06e-45fb-9b3d-28a30d0be359",
				type: "GLOBAL",
				spatial_resolution: "9km x 9km",
				created_by: "sander@kroglid.com",
			},
			{
				id: "f085974c-5c19-4075-a049-c649dd4b27e0",
				type: "REGION",
				region: "Nordic",
				details:
					"Covers Norway, Sweden, Denamrk, Finland and other parts of North East Europe",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[1.91846521426842, 52.3027198772139],
										[28.0831737104685, 52.3025131282054],
										[33.3726912780442, 63.5537602562036],
										[41.3944216528355, 71.9250375836019],
										[15.6510265572403, 73.8582512575102],
										[-11.7612211298435, 72.1852684802949],
										[-3.65932251554489, 63.9851646258664],
										[1.91846521426842, 52.3027198772139],
									],
								],
							},
						},
					],
					bbox: [
						-11.7612211298435, 52.3025131282054, 41.3944216528355,
						73.8582512575102,
					],
				},
				spatial_resolution: "2.5km x 2.5km (0-60 hours) 9km x 9km (2-10 days)",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: ["Weather", "Sunrise", "Temperature", "Wind"],
		version: "2.0",
		type: "API",
		categories: [
			{
				category: {
					id: "c8cb7594-0d07-4f0c-9f19-4362ece930e7",
					title: "Climate",
					abstract:
						"Weather, air quality, and climate trends from historical and real-time sources.",
					icon: "air",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "f39d5eb8-c8e4-4262-80a6-b4755e422de7",
					name: "The Norwegian Meteorological Institute",
					short_name: "MET",
					provider_url: "https://www.met.no",
					description:
						"The Norwegian Meteorological Institute forecasts weather, monitors the climate and conducts research",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
		title: "MapSPAM",
		abstract:
			"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
		icon: "agriculture",
		html_content:
			"<p>\n  <strong>MapSPAM</strong> (Spatial Production Allocation Model) is a collection of datasets that provide spatially explicit information on physical crop area, harvested crop area, yields, and production systems at a 5-minute grid resolution.  Developed using a cross-entropy approach, the Spatial Production Allocation Model (SPAM) disaggregates agricultural data from national and sub-national levels to individual grid cells. This allows for the visualization of spatial patterns in crop performance, supporting informed decisions in agricultural policy, food security planning, and sustainable development initiatives.\n</p>\n\n<p>\nThe dataset collection consists of multiple layers, each capturing a different dimension of crop production and agricultural practices:\n</p>\n\n<ul>\n  <li>\n    <strong>MapSPAM: Physical Crop Area</strong> – Represents the actual land area cultivated for each of the 42 crops, regardless of whether crops are grown once or multiple times per year.\n  </li>\n  <li>\n    <strong>MapSPAM: Harvested Crop Area</strong> – Captures the total area harvested, accounting for multi-cropping (i.e., land used multiple times within a single year).\n  </li>\n  <li>\n    <strong>MapSPAM: Yield</strong> – Shows crop productivity, calculated as production per hectare, enabling comparisons of yield efficiency between crops and regions.\n  </li>\n  <li>\n    <strong>MapSPAM: Production System</strong> – Disaggregates crop area and yield by production system types, including irrigated vs. rainfed and high-input vs. low-input farming practices.\n  </li>\n</ul>\n\n<p>\n  Together, these datasets offer a robust foundation for spatial analysis of agricultural trends, policy planning, and climate impact studies in the global food system.\n</p>",
		documentation_url: "https://mapspam.info/",
		download_url:
			"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/SWPENT",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [],
		temporal_extent: [
			{
				id: "420af215-cf0d-45a4-8ef7-ce281ac8de1b",
				start_date: "2019-12-31",
				end_date: "2019-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://mapspam.info/contact/",
		keywords: [
			"Agriculture",
			"Harvest",
			"Crop",
			"Yield",
			"Food",
			"Food Production",
			"Food Security",
			"Irrigation",
			"Farming",
			"Productivity",
			"Land Use",
		],
		version: "",
		type: "DATASET_COLLECTION",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "9b52fcba-fac9-4291-a382-a56583dc1458",
					name: "International Food Policy Research Institute",
					short_name: "IFPRI",
					provider_url: "https://www.ifpri.org/",
					description:
						"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
			{
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
			{
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
			{
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
		],
		created_by: "sander@kroglid.com",
	},
	{
		id: "5aa55cd3-dd02-4826-b7b6-3a1295793908",
		title: "MapSPAM: Harvested Crop Area (42 crops mapped separately)",
		abstract:
			"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
		icon: "agriculture",
		html_content:
			"<p>\n  This dataset maps the <strong>total area harvested</strong> for <strong>42 different crops</strong>, incorporating multiple cropping cycles where applicable.\n</p>\n\n<p>\n  As a result, harvested area may <em>exceed physical area</em> in regions where crops are grown and harvested more than once annually.\n</p>\n\n<p>\n  The spatial resolution allows for analyzing <strong>cropping intensity</strong> and <strong>agricultural output</strong> at a granular level.\n</p>",
		documentation_url: "https://mapspam.info/",
		download_url:
			"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/SWPENT",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "6746ed28-40cb-4b52-91fb-3d688bd1428e",
				type: "GLOBAL",
				spatial_resolution: "10km x 10km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "ec06912b-fb3e-467b-ad0f-0bb7503a53c8",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://mapspam.info/contact/",
		keywords: [
			"Agriculture",
			"Harvest",
			"Crop",
			"Yield",
			"Food",
			"Food Production",
			"Food Security",
			"Farming",
			"Productivity",
			"Land Use",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "9b52fcba-fac9-4291-a382-a56583dc1458",
					name: "International Food Policy Research Institute",
					short_name: "IFPRI",
					provider_url: "https://www.ifpri.org/",
					description:
						"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
				id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
				title: "MapSPAM",
				abstract:
					"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
				type: "DATASET_COLLECTION",
				icon: "agriculture",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "29fa3a59-fa44-49e6-bbfd-75a774496f11",
		title: "MapSPAM: Physical Crop Area (42 crops mapped separately)",
		abstract:
			"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
		icon: "agriculture",
		html_content:
			"<p>\n  This dataset provides spatially detailed estimates of the land area physically occupied by <strong>42 different crops</strong> around the world.\n</p>\n\n<p>\n  It represents the ground surface actually covered by a crop, <em>regardless of how many times it is harvested in a year</em>.\n</p>\n\n<p>\n  With a resolution of approximately <strong>10 x 10 kilometers</strong>, this data enables fine-scale assessments of crop presence and spatial patterns in agricultural land use.\n</p>",
		documentation_url: "https://mapspam.info/",
		download_url:
			"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/SWPENT",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "24c8ef41-c2c0-4c3f-a2ff-3a31cf7576cd",
				type: "GLOBAL",
				spatial_resolution: "10km x 10km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "41a675c3-1005-46ca-a5ed-0e928e41181b",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://mapspam.info/contact/",
		keywords: [
			"Agriculture",
			"Harvest",
			"Crop",
			"Yield",
			"Food",
			"Food Production",
			"Food Security",
			"Farming",
			"Productivity",
			"Land Use",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "9b52fcba-fac9-4291-a382-a56583dc1458",
					name: "International Food Policy Research Institute",
					short_name: "IFPRI",
					provider_url: "https://www.ifpri.org/",
					description:
						"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
				id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
				title: "MapSPAM",
				abstract:
					"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
				type: "DATASET_COLLECTION",
				icon: "agriculture",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "100a8a0a-8424-413e-bb43-a35395ca59e2",
		title:
			"MapSPAM: Production System (irrigated/rainfed and high/low input for 42 crops mapped separately)",
		abstract:
			"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
		icon: "agriculture",
		html_content:
			"<p>\n  This dataset classifies crop production for <strong>42 different crops</strong> into four systems: <em>irrigated high input</em>, <em>irrigated low input</em>, <em>rainfed high input</em>, and <em>rainfed low input</em>.\n</p>\n\n<p>\n  These categories reflect differences in <strong>water use</strong> and <strong>input intensity</strong>.\n</p>\n\n<p>\n  The spatial mapping of these systems helps to understand <strong>regional variations</strong> in farming practices, technology use, and resource allocation.\n</p>",
		documentation_url: "https://mapspam.info/",
		download_url:
			"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/SWPENT",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "31784ad4-e25f-4b2c-abbf-7aaac8508a1f",
				type: "GLOBAL",
				spatial_resolution: "10km x 10km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "6c895252-d6f4-4e42-9267-fc0fc14c2108",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://mapspam.info/contact/",
		keywords: [
			"Agriculture",
			"Harvest",
			"Crop",
			"Yield",
			"Food",
			"Food Production",
			"Food Security",
			"Irrigation",
			"Farming",
			"Productivity",
			"Land Use",
			"Production",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "9b52fcba-fac9-4291-a382-a56583dc1458",
					name: "International Food Policy Research Institute",
					short_name: "IFPRI",
					provider_url: "https://www.ifpri.org/",
					description:
						"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
				id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
				title: "MapSPAM",
				abstract:
					"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
				type: "DATASET_COLLECTION",
				icon: "agriculture",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "f034e890-f287-4d49-a10e-b53c58d5d0ee",
		title: "MapSPAM: Yield (42 crops mapped separately)",
		abstract:
			"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
		icon: "agriculture",
		html_content:
			"<p>\n  This dataset offers <strong>grid-level estimates of crop yield</strong>—defined as the amount of production per unit of harvested area—for <strong>42 distinct crop types</strong>.\n</p>\n\n<p>\n  Yield values are derived from a combination of <em>statistical and remote-sensing inputs</em>, disaggregated down to <strong>10 x 10 km</strong> cells.\n</p>\n\n<p>\n  The data supports evaluations of <strong>productivity differences</strong> across regions and production systems.\n</p>",
		documentation_url: "https://mapspam.info/",
		download_url:
			"https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/SWPENT",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "3dc39be4-8d0f-49c1-9270-642e7d7e9324",
				type: "GLOBAL",
				spatial_resolution: "10km x 10km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "0be492a1-228c-41d4-8230-24e3c583c5f2",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://mapspam.info/contact/",
		keywords: [
			"Agriculture",
			"Harvest",
			"Crop",
			"Yield",
			"Food",
			"Food Production",
			"Food Security",
			"Farming",
			"Productivity",
			"Land Use",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "9b52fcba-fac9-4291-a382-a56583dc1458",
					name: "International Food Policy Research Institute",
					short_name: "IFPRI",
					provider_url: "https://www.ifpri.org/",
					description:
						"The International Food Policy Reseach Institute (IFPRI) is a research center that focuses on global food policies, aiming to reduce hunger and poverty through evidence-based research and policy recommendations. IFPRI conducts research, publishes reports, and work with governments, NGOs, and international bodies to help shape better food systems worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
				id: "7131cc6a-98c1-4d62-8f2c-d6bd9e107ffd",
				title: "MapSPAM",
				abstract:
					"The MapSPAM (Spatial Production Allocation Model) datasets provide high-resolution spatial data on crop production systems globally. They include detailed information on physical and harvested area, yield, and production systems for 42 crops, disaggregated by input level and irrigation type.",
				type: "DATASET_COLLECTION",
				icon: "agriculture",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "a2e1dde2-8105-4faf-bed5-0070790be8a5",
		title: "Natural Forest map",
		abstract:
			"This dataset displays the extent of natural forest and non-natural tree cover in 2020, drawing from the relevant classes delineated in the Science Based Targets Network 2019s (STBN) Natural Lands Map. ",
		icon: "forest",
		html_content:
			'  <p>\nThis dataset displays the extent of natural forest and non-natural tree cover in 2020, drawing from the relevant classes delineated in the Science Based Targets Network’s (STBN) Natural Lands Map  </p>\n  \n  <p>\n    Definitions of natural ecosystems and forests published by the Accountability Framework Initiative (AFi) and Food and Agriculture Organization (FAO) were adopted to develop the map. \n    Here, forests are defined as land spanning more than 0.5 hectares that is dominated by trees greater than 5 meters in height and a canopy cover of more than 10 percent.\n  </p>\n\n  <p>\n    A natural forest is defined as one that resembles – in terms of species composition, structure, and ecological function – what would be found in a given area absent major human impacts. \n    However, AFi guidance states that thresholds established by national and sub-national forest definitions may take precedence, and regional maps of land cover were given priority over global data.\n  </p>\n\n  <p>\n    Users should refer to the \n    <a href="https://sciencebasedtargetsnetwork.org/wp-content/uploads/2024/09/Technical-Guidance-2024-Step3-Land-v1-Natural-Lands-Map.pdf" target="_blank">\n      technical documentation\n    </a> \n    for more details on the input data used to develop the map as well as its limitations.\n  </p>',
		documentation_url:
			"https://www.globalforestwatch.org/map/?map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6Im5hdHVyYWwtZm9yZXN0cyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJuYXR1cmFsLWZvcmVzdHMtMjAyMCJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItZ2Fpbi01eSIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWdhaW4tNXkiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoidHJlZS1jb3Zlci1sb3NzIiwibGF5ZXJzIjpbInRyZWUtY292ZXItbG9zcyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJsYW5kQ292ZXIifQ%3D%3D",
		download_url: "",
		git_url: "https://github.com/wri/natural-lands-map",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Sporadic",
		spatial_extent: [
			{
				id: "1b43f33a-48b8-4d9d-872a-7b24cd5dff54",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "ccf83397-7a44-4341-bf80-54a0d4ee88f9",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Natural Forest",
			"Tree Cover",
			"Land Cover",
			"Non-Natural Tree Cover",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "3ac98d0a-d0a7-4296-b6ff-c94087f40e0f",
					name: "Science Based Target Network",
					short_name: "SBTN",
					provider_url: "https://sciencebasedtargetsnetwork.org",
					description:
						"The Science Based Targets Network (SBTN) is a global collaboration of environmental organizations working to define science-based targets for nature. It helps companies and cities set measurable goals to reduce their impacts on biodiversity, freshwater, land, and oceans in line with Earth’s ecological limits.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "d82e346f-02db-42c5-b137-7b898b3c21ae",
		title: "Net Forest Change",
		abstract:
			" The data shows how much more or less tree cover a given area (country, state/province, or county/municipality) had in 2020 compared to 2000. This is not an annual data set and is displayed as a 20-year cumulative layer with a baseline year of 2000 and end year of 2020.",
		icon: "forest",
		html_content:
			"  <p>\n    This data set, a collaboration between the GLAD (Global Land Analysis & Discovery) lab at the University of Maryland, Google, USGS, and NASA, measures areas of net tree cover change across all global land (except Antarctica and other Arctic islands) at the administrative area.\n  </p>\n\n  <p>\n    The data shows how much more or less tree cover a given area (country, state/province, or county/municipality) had in 2020 compared to 2000. This is not an annual data set and is displayed as a 20-year cumulative layer with a baseline year of 2000 and end year of 2020.\n  </p>\n\n  <p>\n    Tree cover change was determined using tree cover extent for the years 2000 and 2020, which are based on tree height information. Tree height was determined by the integration of the Global Ecosystem Dynamics Investigation (GEDI) lidar forest structure measurements and Landsat analysis-ready data time-series.\n  </p>",
		documentation_url:
			"https://www.globalforestwatch.org/blog/data-and-tools/new-gfw-tree-cover-gain-net-change-data/",
		download_url:
			"https://storage.googleapis.com/earthenginepartners-hansen/GLCLU2000-2020/v2/download.html",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodic",
		spatial_extent: [
			{
				id: "03994f70-fe2a-4525-8f95-bd578d8b9ef4",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "fe65e4d2-5fdf-4c95-a2cb-828e3c3bf72b",
				start_date: "1999-12-31",
				end_date: "2019-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Forest",
			"Deforestation",
			"Trees",
			"GLAD",
			"tree cover",
			"land cover",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "5790279f-de0b-41a5-adb5-d66d0f1de43f",
		title: "Net GHG flux (forest)",
		abstract:
			"The  GHG Net Flux dataset estimates greenhouse gas emissions and removals from forest-related land use across the tropics. It combines satellite-based tree cover change data with carbon stock and land-use information to track CO₂ fluxes annually at a high spatial resolution.",
		icon: "forest",
		html_content:
			" <p>\n  The <strong>GHG Net Flux dataset</strong> is part of the forest carbon flux model by Harris et al. (2021), which supports global monitoring of greenhouse gas fluxes in forests.\n</p>\n\n<p>\n  It estimates cumulative atmospheric carbon sequestration (2001–2023) by forest growth, including both aboveground and belowground biomass, across forests present in 2000 or established by 2020.\n</p>\n\n<p>\n  Calculations follow IPCC guidelines, assuming no change in dead wood, litter, or soil carbon pools. Removals are mapped by forest type, ecozone, forest age, and duration of carbon uptake.\n</p>\n\n<p>\n  The data is presented as both <em>density</em> (Mg CO₂/ha) and <em>absolute pixel values</em>, suitable for visualization and area-specific assessments.\n</p>\n\n<p>\n  Key model updates in 2023–2024 include revised biomass ratios, expanded tree cover gain data, improved fire and peatland sources, and updated GWP constants and removal factors.\n</p>\n\n<p>\n  All inputs were harmonized to a <strong>0.00025°</strong> resolution for consistency.\n</p>",
		documentation_url:
			"https://data.globalforestwatch.org/datasets/5ded75f8a37e490f9d825b196a356ba8_0/about",
		download_url:
			"https://data.globalforestwatch.org/datasets/5ded75f8a37e490f9d825b196a356ba8_0/about",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Annual",
		spatial_extent: [
			{
				id: "24bbcd6f-d9f7-4742-8519-304c4764a277",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "2d6f9f43-2959-47f8-be2f-137b36b4ac9d",
				start_date: "2000-12-31",
				end_date: "2023-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Emissions",
			"Net Flux",
			"GHG. Green House Gas",
			"Carbon",
			"Forest",
			"Carbon Sink",
			"Tree Cover Loss",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "3483bb35-d375-4d9c-8a06-4da9a2d182ae",
		title: "OpenStreetMap Physical Boundaries - Coastlines",
		abstract:
			"The OpenStreetMap Physical Boundaries – Coastlines dataset provides accurate, up-to-date representations of global shorelines. It is derived from OSM’s natural=coastline features.",
		icon: "water",
		html_content:
			"<p>\n  The OpenStreetMap Physical Boundaries – Coastlines dataset contains high-resolution representations of global coastlines as contributed and maintained by the OpenStreetMap community. These features are tagged using <code>natural=coastline</code> and define the interface between land and ocean within the OSM data model.\n</p>\n\n<p>\n  The coastline data is extracted from the full OSM planet file and processed into continuous, topologically correct line geometries suitable for use in basemaps, spatial analysis, and hydrological modeling. It is particularly useful for applications requiring precise rendering of shorelines or for clipping other geospatial layers to land boundaries.\n</p>",
		documentation_url: "https://osmdata.openstreetmap.de/data/coastlines.html",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/9f6b53f1-f054-4154-8132-9fbd0ccbd7c0/openstreetmap-coastlines",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [],
		temporal_extent: [],
		contact: "https://github.com/fossgis/osmdata/issues",
		keywords: ["coastline", "polygon", "map", "OSM", "geography", "boundaries"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "32e926fe-c386-413d-97ef-561c5f443bcb",
					title: "Complementary",
					abstract:
						"Extra geographic layers, maps, and tools that support integration and analysis.",
					icon: "settings",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b4c628c0-df83-4cdd-bdb6-ce88ad302297",
			name: "ODbL-1.0",
			url: "https://opendatacommons.org/licenses/odbl/1-0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "351a072e-f658-4a97-99be-e3b95bc0c2a4",
					name: "HUB Ocean",
					short_name: "HUBO",
					provider_url: "https://www.hubocean.earth/",
					description:
						"HUB Ocean is a non-profit technology organization dedicated to unlocking the power of ocean data to drive sustainable ocean stewardship. Based in Norway, it develops digital tools and platforms that combine science, industry, and policy data, enabling better decisions for the health and future of the ocean.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "f662a5f1-3e25-40bc-a818-76fc5ac38831",
					name: "OpenStreetMap",
					short_name: "OSM",
					provider_url: "https://www.openstreetmap.org/",
					description:
						"OpenStreetMap (OSM) is an open-source, user-driven mapping platform that provides freely accessible geospatial data. Contributors use GPS, satellite imagery, and local knowledge to create and edit vector-based maps. Widely used in GIS applications, OSM supports routing, spatial analysis, and custom map rendering. It is maintained by the OpenStreetMap Foundation, which advocates for open geographic data and collaborative mapping.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
	},
	{
		id: "99afc756-5ecc-42ea-974f-d6452c12a8d8",
		title: "Places to Watch - highlights areas of concern",
		abstract:
			"The Places to Watch (PTW) initiative is an automated workflow to identify high-priority areas of deforestation alerts each quarter, based on the intersection of the integrated deforestation alerts with other datasets.",
		icon: "forest",
		html_content:
			"<p>\nPlaces to Watch is a system that leverages satellite data to pinpoint areas with potentially troubling recent deforestation. It identifies these areas by analyzing the concentration of deforestation alerts alongside the existence of intact or protected forests. The selected areas are then reviewed, analyzed, and shared with the public for awareness and action.\nThere are three separate alert filtering approaches which result in the three PTW types in the legend: Mongabay reporting, Oil Palm, and Soy.\n</p>\n",
		documentation_url:
			"https://www.wri.org/research/places-watch-identifying-high-priority-forest-disturbance-near-real-time-satellite-data",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Quarterly",
		spatial_extent: [
			{
				id: "850d320d-decf-4b05-9816-85f5e0122479",
				type: "REGION",
				region: "Tropics",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-180, -23.4366],
										[180, -23.4366],
										[180, 23.4366],
										[-180, 23.4366],
										[-180, -23.4366],
									],
								],
							},
						},
					],
					bbox: [-180, -23.4366, 180, 23.4366],
				},
				spatial_resolution: "10km x 10km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "11c3e8ca-8b07-4d62-aa70-b8940ead5a1d",
				start_date: "2016-12-31",
				end_date: "2025-02-19",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Deforestattion",
			"Forest",
			"Deforestation Hotspot",
			"Hotspot",
			"Tree",
			"Soy",
			"Oil Palm",
			"Palm Oil",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "f57e1cc2-96ec-466e-a648-4a2fb8e819d1",
		title: "Resource Watch API",
		abstract:
			"  The Resource Watch API offers a gateway to hundreds of curated datasets on climate, energy, forests, water, and more.",
		icon: "landscape",
		html_content:
			"  <p>\n    The <strong>Resource Watch API</strong> is a comprehensive service that provides access to an extensive library of curated datasets on global environmental and social indicators. Developed by the World Resources Institute (WRI), the API enables integration of real-time and historical data into tools and analyses.\n  </p>\n\n  <h3>Key Features</h3>\n  <ul>\n    <li><strong>Diverse Dataset Access</strong>: Explore datasets covering topics such as air quality, water risk, greenhouse gas emissions, land use, and natural disasters.</li>\n    <li><strong>Custom Querying</strong>: Filter data by parameters like time range, geographic region, and categories.</li>\n    <li><strong>Visualization Support</strong>: Retrieve data layers and metadata suitable for dashboards, charts, and geospatial viewers.</li>\n  </ul>\n\n  <p>\n    The API is RESTful and includes endpoints for datasets, layers, widgets, and geospatial services. It’s ideal for building interactive applications, research dashboards, and data-driven reports.\n  </p>\n",
		documentation_url: "https://api.resourcewatch.org/",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url:
			"https://resource-watch.github.io/doc-api/quickstart.html#resource-watch-api-quickstart",
		openapi_url:
			"https://resource-watch.github.io/doc-api/#what-is-the-resource-watch-api",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [],
		temporal_extent: [],
		contact: "https://resourcewatch.org/about/contact-us",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "c8cb7594-0d07-4f0c-9f19-4362ece930e7",
					title: "Climate",
					abstract:
						"Weather, air quality, and climate trends from historical and real-time sources.",
					icon: "air",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
		],
		children: [],
		created_by: "sander@kroglid.com",
	},
	{
		id: "c7a6a723-62eb-4fcf-8193-5a6edf1825a7",
		title: "Soilgrids Data Aggregated 1000m",
		abstract:
			"SoilGrids is a system for digital soil mapping based on a global compilation of soil profile data (WoSIS) and environmental layers.",
		icon: "agriculture",
		html_content:
			"<p>SoilGrids is a system for digital soil mapping based on a global compilation of soil profile data (WoSIS) and environmental layers. Read about the SoilGrids and WoSIS projects on <span><span><a target='_blank' href='http://isric.org'><span><span><span></span></span><span>ISRIC \\u2014 World Soil Information</span></span></a></span></span> . </p><p>SoilGrids is designed as a globally consistent, data-driven system that predicts soil properties and classes using global covariates and globally fitted models. If you are looking for soil information on national and/or local levels we advise you, before using SoilGrids, to compare SoilGrids predictions with soil maps derived from national and local soil geographical databases. National soil maps are usually based on more detailed input soil information and therefore are often more accurate than SoilGrids (within the local coverage area). For an overview of national and regional soil databases, please refer to the <a target='_blank' href='https://www.isric.org/explore/soil-geographic-databases'>Soil Geographic Databases compendium</a>.</p><p>The selection of soil profiles underpinning SoilGrids is larger than the publicly available set ('WoSIS_latest'), for details see the <a target='_blank' href='https://doi.org/10.5194/essd-12-299-2020'>ESSD paper</a>. The actual number of observations for each property varies (greatly) between profiles and with depth, generally depending on the objectives of the initial soil sampling programmes. National soil survey organisations will generally maintain a wider selection of soil profiles/properties for their country in their databases.</p>",
		documentation_url: "https://www.isric.org/explore/soilgrids",
		download_url: "https://files.isric.org/soilgrids/latest/data/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		release_date: "2021-05-10",
		spatial_extent: [
			{
				id: "79571a86-f9ec-47d0-9171-d9b3f1f9ec9e",
				type: "GLOBAL",
				spatial_resolution: "1km x 1km",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "c1b2d064-9aa5-4441-bd5c-6427869444ae",
				start_date: "1904-12-31",
				end_date: "2016-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "",
		keywords: [""],
		version: "2.0",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "8fe5cb51-94d7-4dc9-9e0e-7d9aed9bcec6",
					name: "International Soil Reference and Information Centre",
					short_name: "ISRIC",
					provider_url: "https://www.isric.org/",
					description:
						"International Soil Reference and Information Centre (ISRI), based in the Netherlands, is a global center for soil data, mapping, and information. It develops and maintains major platforms like SoilGrids and WOSIS, providing open access to high-quality soil data to support global research, sustainable land use, and policy.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "b83bed16-967a-4c29-bb30-f9094355d777",
		title: "SoilHive API",
		abstract:
			"SoilHive API provides access to a wealth of soil and spatial data, facilitating research, analysis, and data-driven decision making. Our API leverages modern web standards like JSON-LD and schema.org to ensure data is well-structured, discoverable, and interoperable.",
		icon: "agriculture",
		html_content:
			'<h3> Available resources </h3> <ul>   <li><strong>Spatial Filters</strong>: retrieve spatial filters to refine your data queries.</li>  <li><strong>Soil Properties</strong>: access detailed information about various soil properties.</li>   <li><strong>Datasets</strong>: retrieve available datasets, including metadata and download links.</li>   <li><strong>Soil data</strong>: synchronous and asynchronous access to soil data given a geographical area of interest.</li> </ul>  <h3>   How to start </h3> <ol>   <li>Access <a href="https://account.soilhive.ag/" target="_blank">account.soilhive.ag</a></li>   <li>Click on "Create application" to register a SoilHive client application</li>   <li>Generate a token and use it in our <a href="https://developer.soilhive.ag/reference" target="_blank">API reference</a></li> </ol>',
		documentation_url: "https://developer.soilhive.ag",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "https://developer.soilhive.ag/docs/authentication",
		openapi_url: "https://developer.soilhive.ag/reference/post_oauth-token",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "8a9d1edb-6f0d-4300-ba13-033880f3c856",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: [""],
		version: "",
		type: "API",
		categories: [
			{
				category: {
					id: "7d00306a-ad58-4284-91fe-ce55db8c8d2b",
					title: "Agriculture",
					abstract:
						"Crop types, soil, livestock, productivity, inputs, and food system modeling.",
					icon: "agriculture",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		providers: [
			{
				provider: {
					id: "7a1e5fb3-c4f6-49f3-90a7-e47bab728f23",
					name: "Varda",
					short_name: "VARDA",
					provider_url: "https://www.varda.ag/",
					description:
						"​Varda is an ag-tech data service provider aiming to enhance collaboration across the agriculture industry through improved data discovery and sharing. Their flagship platform, Global FieldID, assigns unique identifiers to agricultural fields, facilitating seamless data exchange and improving traceability throughout the food supply chain.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [
			{
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
			{
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
		],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "cdd71a00-6a36-44d7-88c6-f87601f974d3",
		title: "Spatial Database of Planted Trees (SDPT) v2.0",
		abstract:
			"The Spatial Database of Planted Trees (SDPT) v2.0 maps planted forests and agricultural tree crops across 158 countries. It enables users to distinguish between planted and natural forests using satellite-derived datasets and harmonized classifications.",
		icon: "forest",
		html_content:
			"  <p>\n    The Spatial Database of Planted Trees (SDPT) was compiled by Global Forest Watch using data obtained from national governments, non-governmental organizations, and independent researchers. In version 2.0 (v2.0), data were compiled for 158 countries globally, with most maps derived from supervised classification or manual delineation of Landsat, SPOT, or RapidEye satellite imagery.\n  </p>\n\n  <p>\n    The SDPT defines <strong>planted trees</strong> to include planted forests and stands of trees grown for wood and fiber production or for ecosystem protection (e.g., against wind or soil erosion). It also includes <strong>perennial tree crops</strong> such as rubber, oil palm, coffee, coconut, cocoa, and orchards.\n  </p>\n\n  <p>\n    This database allows the identification and monitoring of planted forests and tree crops independently from natural forest cover changes. The SDPT v2.0 contains:\n  </p>\n\n  <ul>\n    <li><strong>264 million hectares</strong> of planted forest</li>\n    <li><strong>65 million hectares</strong> of agricultural trees</li>\n    <li>Representing approximately <strong>90% of the world’s total planted forest area as of 2019</strong> (FAO 2020)</li>\n  </ul>\n\n  <p>\n    Compilation involved cleaning and processing each dataset and creating a harmonized attribute table. The data is available for download for all countries <strong>except Papua New Guinea</strong>.\n  </p>\n",
		documentation_url:
			"https://www.wri.org/research/spatial-database-planted-trees-sdpt-version-2",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Periodic",
		spatial_extent: [
			{
				id: "1941cbc5-f81c-41aa-aace-0ddd1d655d24",
				type: "GLOBAL",
				spatial_resolution: "Polygon",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "ddb18f8e-b217-47aa-8bad-575f1736bd6e",
				start_date: "2019-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Tree",
			"Plantation",
			"Plnated Trees",
			"Soy",
			"Palm Oil",
			"Forestry",
			"Tree Cover",
			"Planted Forest",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "87887d80-3ea4-4d29-b4f0-fd18790215cc",
		title: "The World Database on Protected Areas (WDPA)",
		abstract:
			"The World Database on Protected Areas (WDPA) is the most comprehensive global spatial data set on marine and terrestrial protected areas available. ",
		icon: "emoji_nature",
		html_content:
			"<p>\nThe <strong>World Database on Protected Areas (WDPA)</strong> is the most comprehensive global dataset on terrestrial and marine protected areas. It is maintained by UNEP-WCMC in partnership with IUCN and provides standardized spatial and attribute data for conservation planning and environmental analysis.\n</p>\n\n<p>\nThe WDPA contains detailed polygon and point geometries representing national parks, nature reserves, and other protected areas. Each record includes attributes such as name, designation, governance type, area (in hectares), status (e.g., designated, proposed), and IUCN management category.\n</p>\n\n<p>\n Updated monthly, the dataset is widely used in biodiversity monitoring, policy development, impact assessments, and sustainable land-use planning. It serves as a key reference for measuring progress toward international conservation targets.\n</p>",
		documentation_url:
			"https://www.protectedplanet.net/en/thematic-areas/wdpa?tab=WDPA",
		download_url:
			"https://www.protectedplanet.net/en/thematic-areas/wdpa?tab=WDPA",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Monthly",
		spatial_extent: [
			{
				id: "6cf19f9b-c334-4202-8ae5-186cccd1dc04",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "",
		keywords: [
			"nature reserve",
			"national park",
			"protected area",
			"wilderness area",
			"habitat and species management area",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "990e8ba4-4e5f-48da-9b67-ffa4e808e2b6",
					title: "Biodiversity",
					abstract:
						"Species records, habitat patterns, extinction risk, and diversity modeling.",
					icon: "emoji_nature",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "71f6899e-0da5-4885-b847-bdf0088345a9",
			name: "CC-BY-NC-4.0",
			url: "https://creativecommons.org/licenses/by-nc/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "41c88778-472d-4ea0-b457-cfc9e5f6d17c",
					name: "The International Union for Conservation of Nature",
					short_name: "IUCN",
					provider_url: "https://iucn.org/",
					description:
						"The International Union for Conservation of Nature (IUCN) is a global organization that works to conserve nature and ensure sustainable use of natural resources.It brings together governments, NGOs, and experts to address biodiversity loss and support environmental policy worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "32b0bb05-533c-4ada-93bb-8e773de9413b",
					name: "United Nations Environment Programme World Conservation Monitoring Centre",
					short_name: "UNEP-WCMC",
					provider_url: "https://www.unep-wcmc.org/",
					description:
						"The United Nations Environment Programme World Conservation Monitoring Centre (UNEP-WCMC) is a global center of excellence on biodiversity. It provides data, analysis, and tools to support environmental decision-making and conservation policy.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "ad413484-f196-4a1f-ae9b-0e2539c6d7a6",
		title: "Tree Cover Loss",
		abstract:
			"The Tree Cover Loss dataset measures areas of tree cover loss across all global land (except  - Antarctica and other Arctic islands) at approximately 30 × 30 meter resolution. ",
		icon: "forest",
		html_content:
			"<p>\n  The dataset highlights global patterns of <strong>tree cover loss</strong>, providing annual data starting from 2001. This layer reveals where forests have been cleared or significantly degraded, whether due to logging, agriculture, fires, or other human and natural causes.\n</p>\n\n<p>\n  The data can be visualized at both global and regional scales, making it possible to assess how different areas contribute to overall forest decline. This is particularly useful for evaluating the impact of land use practices, development pressures, and policy effectiveness across borders.\n</p>",
		documentation_url:
			"https://www.globalforestwatch.org/map/?map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXX0seyJkYXRhc2V0IjoicG9saXRpY2FsLWJvdW5kYXJpZXMiLCJsYXllcnMiOlsiZGlzcHV0ZWQtcG9saXRpY2FsLWJvdW5kYXJpZXMiLCJwb2xpdGljYWwtYm91bmRhcmllcyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfSx7ImRhdGFzZXQiOiJ0cmVlLWNvdmVyLWdhaW4iLCJsYXllcnMiOlsidHJlZS1jb3Zlci1nYWluLTIwMDEtMjAxMiJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapMenu=eyJkYXRhc2V0Q2F0ZWdvcnkiOiJmb3Jlc3RDaGFuZ2UifQ%3D%3D&modalMeta=umd_tree_cover_loss",
		download_url:
			"https://storage.googleapis.com/earthenginepartners-hansen/GFC-2024-v1.12/download.html",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Anually",
		spatial_extent: [
			{
				id: "aab2b42c-307a-486b-8815-8201154ff7fb",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "dfbb36e0-85ce-4382-8eb4-6c9b70e7f55f",
				start_date: "1999-12-31",
				end_date: "2024-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "",
		keywords: ["forest", "tree cover", "deforestation"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "91b1813d-a557-4f10-9130-5268341bba09",
					title: "Land cover",
					abstract:
						"Land classification and surface types based on satellite and mapped sources.",
					icon: "landscape",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "c8049ab6-3b69-4c14-8f33-72838a365c05",
					name: "The Global Land Analysis and Discovery, University of Maryland",
					short_name: "GLAD",
					provider_url: "https://glad.umd.edu/",
					description:
						"The Global Land Analysis and Discovery (GLAD) team at the University of Maryland focuses on monitoring global land cover and forest change using satellite data. Their work supports conservation, climate research, and sustainable land-use planning by providing high-resolution, timely environmental data.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "a455acae-cd19-42b9-a53a-f3fbfb7384d2",
					name: "Google",
					short_name: "GOOGLE",
					provider_url: "https://earthengine.google.com/",
					description:
						"Google is a global technology company that develops tools and infrastructure for searching, accessing, and analyzing information. Its platforms, such as Google Earth Engine, support large-scale data processing and are widely used in fields like environmental monitoring, geospatial analysis, and research.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "86a2ca03-2ceb-47b7-9168-6fcad5e7c4f7",
					name: "The National Aeronautics and Space Administration",
					short_name: "NASA",
					provider_url: "https://www.nasa.gov/",
					description:
						"The National Aeronautics and Space Administration (NASA) is the U.S. government agency responsible for space exploration, scientific discovery, and aeronautics research. Founded in 1958, NASA leads missions to explore space, study Earth and other planets, and develop cutting-edge technology to advance knowledge and innovation.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "d28ea030-560a-42df-8149-5b4f2b174685",
		title: "Tree Cover Loss due to Fires",
		abstract:
			"This dataset is produced by the Global Land Analysis & Discovery (GLAD) lab at the University of Maryland (UMD) and measures areas of tree cover loss due to fire, compared to all other drivers across all global land (except Antarctica and other Arctic islands), at approximately 30 × 30-meter resolution. ",
		icon: "forest",
		html_content:
			"<p>\nThe dataset was generated using global Landsat-based annual change detection metrics for 2001-2023 as input data to a set of regionally calibrated classification tree ensemble models.</p> \n<p>\nThe result of the mapping process can be viewed as a set of binary maps (tree cover loss due to fire vs. tree cover loss due to all other drivers). \n</p>",
		documentation_url:
			"https://www.globalforestwatch.org/map/?map=eyJkYXRhc2V0cyI6W3siZGF0YXNldCI6InRyZWUtY292ZXItbG9zcy1maXJlcyIsIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWUsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MtZmlyZXMiXX0seyJkYXRhc2V0IjoicG9saXRpY2FsLWJvdW5kYXJpZXMiLCJsYXllcnMiOlsiZGlzcHV0ZWQtcG9saXRpY2FsLWJvdW5kYXJpZXMiLCJwb2xpdGljYWwtYm91bmRhcmllcyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlfV19&mapMenu=eyJtZW51U2VjdGlvbiI6ImRhdGFzZXRzIiwiZGF0YXNldENhdGVnb3J5IjoiZm9yZXN0Q2hhbmdlIn0%3D",
		download_url: "https://glad.umd.edu/dataset/Fire_GFL/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Annual",
		spatial_extent: [
			{
				id: "12e283a1-bc3a-4fc1-8cee-f3fe6f23d81b",
				type: "GLOBAL",
				spatial_resolution: "30m x 30m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "8bc923fb-8c58-4988-98a6-cfe3112b0830",
				start_date: "1999-12-31",
				end_date: "2023-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: ["Forest", "Forest Fire", "Tree Cover Loss", "Deforestation"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "5dd4695e-3046-4b23-b7c4-108cd96213e4",
		title: "Tropical Tree Cover",
		abstract:
			"The tropical tree cover data maps tree extent at a 10-meter scale and tree cover at a half-hectare scale to support accurate monitoring of trees in urban areas, agricultural lands, and open canopy or dry forest ecosystems. ",
		icon: "forest",
		html_content:
			"<p>\n The dataset covers 4.3 billion hectares across the global tropics.It is generated using multi-temporal convolutional neural network models applied to Sentinel optical and radar imagery.\n</p> \n<p> \nThe 10-meter dataset is a binary layer showing tree extent, similar to a land cover map, while the tree cover data shows fractional tree cover at a half-hectare resolution.\n </p>",
		documentation_url:
			"https://github.com/wri/sentinel-tree-cover/wiki/Product-Specifications",
		download_url: "",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "https://data-api.globalforestwatch.org/",
		client_library: false,
		maintenance_and_update_frequency: "Periodically",
		spatial_extent: [
			{
				id: "f7a53b50-65bd-4dad-acef-465094a03cbc",
				type: "REGION",
				region: "Tropics",
				geometry: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							properties: {},
							geometry: {
								type: "Polygon",
								coordinates: [
									[
										[-180, -23.4366],
										[180, -23.4366],
										[180, 23.4366],
										[-180, 23.4366],
										[-180, -23.4366],
									],
								],
							},
						},
					],
					bbox: [-180, -23.4366, 180, 23.4366],
				},
				spatial_resolution: "10m x 10m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "30b004b5-2728-4168-92eb-0370484dec34",
				start_date: "2015-12-31",
				end_date: "2020-12-30",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.wri.org/form/contact",
		keywords: [
			"Tropic Tree Cover",
			"Forest",
			"Tree Cover",
			"Urban Tree Cover",
			"Agricultural Tree Cover",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "164dcab3-d124-4169-94f0-7b659a532c97",
					name: "World Resources Institute",
					short_name: "WRI",
					provider_url: "https://www.wri.org/",
					description:
						"The World Resources Institute (WRI) is a global research organization focused on sustainable development and environmental protection. WRI works on issues like climate, energy, food, and forests helping governments and businesses make informed, sustainable choices.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
			{
				provider: {
					id: "c72ffb98-147b-477e-86ab-57563afabdb7",
					name: "Global Forest Watch",
					short_name: "GFW",
					provider_url: "https://www.globalforestwatch.org/",
					description:
						"Global Forest Watch is an online platform that provides data and tools for monitoring forests worldwide in near real-time. It helps governments, companies, and the public track deforestation, forest degradation, and land use change using satellite technology and open data. The platform is led by the World Resources Institute (WRI), which promotes transparency to support forest protection and climate action.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "REGION",
		has_spatial_extent: true,
	},
	{
		id: "80b82b1c-2065-498f-b30b-e065084f8ace",
		title: "VIIRS I-Band 375 m Active Fire Data",
		abstract:
			"VIIRS I-Band 375 m Active Fire Data provides global fire detections at 375-meter resolution using thermal observations from NASA and NOAA satellites. It supports real-time wildfire monitoring and response through daily satellite overpasses.",
		icon: "e911_emergency",
		html_content:
			"\n  <p>\n    The <strong>VIIRS I-Band 375 m Active Fire dataset</strong> offers high-resolution global fire detection using thermal anomaly data from the <strong>Visible Infrared Imaging Radiometer Suite (VIIRS)</strong> on board NASA/NOAA's Suomi NPP and NOAA-20 satellites.\n  </p>\n\n  <p>\n    With a <strong>spatial resolution of 375 meters</strong> and <strong>multiple daily overpasses</strong>, this dataset provides near real-time fire detection, enabling rapid response to wildfires and other thermal events.\n  </p>\n\n  <p>\n    Each fire detection includes attributes such as <em>brightness temperature, confidence level, fire radiative power (FRP)</em>, and the timestamp of observation. These are crucial for modeling fire behavior, estimating emissions, and integrating into alerting or dispatch systems.\n  </p>\n\n",
		documentation_url:
			"https://www.earthdata.nasa.gov/data/instruments/viirs/viirs-i-band-375-m-active-fire-data",
		download_url: "https://firms.modaps.eosdis.nasa.gov/academy/data_api/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "Near Real Time",
		spatial_extent: [
			{
				id: "5f534565-eea0-4154-8e36-1156dbaab26d",
				type: "GLOBAL",
				spatial_resolution: "375m x 375m",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "82cbc15e-19b7-44b9-abbc-e5cd4b318642",
				start_date: "2011-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "https://www.earthdata.nasa.gov/contact",
		keywords: [
			"Fire",
			"Forest Fire",
			"Fire Detection",
			"Thermal",
			"Wildfire",
			"burned",
			"smoke",
			"hazard",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "1d4ff6bc-0f88-4131-88f7-b7bef2af58a5",
					title: "Natural Hazards",
					abstract:
						"Wildfires, droughts, earthquakes, floods, volcanoes, and other natural events.",
					icon: "e911_emergency",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "5c397c86-4949-49dc-b002-dbb7629c2140",
					title: "Forest",
					abstract:
						"Forest- and tree cover, type and change, including deforestation, natural and planted areas.",
					icon: "forest",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "e77e6511-3067-43a8-8e51-6a969fd1317e",
			name: "NASA Data Use Policy",
			url: "https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "86a2ca03-2ceb-47b7-9168-6fcad5e7c4f7",
					name: "The National Aeronautics and Space Administration",
					short_name: "NASA",
					provider_url: "https://www.nasa.gov/",
					description:
						"The National Aeronautics and Space Administration (NASA) is the U.S. government agency responsible for space exploration, scientific discovery, and aeronautics research. Founded in 1958, NASA leads missions to explore space, study Earth and other planets, and develop cutting-edge technology to advance knowledge and innovation.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
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
		],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "100edfc8-499b-4a76-9500-4fd5ed3ee0fd",
		title: "VIIRS Nighttime Lights",
		abstract:
			"The VIIRS Nighttime Lights dataset, produced by the Earth Observation Group at NOAA, offers global measurements of artificial lighting as seen from space during nighttime. This dataset is widely used for monitoring human activity, urbanization, economic development, and disaster impacts.",
		icon: "bolt",
		html_content:
			"<p>\nThe <strong>VIIRS Nighttime Lights</strong> data is derived from the Visible Infrared Imaging Radiometer Suite (VIIRS) onboard the Suomi NPP satellite. It provides high-resolution imagery of Earth’s surface illumination at night, capturing electric lights and other light sources.\n</p>\n<p>\n The VIIRS Nighttime Lights dataset supports a wide range of applications across disciplines. In urban planning, it helps map city growth and infrastructure development. Economists use it to estimate economic activity in regions with limited data availability. Humanitarian organizations monitor conflict zones and displacement by tracking changes in light patterns. Environmental scientists assess ecological impacts of light pollution, while disaster management agencies use it to evaluate the extent of power outages and recovery progress after events like hurricanes and earthquakes.\n</p>",
		documentation_url: "https://eogdata.mines.edu/products/vnl/",
		download_url: "https://eogdata.mines.edu/products/vnl/",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "20080dc3-71b6-4136-b4a0-71ae2b0612d9",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [
			{
				id: "31a4761a-6938-44fb-ac2e-bfaff520ec69",
				start_date: "2011-12-31",
				created_by: "sander@kroglid.com",
			},
		],
		contact: "",
		keywords: [
			"Nighttime lights",
			"artificial lighting",
			"remote sensing",
			"urbanization",
			"light pollution",
			"human settlement",
			"energy",
		],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "e96bd948-0388-48c9-8cca-98bd2005657f",
					title: "Energy",
					abstract:
						"Grids, production, renewables, usage patterns, emissions, and energy potential.",
					icon: "bolt",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "1660f060-1e31-4308-98f4-00eccb5b439e",
					title: "Infrastructure",
					abstract:
						"Roads, buildings, transport systems, and utility networks across regions.",
					icon: "emoji_transportation",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "d20a255f-6889-4f18-a5a0-840fa085e5d7",
					title: "Demographic and Human Footprint",
					abstract:
						"Population, urban spread, mobility, household estimates, and human pressures.",
					icon: "groups",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "b287bd57-b50b-45b6-9325-9f2da8d79cd4",
			name: "CC BY 4.0",
			url: "https://creativecommons.org/licenses/by/4.0/",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "4635e2a0-c67e-415b-a963-63a17d90be26",
					name: "Earth Observation Group (EOG)",
					short_name: "EOG",
					provider_url: "https://payneinstitute.mines.edu/eog/",
					description:
						"The Earth Observation Group (EOG) is a research unit within NOAA's National Centers for Environmental Information. It specializes in processing and analyzing satellite data to monitor global environmental and human activity, with a focus on nighttime lights and energy infrastructure.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [],
		created_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
	{
		id: "23c218fc-dfeb-4dc1-98db-70b89ee41f99",
		title: "World Port Index",
		abstract:
			"The World Port Index (Pub 150) contains the location and physical characteristics of, and the facilities and services offered by major ports and terminals world-wide.",
		icon: "water",
		html_content:
			"<p>\n  The World Port Index (WPI) is an online reference tool providing essential information on thousands of maritime ports worldwide. It includes geographic details, key characteristics, and available services, primarily sourced from NGA’s Sailing Directions and charts. For operational planning, mariners should always consult the latest official charts and publications.\n</p>",
		documentation_url: "https://msi.nga.mil/Publications/WPI",
		download_url:
			"https://app.hubocean.earth/catalog/dataset/a1195213-790e-4171-b70d-44ed42f827f0/world-port-index-data",
		git_url: "",
		data_hub_url: "",
		research_paper_url: "",
		api_authentication_url: "",
		openapi_url: "",
		client_library: false,
		maintenance_and_update_frequency: "",
		spatial_extent: [
			{
				id: "9fb69fc7-467d-46db-8d66-f8b7aba85002",
				type: "GLOBAL",
				spatial_resolution: "",
				created_by: "sander@kroglid.com",
			},
		],
		temporal_extent: [],
		contact: "MCDPUBS@nga.mil",
		keywords: ["ports", "harbour", "terminals"],
		version: "",
		type: "DATASET",
		categories: [
			{
				category: {
					id: "df168bb3-2465-433b-92bd-ece3826ae7bf",
					title: "Ocean",
					abstract:
						"Marine ecosystems, seafloor, water properties, species, and sea level change.",
					icon: "water",
					created_by: "sander@kroglid.com",
				},
				is_main_category: true,
				created_by: "sander@kroglid.com",
			},
			{
				category: {
					id: "1660f060-1e31-4308-98f4-00eccb5b439e",
					title: "Infrastructure",
					abstract:
						"Roads, buildings, transport systems, and utility networks across regions.",
					icon: "emoji_transportation",
					created_by: "sander@kroglid.com",
				},
				is_main_category: false,
				created_by: "sander@kroglid.com",
			},
		],
		code_examples: [],
		license: {
			id: "7e3ed892-4711-4b80-b743-98a4dd2f216b",
			name: "WPI - Public Domain (Title 17 U.S.C. §105 - U.S. Government Work)",
			url: "https://msi.nga.mil/commercial-use",
			created_by: "sander@kroglid.com",
		},
		providers: [
			{
				provider: {
					id: "3a62e721-8105-4bdf-bb4b-dcc42a87e3c6",
					name: "NGA Maritime Safety Information",
					short_name: "NGASI",
					provider_url: "https://msi.nga.mil",
					description:
						"The NGA Maritime Safety Information service, provided by the U.S. National Geospatial-Intelligence Agency (NGA), delivers critical navigational updates to support safe maritime operations worldwide.",
					created_by: "sander@kroglid.com",
				},
				role: "",
			},
		],
		examples: [],
		parents: [],
		children: [
			{
				id: "91c73904-ea9d-498c-864d-876afb087a44",
				title: "HUB Ocean API",
				abstract:
					"The HUB Ocean API provides standardized access to a vast catalog of ocean-related datasets, enabling users to explore, search, and retrieve geospatial and tabular data.",
				type: "API",
				icon: "water",
				has_spatial_extent: false,
				created_by: "sander@kroglid.com",
			},
		],
		created_by: "sander@kroglid.com",
		updated_by: "sander@kroglid.com",
		spatial_extent_type: "GLOBAL",
		has_spatial_extent: true,
	},
]
