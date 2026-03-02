import express, { Express } from 'express';
import { apiRoutes, htmlRoutes } from './routes.js';
import { cspString } from './csp.js';
import { miljø } from './miljø.js';
import type { ViteDevServer } from 'vite';

const startServer = (app: Express, vite?: ViteDevServer) => {
  app.use((_req, res, next) => {
    res.header('Content-Security-Policy', cspString());
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    next();
  });

  app.use('/', apiRoutes(express.Router()));

  if (vite) {
    app.use(vite.middlewares);
  }

  app.use('/', htmlRoutes(express.Router(), vite));

  app.listen(miljø.port, '0.0.0.0', () => {
    console.log(`server startet på port ${miljø.port}.`);
  });
};
export default startServer;
