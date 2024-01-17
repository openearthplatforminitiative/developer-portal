import { createTheme } from '@mui/material/styles';
import { typography } from '@/app/theme/typography';

const theme = createTheme({
  typography: typography,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: '#E1E3DE',
          '&:hover': {
            background: '#E1E3DE',
          },
          '&.Mui-focused': {
            backgroundColor: '#E1E3DE',
          },
        },
      },
    },
  },
});

export default theme;
