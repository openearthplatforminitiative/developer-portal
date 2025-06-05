"use client"

import { PortableText, PortableTextProps } from "@portabletext/react"
import { useMemo } from "react"
import { PortableTextStyledComponents } from "./PortableTextStyled/Components"

export default function PortableTextStyled({ value }: PortableTextProps) {
	const valueGroups = useMemo(() => {
		if (!Array.isArray(value)) return []
		return value.reduce(
			(acc: any, item: any) => {
				const lastIdx = acc.length - 1
				if (acc[lastIdx].length === 0 || acc[lastIdx][0]._type === item._type) {
					acc[lastIdx].push(item)
				} else {
					acc.push([item])
				}
				return acc
			},
			[[]]
		)
	}, [value])

	if (!valueGroups?.length) return null

	return valueGroups.map((group: any) =>
		group[0]._type === "block" ? (
			<div key={group[0]._key} className="prose break-words">
				<PortableText
					value={group}
					components={PortableTextStyledComponents()}
				/>
			</div>
		) : (
			<PortableText
				key={group[0]._key}
				value={group}
				components={PortableTextStyledComponents()}
			/>
		)
	)
}
