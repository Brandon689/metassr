// server/entry-server.jsx
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import App from '../src/App'

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json()
}

export async function render(url, context) {
  const cache = createCache({ key: 'css' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const queryClient = new QueryClient()

  // Prefetch todos data if on the todos page
  if (url === '/todos') {
    await queryClient.prefetchQuery({
      queryKey: ['todos'],
      queryFn: fetchTodos
    })
  }

  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </QueryClientProvider>
    </CacheProvider>
  )

  const chunks = extractCriticalToChunks(html)
  const styles = constructStyleTagsFromChunks(chunks)

  // Dehydrate the query cache
  const dehydratedState = JSON.stringify(queryClient.getQueryData())

  return { html, styles, dehydratedState }
}
