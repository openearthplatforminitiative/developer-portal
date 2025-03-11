import { ArrowForward, WbSunnyOutlined } from "@mui/icons-material"
import { Chip } from "@mui/material"
import Link from "next/link"

const cards: ResourceCardProps[] = [
  {
    id: 1,
    title: "Weather",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 2,
    title: "Flood",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 3,
    title: "Geocoding",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 4,
    title: "Deforestation",
    tag: "ML Model",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 5,
    title: "Soil",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 6,
    title: "Crop Health",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 7,
    title: "Agriculture",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 8,
    title: "Weather",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 9,
    title: "Flood",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 10,
    title: "Geocoding",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 11,
    title: "Deforestation",
    tag: "ML Model",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 12,
    title: "Soil",
    tag: "API",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 13,
    title: "Crop Health",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
  {
    id: 14,
    title: "Agriculture",
    tag: "DataSet",
    cardIcon: <WbSunnyOutlined />,
    href: "/data-catalog/agriculture",
  },
]

type ResourceCardProps = {
  id: number,
  title: string
  tag: 'API' | 'DataSet' | 'ML Model'
  cardIcon: React.ReactNode
  href: string
}

const ResourceCard = ({ title, tag, cardIcon, href }: ResourceCardProps) => {

  const tagColors = () => {
    switch (tag) {
      case "API":
        return <Chip
          className={`bg-primary-90 text-primary-main`}
          label={tag}
        />
      case "DataSet":
        return <Chip
          className={`bg-secondary-90 text-secondary-main`}
          label={tag}
        />
      case "ML Model":
        return <Chip
          className={`bg-error-90 text-error-main`}
          label={tag}
        />
      default:
        return <Chip
          className={`bg-tertiary-90 text-tertiary-main`}
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
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
      {cards.map((card) => (
        <ResourceCard
          key={card.id}
          title={card.title}
          cardIcon={card.cardIcon}
          tag={card.tag}
          href={card.href}
        />
      ))}
    </div>
  )
}