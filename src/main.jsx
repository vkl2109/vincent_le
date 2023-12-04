import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import './fonts/fonts.css'
import { ScrollContextProvider } from './Context/ScrollContextProvider.jsx';

import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'brutalist',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" withGlobalStyles withNormalizeCSS theme={theme}>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </MantineProvider>
  </React.StrictMode>,
)
