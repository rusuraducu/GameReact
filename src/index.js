import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import GameCounter from './GameCounter';
import GameControllers from './GameControllers';
import GameResult from './GameResult';
import { Box, Flex, Card, Text } from 'theme-ui';
import Test from './Theme';
import { theme } from './CustomTheme.js';

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
