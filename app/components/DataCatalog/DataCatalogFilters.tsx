import { Check } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDataCatalog } from "./DataCatalogProvider";
import { ResourceTypes, SpatialTypes } from "@/app/data-catalog/DataCatalogActions";


type FilterQuery = {
  field: string;
  value: boolean;
}

const defaultFilters: FilterQuery[] = [
  {
    field: 'APIs',
    value: false,
  },
  {
    field: 'Datasets',
    value: false,
  },
  {
    field: 'ML Models',
    value: false,
  },
  {
    field: 'Global Coverage',
    value: false,
  },
  {
    field: 'Local Coverage',
    value: false,
  }
]

export const DataCatalogFilters = () => {
  const { setTypes, setSpatial } = useDataCatalog()
  const [filters, setFilters] = useState<FilterQuery[]>(defaultFilters)

  useEffect(() => {
    const newTypes: ResourceTypes[] = []
    if (filters.some(filter => filter.field === 'APIs' && filter.value)) {
      newTypes.push('API')
    }
    if (filters.some(filter => filter.field === 'Datasets' && filter.value)) {
      newTypes.push('Dataset')
    }
    if (filters.some(filter => filter.field === 'ML Models' && filter.value)) {
      newTypes.push('ML Model')
    }
    setTypes(newTypes)
  }, [filters, setTypes])

  useEffect(() => {
    const newSpatial: SpatialTypes[] = []
    if (filters.some(filter => filter.field === 'Global Coverage' && filter.value)) {
      newSpatial.push('Global')
    }
    if (filters.some(filter => filter.field === 'Local Coverage' && filter.value)) {
      newSpatial.push('Region')
    }
    setSpatial(newSpatial)
  }, [filters, setSpatial])

  const handleSelect = (field: string) => {
    const newFilters = filters.map(filter => {
      if (filter.field === field) {
        return {
          ...filter,
          value: !filter.value
        }
      }
      return filter
    })
    setFilters(newFilters)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <span>Filter</span>
        {filters.map((filter) => (
          <div
            key={filter.field}
            className={`flex cursor-pointer h-[42px] gap-2 items-center rounded-xl border px-4 py-2 ${filter.value ? 'bg-primary-90 hover:bg-primary-80 border-primary-90' : 'hover:bg-neutral-95'}`}
            onClick={() => handleSelect(filter.field)}
          >
            {filter.value &&
              <Check fontSize="inherit" />
            }
            <h3>{filter.field}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}