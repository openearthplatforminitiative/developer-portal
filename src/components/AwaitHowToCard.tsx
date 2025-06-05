"use client"

import { fetchResourceTutorialById, ResourceTutorial } from "@/sanity/api"
import React, { useEffect, useState } from "react"
import { HowToSmallerCard } from "./HowToSmallerCard"
import { Skeleton } from "@mui/material"

export default function GetHowToCard({ tutorialId }: { tutorialId: string }) {
	const [tutorial, setTutorial] = useState<ResourceTutorial>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadTutorial() {
			try {
				const result = await fetchResourceTutorialById(tutorialId)
				console.log(result)
				if (result) setTutorial(result)
			} catch (err) {
				setTutorial(undefined)
			} finally {
				setLoading(false)
			}
		}

		loadTutorial()
	}, [tutorialId])

	if (loading) {
		return <Skeleton variant="rectangular" className="rounded-xl w-full h-36" />
	}

	if (!tutorial) {
		return <p>Tutorial not found</p>
	}

	return <HowToSmallerCard tutorial={tutorial} />
}
