import { Check } from "@mui/icons-material";
import { useState } from "react";

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
  const [filters, setFilters] = useState<FilterQuery[]>(defaultFilters)

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