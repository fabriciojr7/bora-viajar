import { createTheme, ThemeProvider } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import Routes from './routes';
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
