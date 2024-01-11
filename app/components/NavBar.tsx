"use client";

import { OpenEPILogo } from "@/app/icons/OpenEPILogo";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import {ExternalLinkIcon} from "@/app/icons/ExternalLinkIcon";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

export default function NavBar () {
  const currentRoute = usePathname();

  useEffect(() => {
    console.log("Route: ", currentRoute)
  }, [currentRoute]);

  return (
    <nav className="flex flex-row  items-center m-[48px] justify-between">
      <Box className="flex flex-row gap-[19px]" >
        <OpenEPILogo/>
        <Typography variant={'h1'}  className="text-[38px]">| Developer Portal</Typography>
      </Box>
      <Box className="flex flex-row text-[22px]">
        <Link href="/data-catalog" className={currentRoute === '/data-catalog/' ? "px-[24px] py-[8px] rounded-[40px] bg-[#D1E8D5]" : "px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]"}>Data catalog</Link>
        <Link href="/credentials" className={currentRoute === '/credentials/' ? "px-[24px] py-[8px] rounded-[40px] bg-[#D1E8D5]" : "px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]"}>Credentials</Link>
        <Link href="/resources" className={currentRoute === '/resources/' ? "px-[24px] py-[8px] rounded-[40px] bg-[#D1E8D5]" : "px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]"}>Resources</Link>
        <Link href="/contact" className={currentRoute === '/contact/' ? "px-[24px] py-[8px] rounded-[40px] bg-[#D1E8D5]" : "px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]"}>Contact</Link>
        <Link href="/" className="flex flex-row items-center gap-[6px] px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">About the project <ExternalLinkIcon/></Link>
      </Box>
    </nav>
  )
}
