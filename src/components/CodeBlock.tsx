"use client"

import React, { useState } from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { IconButton, Tooltip } from "@mui/material"
import Box from "@mui/material/Box"
import { myCustomStyle } from "@/custom-code-style"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python"
import java from "react-syntax-highlighter/dist/cjs/languages/hljs/java"
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash"
import { Check, ContentCopy } from "@mui/icons-material"

SyntaxHighlighter.registerLanguage("javascript", js)
SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("java", java)

interface CodeBlockProps {
	codeString: string
	language: string
}

const CodeBlock = ({ codeString, language }: CodeBlockProps) => {
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const [openTooltip, setOpenTooltip] = useState<boolean>(false) // State to control the tooltip open status

	const handleCopy = async () => {
		if ("clipboard" in navigator) {
			await navigator.clipboard.writeText(codeString)
			setIsCopied(true)
			setOpenTooltip(true) // Open the tooltip
			setTimeout(() => {
				setIsCopied(false)
				setOpenTooltip(false) // Close the tooltip after 3 seconds
			}, 3000)
		} else {
			console.error("Clipboard API not available")
		}
	}

	return (
		<Box className="relative">
			<SyntaxHighlighter
				language={language}
				style={myCustomStyle}
				className="p-6 break-all rounded-xl"
				showLineNumbers={true} // see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/376
				lineNumberStyle={{ color: "#B5CCBA", WebkitUserSelect: "none" }}
			>
				{codeString}
			</SyntaxHighlighter>
			<Tooltip
				title={isCopied ? "Copied" : "Copy"}
				placement="left"
				classes={{ tooltip: "bg-primary-90 text-primary-10" }}
				open={openTooltip}
			>
				<IconButton
					onClick={handleCopy}
					className={
						"absolute top-2 right-2" +
						(isCopied
							? " bg-primary-90 text-primary-10"
							: " bg-neutral-90 text-primary-10")
					}
					size="small"
				>
					{isCopied ? <Check /> : <ContentCopy />}
				</IconButton>
			</Tooltip>
		</Box>
	)
}

export default CodeBlock
