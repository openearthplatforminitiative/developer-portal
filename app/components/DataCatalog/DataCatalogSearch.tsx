"use client"

import { Autocomplete, TextField } from "@mui/material"
import { useDataCatalogFilters } from "./DataCatalogFiltersProvider"

export const DataCatalogSearch = () => {
	const { tags, setTags } = useDataCatalogFilters()
	return (
		<div className="bg-neutral-95 rounded-sm">
			<Autocomplete
				id="data-catalog-search"
				className="w-full"
				multiple
				freeSolo
				value={tags}
				onChange={(event, value) => setTags(value)}
				options={tags}
				renderInput={(params) => (
					<TextField {...params} type="text" placeholder="Search" />
				)}
			/>
		</div>
	)
}
