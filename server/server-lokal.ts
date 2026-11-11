import cookieParser from 'cookie-parser';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import startServer from './server-felles.js';

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
