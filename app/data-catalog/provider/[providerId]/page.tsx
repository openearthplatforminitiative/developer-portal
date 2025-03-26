import { BackIcon } from "@/app/icons/BackIcon"
import { Card, Typography } from "@mui/material"
import { fetchProvider } from "../../DataCatalogActions"
import { Provider } from "../../DataCatalogTypes"
import { Suspense } from "react"
import { redirect } from "next/navigation"
import { ArrowOutward, CloudOutlined } from "@mui/icons-material"
import ApiCard from "@/app/components/ApiCard"
import Link from "next/link"

type ProviderLoaderProps = {
  params: Promise<{
    providerId: string
  }>
}
const page = async ({ params }: ProviderLoaderProps) => {
  const { providerId } = await params
  const provider = await fetchProvider(providerId)
  if (!provider) {
    redirect("/not-found")
  }
  return (
    <Suspense>
      <ResourcePage provider={provider} />
    </Suspense>
  )
}

type ProviderPageProps = {
  provider: Provider
}

export const ResourcePage = ({ provider }: ProviderPageProps) => {
  return (
    <div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
      <Link
        href="/data-catalog"
        className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
      >
        <BackIcon />
        <Typography className="text-xl">Back to data catalog</Typography>
      </Link>

      <div className="flex flex-col gap-8 mt-14">
        <div className="flex flex-wrap items-center gap-4">
          <Typography variant="h1" className="text-4xl xs:text-5xl">
            {provider.name}
          </Typography>
        </div>
        <Typography className="text-xl xs:text-2xl">
          {provider.description}
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28">
        <Link
          href={provider.url}
          target="_blank"
        >
          <Card key={provider.id} className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl">
            <div className="flex flex-col p-6 gap-3">
              <div className="flex flex-row justify-between items-center">
                <Typography variant="h5" className="text-xl xs:text-2xl">
                  {provider.name}
                </Typography>
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowOutward />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
      {provider.resources && provider.resources.length > 0 && (
        <div className="flex flex-col mt-28">
          <Typography className="text-3xl xs:text-4xl">Data Catalog</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {provider.resources.map((usedByResource) => (
              <ApiCard
                key={usedByResource.id}
                header={usedByResource.title}
                subHeader={usedByResource.abstract}
                cardIcon={<CloudOutlined />}
                href={`/data-catalog/resource/${usedByResource.id}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default page
