import express, { Router } from 'express';
import path from 'path';
import getHtmlWithDecorator from './decorator.js';
import logger from './logger.js';
import { addRequestInfo, doProxy } from './proxy.js';
import attachToken from './tokenProxy.js';
import { miljø } from './miljø.js';

const buildPath =
  process.env.NODE_ENV !== 'development'
    ? path.join(process.cwd(), 'build')
    : path.join(process.cwd(), 'dev-build');
const EF_BASE_PATH = '/familie/alene-med-barn';
const BASE_PATH = `${EF_BASE_PATH}/minside`;
const routes = (router: Router) => {
  router.get(`${BASE_PATH}/internal/isAlive|isReady`, (_req, res) =>
    res.sendStatus(200)
  );

  router.get(`${BASE_PATH}/env`, (_req, res) => {
    res
      .status(200)
      .send({
        endringsmeldingUrl: miljø.endringsmeldingUrl,
        ettersendingUrl: miljø.ettersendingUrl,
        søknadOvergangsstønadUrl: miljø.søknadOvergangsstønadUrl,
        søknadBarnetilsynUrl: miljø.søknadBarnetilsynUrl,
        søknadSkolepengerUrl: miljø.søknadSkolepengerUrl,
        infoSideOvergangsstønadUrl: miljø.infoSideOvergangsstønadUrl,
        infoSideBarnetilsynUrl: miljø.infoSideBarnetilsynUrl,
        infoSideSkolepengerUrl: miljø.infoSideSkolepengerUrl,
        saksbehandlingstiderUrl: miljø.saksbehandlingstiderUrl,
      })
      .end();
  });

  router.use(
    `/dokument`,
    addRequestInfo(),
    attachToken('familie-ef-soknad-api'),
    doProxy(`${miljø.søknadApiProxyUrl}/dokument`, `/dokument`)
  );

  router.use(
    `${BASE_PATH}/api`,
    addRequestInfo(),
    attachToken('familie-ef-soknad-api'),
    doProxy(miljø.søknadApiProxyUrl, `${BASE_PATH}/api`)
  );

  router.use(`${BASE_PATH}`, express.static(buildPath, { index: false }));

  router.use(/^(?!.*\/(internal|static|api)\/).*$/, (_req, res) => {
    getHtmlWithDecorator(path.join(buildPath, 'index.html'))
      .then((html) => {
        res.send(html);
      })
      .catch((e) => {
        logger.error(e);
        res.status(500).send(e);
      });
  });

  return router;
};

export default routes;
