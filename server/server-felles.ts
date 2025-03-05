import express, { Express } from 'express';
import routes from './routes.js';
import { cspString } from './csp.js';
import { miljø } from './miljø';

const startServer = (app: Express) => {
  app.use((_req, res, next) => {
    res.header('Content-Security-Policy', cspString());
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    next();
  });

  app.use('/', routes(express.Router()));

  app.listen(miljø.port, '0.0.0.0', () => {
    console.log(`server startet på port ${miljø.port}.`);
  });
};
export default startServer;
