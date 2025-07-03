import PortableTextStyled from "@/components/PortableTextStyled/PortableTextStyled"
import { BackIcon } from "@/icons/BackIcon"
import { fetchResourceTutorialBySlug, fetchResourceTutorials, ResourceTutorial } from "@/sanity/api"
import { Tooltip, Typography } from "@mui/material"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getImageDimensions } from "@sanity/asset-utils"
import { CameraAltOutlined } from "@mui/icons-material"
import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "@/sanity/api"
import { TableOfContents } from "@/components/HowToArticles/TableOfContents"
import { TableOfContentsMenu } from "@/components/HowToArticles/TableOfContentsMenu"
import { RelevantTutorials } from "@/components/HowToArticles/RelevantTutorials"
import { LatestTutorials } from "@/components/HowToArticles/LatestTutorials"
import { RelevantResources } from "@/components/HowToArticles/RelevantResources"

export const revalidate = 600

export const dynamicParams = true

export async function generateStaticParams() {
	const howtos: ResourceTutorial[] = await fetchResourceTutorials()
	return howtos.map((howto) => ({
		slug: String(howto.slug.current),
	}))
}

export default async function HowTosPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const howto = await fetchResourceTutorialBySlug(slug)
	if (!howto) notFound()
	const lastUpdated = new Date(howto._updatedAt)
	const { width, height } = getImageDimensions(howto.mainImage)
	const builder = imageUrlBuilder(sanityClient)
	return (
		<article className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/how-tos"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to how-to articles</Typography>
			</Link>

			<div id="top" className="flex flex-col gap-8 mt-14">
				<h1 className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl">
					{howto.title}
				</h1>
				{lastUpdated && (
					<Typography variant="subtitle1">
						Last updated:{" "}
						{lastUpdated.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				<div className="relative w-fit">
					<Image
						src={
							howto.mainImage.asset?._ref
								? builder.image(howto.mainImage.asset._ref).toString()
								: ""
						}
						alt={howto.mainImage.alt ?? ""}
						loading="lazy"
						height={height}
						width={width}
						className="rounded-xl w-full object-cover aspect-video"
					/>
					{howto.mainImage && howto.mainImage?.caption && (
						<Tooltip placement="left-end" title={howto.mainImage.caption} arrow>
							<div className="flex justify-center items-center h-fit aspect-square rounded-full bg-secondary-90 text-secondary-main hover:bg-secondary-80 absolute text-[12px] bottom-0 right-0 p-2 m-2">
								<CameraAltOutlined fontSize="inherit" />
							</div>
						</Tooltip>
					)}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)] gap-8 max-w-full">
					<div className="md:sticky top-24 self-start w-full">
						<TableOfContents value={howto.body} />
					</div>
					<div className="w-full max-w-full">
						<PortableTextStyled value={howto.body} />
					</div>
				</div>
				<div className="sticky self-end bottom-8 right-0  md:hidden">
					<TableOfContentsMenu value={howto.body} />
				</div>
				<hr />
				{lastUpdated && (
					<Typography variant="subtitle1">
						Last updated:{" "}
						{lastUpdated.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				<RelevantResources tutorial={howto} />
				<RelevantTutorials tutorial={howto} />
				<LatestTutorials slug={slug} />
			</div>
		</article>
	)
}
