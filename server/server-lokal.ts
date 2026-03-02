import express from 'express';
import cookieParser from 'cookie-parser';
import startServer from './server-felles.js';
import { createServer as createViteServer } from 'vite';

const app = express();
app.use(cookieParser());

const startLokalServer = async () => {
  if (process.env.NODE_ENV === 'development') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    startServer(app, vite);
  } else {
    startServer(app);
  }
};

startLokalServer();
