import './App.css';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RoutesSite from './routes/RoutesSite';

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#E1BC22",
      dark: "#18458A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7E9DCC",
      main: "#6480AB",
      dark: "#475B7A",
      contrastText: "#747474",
    },
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <RoutesSite />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
