import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode?'dark':'light';
  const theme = createTheme({
    palette:{
      mode: palleteType
    }
  })

  function handleThemeChange()
  {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
     <Header  darkmode = {darkMode} handleThemeChange = {handleThemeChange}/>
     <Container>
       <Catalog />
     </Container>
    </ThemeProvider>
  );
}
export default App;
