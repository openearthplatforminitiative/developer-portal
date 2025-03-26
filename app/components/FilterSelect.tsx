"use client"

import {
  Close,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material"
import { Checkbox, Menu, MenuItem } from "@mui/material"
import { useState } from "react"

export type Option = {
  label: string
  value: string
}

type FilterSelectProps = {
  options: Option[]
  selected: string[]
  setSelected: (value: string[]) => void
}

export const FilterSelect = ({
  options,
  selected,
  setSelected,
}: FilterSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleSelect = (value: string) => {
    let newSelected
    if (selected.includes(value)) {
      newSelected = selected.filter((sel) => sel !== value)
    } else {
      newSelected = [...selected, value]
    }
    setSelected(newSelected)
  }
  const clearSelected = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setSelected([])
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div
        className="flex cursor-pointer gap-2 items-center rounded-lg border px-2 py-1 justify-between hover:bg-neutral-95"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
        tabIndex={0}
      >
        <span className="flex gap-2 flex-wrap items-center">
          {selected.length > 0 ? (
            <>
              <span className="flex px-3 py-1 gap-2 bg-neutral-90 rounded-lg items-center">
                {selected.length}
              </span>
              <span className="font-medium">Selected</span>
            </>
          ) : (
            <span className="py-1">All</span>
          )}
        </span>
        <span className="flex items-center">
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {selected.length > 0 && (
            <button
              className="flex size-6 rounded-lg cursor-pointer bg-neutral-90 hover:bg-neutral-80 justify-center items-center"
              onClick={clearSelected}
            >
              <Close fontSize="inherit" />
            </button>
          )}
        </span>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => {
              handleSelect(option.value)
            }}
            className="flex gap-2 py-2"
          >
            <Checkbox sx={{ padding: 0 }} disableRipple checked={selected.some((sel) => sel === option.value)} />
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
