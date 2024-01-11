import { OpenEPILogo } from "@/app/icons/OpenEPILogo";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";

export default function NavBar () {
  return (
    <nav className="flex flex-row  items-center m-[48px] justify-between">
      <Box className="flex flex-row gap-[19px]" >
        <OpenEPILogo/>
        <Typography variant={'h1'}  className="text-[38px]">| Developer Portal</Typography>
      </Box>
      <Box className="flex flex-row text-[22px] gap-[8px]">
        <Link href="/data-catalog" className=" px-[24px] py-[8px]">Data catalog</Link>
        <Link href="/credentials" className=" px-[24px] py-[8px]">Credentials</Link>
        <Link href="/resources" className=" px-[24px] py-[8px]">Resources</Link>
        <Link href="/contact" className=" px-[24px] py-[8px]">Contact</Link>
        <Link href="/" className=" px-[24px] py-[8px]">About the project</Link>
      </Box>
    </nav>
  )
}
