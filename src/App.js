import { createTheme, ThemeProvider } from '@mui/material';
import Routes from './routes';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#1976d2'
        
      },
      secondary: {
        main: '#424242',
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Routes/>

    </ThemeProvider>

  );
}

export default App;
