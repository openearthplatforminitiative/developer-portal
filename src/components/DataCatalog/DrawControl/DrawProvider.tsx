"use client"

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react"
import { Feature, Polygon, Point } from "geojson"

export type DrawTool = "select" | "point" | "polygon"

export interface DrawContextType {
	tool: DrawTool
	setTool: Dispatch<SetStateAction<DrawTool>>
	features: Feature<Polygon | Point>[]
	generateFeatureId: () => string
	setFeatures: Dispatch<SetStateAction<Feature<Polygon | Point>[]>>
	selectedFeature: Feature<Polygon | Point> | undefined
	setSelectedFeature: Dispatch<
		SetStateAction<Feature<Polygon | Point> | undefined>
	>
}

export const DrawContext = createContext<DrawContextType | undefined>(undefined)

export const useDraw = () => {
	const context = useContext(DrawContext)
	if (context === undefined) {
		throw new Error("useDraw must be used within a DrawProvider")
	}
	return context
}

export const DrawProvider = ({ children }: { children: ReactNode }) => {
	const [tool, setTool] = useState<DrawTool>("select")
	const [features, setFeatures] = useState<Feature<Polygon | Point>[]>([])
	const [selectedFeature, setSelectedFeature] = useState<
		Feature<Polygon | Point> | undefined
	>(undefined)

	const generateFeatureId = () => {
		if (features.length === 0) {
			return "feature-1"
		} else {
			const highestId =
				features.length > 0 &&
				typeof features[features.length - 1].id === "string"
					? (features[features.length - 1].id as string).split("-")[1]
					: "0"
			return `feature-${highestId + 1}`
		}
	}

	return (
		<DrawContext.Provider
			value={{
				tool,
				setTool,
				features,
				setFeatures,
				generateFeatureId,
				selectedFeature,
				setSelectedFeature,
			}}
		>
			{children}
		</DrawContext.Provider>
	)
}
