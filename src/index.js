import React , {Suspense}from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.output.css'
import ThemedSuspense from './components/ThemedSuspense'
import * as serviceWorker from './serviceWorker'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: deepPurple,
    secondary: {
      main: '#5e35b1',
    },
  },
});



ReactDOM.render(
  <Suspense fallback={<ThemedSuspense />}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
