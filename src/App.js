import { createTheme, ThemeProvider } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import Home from './pages/home';

// const useStyles = makeStyles({
//   root: {
//     background: 'purple',
//     minHeight: '100vh'
//   }
// })

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#bbdefb',
        dark: '#1976d2'
      },
      secondary: {
        main: '#424242',
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}

export default App;
