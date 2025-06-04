import { fetchResourceTutorials } from "@/sanity/api"
import { Suspense } from "react"
import { HowToCard } from "@/components/HowToCard"

export const HowToArticles = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HowToArticlesLoader />
    </Suspense>
  )
}

export const HowToArticlesLoader = async () => {
  const tutorials = await fetchResourceTutorials()
  if (!tutorials || tutorials.length === 0) {
    return null
  }
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
      {tutorials.map((tutorial) => (
        <div className="snap-start" key={tutorial._id}>
          <HowToCard key={tutorial._id} tutorial={tutorial} />
        </div>
      ))}
    </div>
  )
}