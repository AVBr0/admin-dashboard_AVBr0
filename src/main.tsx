import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './global';
import baseTheme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
