'use client';

import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyIcon } from '@/app/icons/CopyIcon';
import { IconButton, Tooltip } from '@mui/material';
import { CheckIcon } from '@/app/icons/CheckIcon';
import Box from '@mui/material/Box';
import { myCustomStyle } from '@/app/custom-code-style';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

interface CodeBlockProps {
  codeString: string;
  language: string;
}

const CodeBlock = ({ codeString, language }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false); // State to control the tooltip open status

  const handleCopy = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setOpenTooltip(true); // Open the tooltip
      setTimeout(() => {
        setIsCopied(false);
        setOpenTooltip(false); // Close the tooltip after 3 seconds
      }, 3000);
    } else {
      console.error('Clipboard API not available');
    }
  };

  return (
    <Box className='relative mt-6'>
      <SyntaxHighlighter
        language={language}
        style={myCustomStyle}
        className={'p-4'}
        showLineNumbers={false} // see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/376
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
      <Tooltip
        title={isCopied ? 'Copied!' : 'Copy'}
        placement='left'
        open={openTooltip}
      >
        <IconButton
          onClick={handleCopy}
          className='absolute top-2 right-2 text-gray-500'
          size='small'
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CodeBlock;