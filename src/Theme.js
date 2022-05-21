/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import React from 'react';
import { Grid } from 'theme-ui';
import { Box, Flex, Card, Text } from 'theme-ui';
import { Button } from 'theme-ui';

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'red',
    background: 'black',
    primary: '#33e',
  },

  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
};

function Test() {
  return (
    <ThemeProvider theme={theme}>
      ----------
      <Flex p={1} sx={{ border: '1px solid grey' }}>
        <Button mr={2} sx={{ cursor: 'pointer' }}>
          Click Me!
        </Button>
        <Card
          sx={{
            maxWidth: 256,
          }}
        >
          <Text>Card</Text>
        </Card>
      </Flex>
    </ThemeProvider>
  );
}

export default Test;
