import { OpenEPILogo } from "@/app/icons/OpenEPILogo";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";

export default function NavBar () {
  return (
    <nav className="flex flex-row gap-[19px] items-center m-[48px] justify-between">
      <Box className="flex flex-row">
        <OpenEPILogo/>
        <Typography variant={'h1'}  className="text-[38px]">| Developer Portal</Typography>
      </Box>
      <Box className="flex flex-row text-[22px]">
        <Link href="/data-catalog">Data catalog</Link>
        <Link href="/credentials">Credentials</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/contact">Contact</Link>

      </Box>
    </nav>
  )
}
