"use client"

import {
	Close,
	Edit,
	KeyboardArrowDown,
	KeyboardArrowUp,
} from "@mui/icons-material"
import { Checkbox, Divider, Menu, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"
import { useDraw } from "./DataCatalog/DrawControl/DrawProvider"
import { useDataCatalog } from "./DataCatalog/DataCatalogProvider"

export const FilterSelectArea = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const {
		setFeatures,
		features,
		selectedFeature,
		setSelectedFeature,
		setTool,
	} = useDraw()
	const { selectedFeatures, setShowMap } = useDataCatalog()

	const handleDelete = (
		e: React.MouseEvent<HTMLElement>,
		id: string | number | undefined
	) => {
		e.stopPropagation()
		setTool("select")
		setShowMap(true)
		setSelectedFeature(undefined)
		setFeatures(features.filter((feature) => feature.id !== id))
	}

	const handleCreatePolygon = () => {
		setTool("polygon")
		setShowMap(true)
		setSelectedFeature(undefined)
		setAnchorEl(null)
	}

	const handleCreatePoint = () => {
		setTool("point")
		setShowMap(true)
		setSelectedFeature(undefined)
		setAnchorEl(null)
	}

	const handleSelect = (id: string | number | undefined) => {
		const newFeatures = features.map((feature) => {
			if (feature.id !== id) return feature
			else {
				return {
					...feature,
					properties: {
						selected: !feature.properties?.selected ?? true,
					},
				}
			}
		})
		setFeatures(newFeatures)
	}

	const handleEdit = (
		event: React.MouseEvent<HTMLElement>,
		id: string | number | undefined
	) => {
		event.stopPropagation()
		if (selectedFeature?.id === id) {
			setSelectedFeature(undefined)
		} else {
			setSelectedFeature(undefined)
			setTool("select")
			setSelectedFeature(features.find((sel) => sel.id === id))
		}
	}

	const clearSelected = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		setFeatures(
			features.map((feature) => {
				return {
					...feature,
					properties: {
						selected: false,
					},
				}
			})
		)
	}

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
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
					{selectedFeatures.length > 0 ? (
						<>
							<span className="flex px-3 py-1 gap-2 bg-neutral-90 rounded-lg items-center">
								{selectedFeatures.length}
							</span>
							<span className="font-medium">Selected</span>
						</>
					) : (
						<span className="py-1">None</span>
					)}
				</span>
				<span className="flex items-center">
					{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					{selectedFeatures.length > 0 && (
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
				{features.map((option, index) => (
					<MenuItem
						key={option.id}
						onClick={() => {
							handleSelect(option.id)
						}}
						className="group flex gap-2 py-2 justify-between"
					>
						<div className="flex gap-2 items-center">
							<Checkbox
								sx={{ padding: 0 }}
								disableRipple
								checked={selectedFeatures.some((sel) => sel.id === option.id)}
							/>
							{option.geometry.type == "Point" ? "Point" : "Area"} {index + 1}
						</div>
						<div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
							<button
								className="hover:text-neutral-20 cursor-pointer"
								onClick={(event) => handleEdit(event, option.id)}
							>
								<Edit />
							</button>
							<button
								className="hover:text-neutral-20 cursor-pointer"
								onClick={(event) => handleDelete(event, option.id)}
							>
								<Close />
							</button>
						</div>
					</MenuItem>
				))}
				{features.length > 0 && <Divider />}
				<MenuItem
					className="flex gap-2 py-2"
					onClick={() => handleCreatePolygon()}
				>
					Draw New Area
				</MenuItem>
				<MenuItem
					className="flex gap-2 py-2"
					onClick={() => handleCreatePoint()}
				>
					Draw New Point
				</MenuItem>
			</Menu>
		</>
	)
}
