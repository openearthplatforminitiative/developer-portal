"use client"

import { Autocomplete, TextField } from "@mui/material"

export const DataCatalogSearch = () => {
  return (
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
          variant="filled"
          placeholder="Search for data"
        />
      )}
    />
  )
}