"use client"

import { Button, Typography } from "@mui/material"
import { useState } from "react"

const Page = () => {
  const [showIFrame, setShowIFrame] = useState(false)

  return (
    <div className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
      <div className="flex flex-col gap-8 mb-20">
        <Typography
          variant="h1"
          className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
        >
          Hackathon 2025
        </Typography>
        {showIFrame ? (
          <IFrame />
        ) : (
          <Button className="px-6 py-2 w-fit mx-auto rounded-full flex flex-row items-center gap-1.5 hover:bg-neutral-95 normal-case bg-primary-40 text-neutral-100 hover:text-neutral-0"
            onClick={() => setShowIFrame(!showIFrame)}
          >
            Sign up now!
          </Button>
        )}

      </div>
    </div>
  )
}

const IFrame = () => {
  return (
    <iframe
      className="w-full max-w-[850px] h-[1000px] mx-auto border-none"
      src="https://forms.office.com/Pages/ResponsePage.aspx?id=nJI1Z7-dO0efxl-9zSyfxF765mave39GuuYWfo3Gl5hURFQ4TDJMMUMwRFRSSzhCT0ZMSzlYNFBKQS4u&embed=true"
    />
  )
}

export default Page
