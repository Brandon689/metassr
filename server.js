import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
  
    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );
  
      // 2. Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);
  
      // 3. Load the server entry
      const { render } = await vite.ssrLoadModule('/server/entry-server.jsx');
  
      // 4. Render the app HTML
      const appHtml = await render(url);
  
      // 5. Inject the app-rendered HTML into the template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
  
      // 6. Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}

createServer();
