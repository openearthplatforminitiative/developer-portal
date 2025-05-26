import { ResourceSkeleton } from "@/app/data-catalog/resource/[resourceId]/page"
import { fetchResourceTutorialsByResourceNames, ResourceTutorial, sanityClient } from "@/sanity/api"
import { ArrowForward } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image"
import Link from "next/link"
import { Tutorial } from "./ResourceTutorial"

const ResourceTutorialsLoader = ({ resourceNames }: { resourceNames: string[] }) => {
  const tutorialsPromise = fetchResourceTutorialsByResourceNames(resourceNames)
  return (
    <Suspense fallback={<ResourceSkeleton />}>
      <ResourceTutorials tutorialsPromise={tutorialsPromise} />
    </Suspense>
  )
}

const ResourceTutorials = async ({ tutorialsPromise }: { tutorialsPromise: Promise<ResourceTutorial[]> }) => {
  const tutorials = await tutorialsPromise
  if (!tutorials || tutorials.length === 0) {
    return null
  }
  return (
    <div className="flex flex-col mt-28">
      <Typography variant="h2">Tutorials</Typography>
      <div className="not-visited:grid grid-cols-1 md:grid-cols-3 mt-8">
        {tutorials.map((tutorial) => (
          <Tutorial key={tutorial._id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  )
}

const TutorialDialog = ({ }) => {
  // if router has a query param, get the slug from it
  // next navigation
}

export default ResourceTutorialsLoader