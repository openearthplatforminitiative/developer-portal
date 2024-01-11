import { OpenEPILogo } from "@/app/icons/OpenEPILogo";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";
import {ExternalLinkIcon} from "@/app/icons/ExternalLinkIcon";

export default function NavBar () {
  return (
    <nav className="flex flex-row  items-center m-[48px] justify-between">
      <Box className="flex flex-row gap-[19px]" >
        <OpenEPILogo/>
        <Typography variant={'h1'}  className="text-[38px]">| Developer Portal</Typography>
      </Box>
      <Box className="flex flex-row text-[22px] gap-[8px]">
        <Link href="/data-catalog" className="px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">Data catalog</Link>
        <Link href="/credentials" className="px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">Credentials</Link>
        <Link href="/resources" className="px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">Resources</Link>
        <Link href="/contact" className="px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">Contact</Link>
        <Link href="/" className="flex flex-row items-center gap-[6px] px-[24px] py-[8px] rounded-[40px] hover:bg-[#1D1B20] hover:bg-opacity-[0.08]">About the project <ExternalLinkIcon/></Link>
      </Box>
    </nav>
  )
}
