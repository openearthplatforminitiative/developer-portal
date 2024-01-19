import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';

export default function Home() {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>
          Get your credentials, start developing
        </Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      <Box className={'flex flex-col gap-44 mb-96'}>
        <Box>
          <Typography className={'text-4xl mb-8'}>
            1. Create user account
          </Typography>
          <Typography className={'text-base'}>
            Begin your journey by creating a user account. This will be your
            gateway to a world of data-driven possibilities. Click the
            &quot;Sign Up&quot; button, fill in your details, and voila!
            You&apos;re one step closer to unlocking the full potential of our
            platform.
          </Typography>
        </Box>
        <Box>
          <Typography className={'text-4xl'}>2. Second step</Typography>
          <TableContainer className={'mt-20'}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={'text-sm font-bold'}>Method</TableCell>
                  <TableCell className={'text-sm font-bold'}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={'text-base'}>GET</TableCell>
                  <TableCell className={'text-base'}>
                    Retrieve resources
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={'text-base'}>POST</TableCell>
                  <TableCell className={'text-base'}>
                    Create resources
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={'text-base'}>PUT</TableCell>
                  <TableCell className={'text-base'}>
                    Changes and/or replaces resources or collections
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={'text-base'}>DELETE</TableCell>
                  <TableCell className={'text-base'}>
                    Delete resources
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography className={'text-4xl'}>
            3. Third and final step
          </Typography>
          <Typography className={'mt-20 text-base'}>
            Code example coming soon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
