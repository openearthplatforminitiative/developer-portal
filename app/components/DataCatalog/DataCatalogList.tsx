"use client"

import { ArrowForward, WbSunny } from "@mui/icons-material"
import { Chip } from "@mui/material"
import Link from "next/link"
import { useDataCatalog } from "./DataCatalogProvider"

type ResourceCardProps = {
  id: string,
  title: string
  tag: 'API' | 'Dataset' | 'ML Model'
  cardIcon: React.ReactNode
  href: string
}

const ResourceCard = ({ title, tag, cardIcon, href }: ResourceCardProps) => {

  const tagColors = () => {
    switch (tag) {
      case "API":
        return <Chip
          className="bg-primary-90 text-primary-main"
          label={tag}
        />
      case "Dataset":
        return <Chip
          className="bg-secondary-90 text-secondary-main"
          label={tag}
        />
      case "ML Model":
        return <Chip
          className="bg-error-90 text-error-main"
          label={tag}
        />
      default:
        return <Chip
          className="bg-tertiary-90 text-tertiary-main"
          label={tag}
        />
    }
  }


  return (
    <Link
      className="flex flex-1 items-center justify-between gap-6 rounded-lg px-4 py-2 bg-neutral-95 hover:bg-neutral-90 cursor-pointer"
      href={href}
    >
      <div className="flex gap-6 items-center">
        {cardIcon}
        <h3>{title}</h3>
        {tagColors()}
      </div>
      <ArrowForward />
    </Link>
  )
}

export const DataCatalogList = () => {
  const { resources } = useDataCatalog()
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
      {resources.map((card) => (
        <ResourceCard
          key={card.id}
          title={card.title}
          cardIcon={<WbSunny />}
          tag={card.type}
          href={`data-catalog/resource/${card.id}`}
          id={card.id}
        />
      ))}
    </div>
  )
}