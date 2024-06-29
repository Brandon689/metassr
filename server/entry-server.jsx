import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import App from '../src/App'

export function render(url, context) {
  const cache = createCache({ key: 'css' })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </CacheProvider>
  )

  const chunks = extractCriticalToChunks(html)
  const styles = constructStyleTagsFromChunks(chunks)

  return { html, styles }
}
