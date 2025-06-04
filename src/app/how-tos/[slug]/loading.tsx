import { Skeleton } from "@mui/material";

export default function HowTosSkeleton() {
  return (
    <div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
      <Skeleton variant="rectangular" className="w-full h-12 mb-4" />
      <Skeleton variant="rectangular" className="w-1/3 h-8 mb-8" />
    </div>
  )
}