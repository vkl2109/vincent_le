import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { ScrollContextProvider } from './Context/ScrollContextProvider.jsx';

import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" withGlobalStyles withNormalizeCSS>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </MantineProvider>
  </React.StrictMode>,
)
