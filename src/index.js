import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemeProvider } from 'theme-ui';
import { theme } from './style/CustomTheme.js';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  </StrictMode>
);
