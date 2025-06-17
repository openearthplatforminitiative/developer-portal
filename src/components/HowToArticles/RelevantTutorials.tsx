import { fetchRelevantResourceTutorialsForTutorial, ResourceTutorial } from "@/sanity/api"
import { Typography } from "@mui/material"
import { HowToCard } from "./HowToCard"

export async function RelevantTutorials({ tutorial }: { tutorial: ResourceTutorial }) {
  const relevantResourceTitles =
    tutorial.relevantResources?.resources?.map((resource) => resource.title) ??
    []
  const tutorials = await fetchRelevantResourceTutorialsForTutorial(
    relevantResourceTitles,
    tutorial.slug.current
  )
  if (!tutorials || tutorials.length === 0) {
    return null
  }
  return (
    <div>
      <Typography variant="h2" className="mt-8 mb-6">
        Relevant How-To&apos;s
      </Typography>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <HowToCard key={tutorial._id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  )
}