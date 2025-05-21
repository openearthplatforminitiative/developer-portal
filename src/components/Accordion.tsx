"use client"

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatePresence>
      <div className="rounded-xl transition-all overflow-hidden bg-neutral-95 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={onClick}
        >
          <Typography className="text-xl xs:text-2xl">
            {title}
          </Typography>
          <div>
            {isOpen ? <ArrowUpward /> : <ArrowDownward />}
          </div>
        </div>
        {isOpen && (
          <motion.div key="accordion-content" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4">
            {children}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export default Accordion
