"use client"

import { Autocomplete, debounce, TextField } from "@mui/material"
import { useState, useCallback, useEffect, useRef } from "react"
import { geoCodingAction } from "./GeoCodingActions"
import { LngLat } from "maplibre-gl"
import { useMap } from "react-map-gl/maplibre"
import { motion } from "motion/react"

type LocationOption = {
	label: string
	coordinate: [number, number]
}

export const DataCatalogGeoSearch = () => {
	const [options, setOptions] = useState<LocationOption[]>([])
	const [searchQuery, setSearchQuery] = useState("")
	const [loading, setLoading] = useState(false)
	const abortControllerRef = useRef<AbortController | null>(null)

	const map = useMap()

	const fetchOptions = useCallback(
		debounce(async (searchTerm, abortController) => {
			if (!searchTerm) {
				setOptions([])
				return
			}
			setLoading(true)
			await geoCodingAction(searchTerm, "en").then((result) => {
				if (!abortController.signal.aborted) {
					if (result.features && result.features.length > 0) {
						const options = result.features
							.map((feature) => {
								let label = feature.properties.name || ""
								if (feature.properties.city) {
									label += `, ${feature.properties.city}`
								}
								if (feature.properties.country) {
									label += `, ${feature.properties.country}`
								}
								const coordinate = feature.geometry.coordinates as [
									number,
									number,
								]
								return { label, coordinate }
							})
							.filter(
								(value, index, self) =>
									self.findIndex((t) => t.label === value.label) === index
							)
						setOptions(options)
					}
					setLoading(false)
				}
			})
		}, 300),
		[]
	)

	useEffect(() => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort()
		}

		const newAbortController = new AbortController()
		abortControllerRef.current = newAbortController

		fetchOptions(searchQuery, newAbortController)

		return () => newAbortController.abort() // Cleanup on unmount
	}, [searchQuery, fetchOptions])

	return (
		<motion.div
			layout="position"
			className="absolute right-20 max-w-96 top-4 left-4 pointer-events-none"
		>
			<div className="pointer-events-auto bg-neutral-95 rounded-sm">
				<Autocomplete
					disablePortal
					options={options}
					loading={loading}
					onChange={(e, value) => {
						if (!value) return
						value = value as LocationOption
						map.current?.flyTo({
							zoom: 12,
							center: new LngLat(value.coordinate[0], value.coordinate[1]),
						})
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder="Search and zoom to location"
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					)}
				/>
			</div>
		</motion.div>
	)
}
