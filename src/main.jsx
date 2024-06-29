// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={window.__TANSTACK_QUERY_STATE__}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Hydrate>
    </QueryClientProvider>
  </React.StrictMode>
)
