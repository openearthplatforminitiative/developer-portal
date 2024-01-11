import { createTheme } from "@mui/material/styles";
import { typography } from "@/app/theme/typography";
import { palettes } from "@/app/theme/palettes";

const theme = createTheme({
  palette: palettes,
  typography: typography,
});

export default theme;
