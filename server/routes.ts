import express, { Router } from 'express';
import path from 'path';
import getHtmlWithDecorator from './decorator.js';
import logger from './logger.js';
import { addRequestInfo, doProxy } from './proxy.js';
import attachToken from './tokenProxy.js';
import { appEnv, miljø } from './miljø.js';
import type { ViteDevServer } from 'vite';

const erUtvikling = process.env.NODE_ENV === 'development';
const buildPath = path.join(process.cwd(), 'build');
const EF_BASE_PATH = '/familie/alene-med-barn';
const BASE_PATH = `${EF_BASE_PATH}/minside`;

export const apiRoutes = (router: Router) => {
  router.get([`${BASE_PATH}/internal/isAlive`, `${BASE_PATH}/internal/isReady`], (_req, res) => {
    res.sendStatus(200);
  });

  router.get(`${BASE_PATH}/env`, (_req, res) => {
    res.status(200).send(appEnv).end();
  });

  router.use(
    `${BASE_PATH}/dokument`,
    addRequestInfo(),
    attachToken('familie-ef-soknad-api'),
    doProxy(`${miljø.søknadApiProxyUrl}`)
  );

  router.use(
    `${BASE_PATH}/api`,
    addRequestInfo(),
    attachToken('familie-ef-soknad-api'),
    doProxy(`${miljø.søknadApiProxyUrl}`)
  );

  return router;
};

export const htmlRoutes = (router: Router, vite?: ViteDevServer) => {
  if (!erUtvikling) {
    router.use(`${BASE_PATH}`, express.static(buildPath, { index: false }));
  }

  router.use(async (req, res, next) => {
    const url = req.originalUrl;

    if (!url.startsWith(BASE_PATH)) {
      return next();
    }

    if (erUtvikling && (url.includes('.') || url.includes('@') || url.includes('node_modules'))) {
      return next();
    }

    try {
      if (erUtvikling && vite) {
        const indexHtmlPath = path.join(process.cwd(), 'index.html');
        const html = await getHtmlWithDecorator(indexHtmlPath);
        const transformedHtml = await vite.transformIndexHtml(BASE_PATH, html);
        res.send(transformedHtml);
      } else {
        const html = await getHtmlWithDecorator(path.join(buildPath, 'index.html'));
        res.send(html);
      }
    } catch (e) {
      logger.error(e);
      res.status(500).send(e);
    }
  });

  return router;
};
