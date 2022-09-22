import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, ThemeProvider } from '@mui/material';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#781026',
    },
    secondary: {
      main: '#f16861',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  // </BrowserRouter>
);

