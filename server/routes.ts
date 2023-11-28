import { Router } from 'express';
import path from 'path';
import getHtmlWithDecorator from './decorator';
import logger from './logger';
import { addRequestInfo, doProxy } from './proxy';
import attachToken from './tokenProxy';
import { miljø } from './miljø';

const buildPath = path.resolve(process.cwd(), '../build');
const EF_BASE_PATH = '/familie/alene-med-barn';
const BASE_PATH = `${EF_BASE_PATH}/minside`;
const routes = (router: Router) => {
  router.get(`${BASE_PATH}/internal/isAlive|isReady`, (_req, res) =>
    res.sendStatus(200)
  );

  router.get(`/env`, (_req, res) => {
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

  router.use(
    `${BASE_PATH}/api`,
    addRequestInfo(),
    attachToken('familie-ef-soknad-api'),
    doProxy(miljø.apiUrl, `${BASE_PATH}/api`)
  );

  return router;
};

export default routes;
