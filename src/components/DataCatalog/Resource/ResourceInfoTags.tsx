"use client"

import { Resource } from "@/types/resource"
import { ArrowOutward } from "@mui/icons-material"
import Link from "next/link"
import { useMemo } from "react"

type ResourceInfoTagsProps = {
  resource: Resource
}

export const ResourceInfoTags = ({ resource }: ResourceInfoTagsProps) => {

  const temporalExtents = useMemo(() => {
    if (resource.temporal_extent && resource.temporal_extent.length > 0) {
      return resource.temporal_extent.map((temporalExtent) => (
        `${temporalExtent.start_date && new Date(temporalExtent.start_date).getFullYear()} - ${temporalExtent.end_date ? new Date(temporalExtent.end_date).getFullYear() : ""}`
      )).join(", ")
    }
    return null
  }, [resource.temporal_extent])

  return (
    <>
      {resource.version && (
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">
          Version {resource.version}
        </div>
      )}
      {resource.license && (
        <Link
          className="group flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full"
          href={resource.license.url}
          target="_blank"
        >
          {resource.license.name}
          <ArrowOutward
            fontSize="inherit"
            className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      )}
      {resource.release_date && (
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">
          Released {new Date(resource.release_date).getFullYear()}
        </div>
      )}
      {resource.update_frequency && (
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">
          Updated {resource.update_frequency}
        </div>
      )}
      {temporalExtents && (
        <div
          className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full"
        >
          {temporalExtents}
        </div>
      )}
    </>
  )
}