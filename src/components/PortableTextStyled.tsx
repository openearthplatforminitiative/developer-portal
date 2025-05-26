import { getImageDimensions } from "@sanity/asset-utils"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "@/sanity/api"
import PortableText from "react-portable-text"
import { ReactElement } from "react"
import { Box, Tooltip } from "@mui/material"
import { ClosedCaption } from "@mui/icons-material"

type Row = {
	_key: string
	cells: string[]
}

type SanityImage = {
	_type: string
	alt: string
	caption: string
	_key: string
	asset: {
		_ref: string
		_type: string
	}
}

interface PortableTextStyledProps {
	content: any
	className?: string
}

export default function PortableTextStyled({
	content,
	className,
}: PortableTextStyledProps) {
	const builder = imageUrlBuilder(sanityClient)
	return (
		<PortableText
			dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
			projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
			content={content}
			className={className}
			serializers={{
				h1: (props: any) => (
					<h1 className="text-5xl xs:text-6xl mb-12" {...props} />
				),
				h2: (props: any) => (
					<h2 className="text-4xl xs:text-5xl mb-6 mt-12" {...props} />
				),
				h3: (props: any) => (
					<h3 className="text-3xl xs:text-4xl mb-6 mt-12" {...props} />
				),
				h4: (props: any) => (
					<h4 className="text-2xl xs:text-3xl mb-6 mt-12" {...props} />
				),
				normal: (props: any) => <p className="text-base mb-10" {...props} />,
				table: ({ rows }: { rows: Row[] }) => {
					if (!rows) {
						return null
					}
					const [headerRow, ...bodyRows] = rows
					return (
						<table className="w-full my-4">
							<thead className="border-b border-neutral-80 font-bold">
								<tr>
									{headerRow.cells.map((cell, cellIndex) => {
										const cellStyle = "xs:p-4 p-0 border-neutral-80"

										return (
											<th
												className={
													cellIndex > 0 &&
													cellIndex < headerRow.cells.length - 1
														? cellStyle + " text-center"
														: cellStyle + " text-left"
												}
												key={cellIndex}
											>
												{cell}
											</th>
										)
									})}
								</tr>
							</thead>
							<tbody>
								{bodyRows.map((row) => {
									const cellStyle = "xs:p-4 p-0 border-neutral-80"
									return (
										<tr className="border-b border-neutral-80" key={row._key}>
											{row.cells.map((cell, cellIndex) => (
												<td
													className={
														cellIndex > 0 && cellIndex < row.cells.length - 1
															? cellStyle + " text-center"
															: cellStyle
													}
													key={cellIndex}
												>
													{cell}
												</td>
											))}
										</tr>
									)
								})}
							</tbody>
						</table>
					)
				},
				li: ({ children }: any) => (
					<li className="ml-4 text-base list-disc">{children}</li>
				),
				ul: ({ children }: any) => <ul className="ml-4 mb-6">{children}</ul>,
				ol: ({ children }: any) => <ol className="ml-4 mb-6">{children}</ol>,
				blockquote: ({ children }: any) => (
					<blockquote className="ml-4 text-base italic">{children}</blockquote>
				),
				link: ({ href, children }: any) => (
					<a
						href={href}
						className="text-primary-main underline hover:no-underline"
					>
						{children}
					</a>
				),
				image: (value: SanityImage, props: any) => {
					const { width, height } = getImageDimensions(value)
					return (
						<Box className="relative w-fit">
							<Image
								src={
									value && value?.asset?._ref
										? builder.image(value.asset._ref).toString()
										: ""
								}
								alt={value && value?.alt ? value.alt : ""}
								loading="lazy"
								height={height}
								width={width}
								className="my-20 rounded-xl"
								{...props}
							/>
							{value && value?.caption && (
								<Tooltip placement="left-end" title={value.caption} arrow>
									<Box className="w-fit h-fit rounded-full bg-secondary-90 hover:bg-secondary-80 absolute bottom-0 right-0 m-2">
										<ClosedCaption />
									</Box>
								</Tooltip>
							)}
						</Box>
					)
				},
				internalLink: ({
					slug,
					type,
					children,
				}: {
					slug: any
					type: string
					children: ReactElement
				}) => {
					let prefix = "/"
					if (type === "documents") {
						prefix = "/resources"
					}
					const href = `${prefix}/${slug.current}`
					return (
						<a
							className="text-primary-main underline hover:no-underline"
							href={href}
						>
							{children}
						</a>
					)
				},
				externalLink: ({
					href,
					openInNewTab,
					children,
				}: {
					href: string
					openInNewTab: boolean
					children: ReactElement
				}) => {
					return openInNewTab ? (
						<a
							className="text-primary-main underline hover:no-underline"
							href={href}
							target="_blank "
							rel="noopener noreferrer"
						>
							{children}
						</a>
					) : (
						<a
							className="text-primary-main underline hover:no-underline"
							href={href}
						>
							{children}
						</a>
					)
				},
				emailLink: ({
					href,
					children,
				}: {
					href: string
					children: ReactElement
				}) => (
					<a
						className="text-primary-main underline hover:no-underline"
						href={`mailto:${href}`}
					>
						{children}
					</a>
				),
			}}
		/>
	)
}
