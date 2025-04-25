import { useDataCatalogFilters } from "./DataCatalogFiltersProvider"
import { useDataCatalogData } from "./DataCatalogDataProvider"
import { FilterSelect, Option } from "../FilterSelect"
import { FilterSelectArea } from "../FilterSelectArea"
import { useEffect, useMemo, useState } from "react"
import { Modal, useMediaQuery } from "@mui/material"
import { Close, FilterAltOutlined, Public } from "@mui/icons-material"

const resourceOptions: Option[] = [
	{ label: "APIs", value: "API" },
	{ label: "Datasets", value: "DATASET" },
	{ label: "Dataset_Collection", value: "DATASET_COLLECTION" },
	{ label: "ML Models", value: "ML_MODEL" },
]
const spatialOptions: Option[] = [
	{ label: "Global Coverage", value: "GLOBAL" },
	{ label: "Partial Coverage", value: "REGION" },
	{ label: "Non-Spatial", value: "NON_SPATIAL" },
]

export const DataCatalogFilters = () => {
	const [showFilters, setShowFilters] = useState(false)

	const lg = useMediaQuery("(min-width: 1024px)")

	useEffect(() => {
		if (!lg) {
			setShowFilters(false)
		}
	}, [lg])

	const {
		setShowMap,
		types,
		setTypes,
		spatial,
		setSpatial,
		categories: filteredCategories,
		setCategories: setFilteredCategories,
		providers: filteredProviders,
		setProviders: setFilteredProviders,
		years,
		setYears,
	} = useDataCatalogFilters()

	const { selectedFeatures, providers, categories } = useDataCatalogData()

	const categoryOptions: Option[] = categories.map((category) => ({
		label: category.title,
		value: category.id,
	}))

	const providerOptions: Option[] = providers.map((provider) => ({
		label: provider.name,
		value: provider.id,
	}))

	const numberOfFilters = useMemo(() => {
		return (
			types.length +
			spatial.length +
			filteredCategories.length +
			filteredProviders.length +
			years.length +
			selectedFeatures.length
		)
	}, [
		types,
		spatial,
		filteredCategories,
		filteredProviders,
		years,
		selectedFeatures,
	])

	const yearOptions: Option[] = useMemo(() => {
		const fromYear = 1950
		const currentYear = new Date().getFullYear()
		return Array.from({ length: currentYear - fromYear + 1 }, (_, i) => ({
			label: (currentYear - i).toString(),
			value: (currentYear - i).toString(),
		}))
	}, [])

	const filters = (
		<>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Resource Types</span>
				<FilterSelect
					options={resourceOptions}
					selected={types}
					setSelected={setTypes}
				/>
			</div>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Temporal Extent</span>
				<FilterSelect
					options={yearOptions}
					selected={years}
					setSelected={setYears}
				/>
			</div>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Spatial Extent</span>
				<FilterSelect
					options={spatialOptions}
					selected={spatial}
					setSelected={setSpatial}
				/>
			</div>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Categories</span>
				<FilterSelect
					options={categoryOptions}
					selected={filteredCategories}
					setSelected={setFilteredCategories}
				/>
			</div>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Providers</span>
				<FilterSelect
					options={providerOptions}
					selected={filteredProviders}
					setSelected={setFilteredProviders}
				/>
			</div>
			<div className="flex flex-col gap-1 flex-1">
				<span className="font-medium">Geometry</span>
				<FilterSelectArea />
			</div>
		</>
	)

	if (lg) {
		return <div className="grid grid-cols-6 gap-4 text-base">{filters}</div>
	} else {
		return (
			<>
				<div className="flex gap-2">
					<button
						onClick={() => setShowMap(true)}
						className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 text-white rounded-lg px-4 py-2 flex items-center gap-2"
					>
						<Public /> Show map
					</button>
					<button
						onClick={() => setShowFilters(true)}
						className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 text-white rounded-lg px-4 py-2 flex items-center gap-2"
					>
						<FilterAltOutlined /> Filters{" "}
						{numberOfFilters > 0 && (
							<span className="bg-neutral-95 flex justify-center items-center rounded-lg size-8">
								{numberOfFilters}
							</span>
						)}
					</button>
				</div>
				<Modal open={showFilters}>
					<div className="bg-neutral-99 h-full w-full p-4">
						<div className="w-full flex justify-end">
							<button
								onClick={() => setShowFilters(false)}
								className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 size-10 rounded-lg flex items-center justify-center"
							>
								<Close />
							</button>
						</div>
						<div className="flex flex-col gap-2 text-base">{filters}</div>
					</div>
				</Modal>
			</>
		)
	}
}
