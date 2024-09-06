"use client"

import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import CodeBlock from "./CodeBlock"


interface CodeBlockProps {
    codeString: string
    language: string
}

interface CodeBlockWrapperProps {
    codeBlocks: CodeBlockProps[]
}


const CodeBlockWrapper = ({ codeBlocks }: CodeBlockWrapperProps) => {
    const [tabValue, setTabValue] = useState<number>(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }

    return (
        <>
            <Box className="mt-6">
                <Tabs value={tabValue} onChange={handleChange}>
                    {codeBlocks.map((block, index) => (
                        <Tab key={index} label={block.language} />
                    ))}
                </Tabs>
            </Box>
            {codeBlocks.map((block, index) => (
                <div key={index} hidden={index !== tabValue}>
                    <CodeBlock codeString={block.codeString} language={block.language} />
                </div>
            ))}
        </>
    )
} 


export default CodeBlockWrapper