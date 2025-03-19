"use client"

import { Autocomplete, TextField } from "@mui/material"

export const DataCatalogSearch = () => {
  return (
    <div className="bg-neutral-95 rounded-sm w-min">
      <Autocomplete
        id="data-catalog-search"
        className="sticky w-96 top-0"
        multiple
        freeSolo
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            type="text"
            placeholder="Search"
          />
        )}
      />
    </div>
  )
}