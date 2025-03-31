import { NextFunction, Request, RequestHandler, Response } from 'express';
import { logWarn, logInfo } from './logger';
import { brukDevApi, isLocal, lokaltTokenxApi } from './miljø';
import { TexasClient } from './texas';
const { exchangeToken } = new TexasClient();

export type ApplicationName = 'familie-ef-soknad-api';

const AUTHORIZATION_HEADER = 'authorization';
const WONDERWALL_ID_TOKEN_HEADER = 'x-wonderwall-id-token';

const attachToken = (applicationName: ApplicationName): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const cluster = erProd() ? 'prod-gcp' : 'dev-gcp';
    const audience = `${cluster}:teamfamilie:${applicationName}`;

    try {
      req.headers[AUTHORIZATION_HEADER] =
        isLocal() && !brukDevApi()
          ? await getFakedingsToken(applicationName)
          : await getAccessToken(req, audience);
      req.headers[WONDERWALL_ID_TOKEN_HEADER] = '';
      next();
    } catch (error) {
      logWarn(`Noe gikk galt ved setting av token (${req.method} - ${req.path}): `, req, error);
      return res.status(401).send('En uventet feil oppstod. Ingen gyldig token');
    }
  };
};

const erProd = () => {
  return process.env.ENV === 'prod';
};

const harBearerToken = (authorization: string) => {
  return authorization.includes('Bearer ');
};

const utledToken = (req: Request, authorization: string | undefined) => {
  if (authorization && harBearerToken(authorization)) {
    return authorization.split(' ')[1];
  } else {
    throw Error('Mangler authorization i header');
  }
};

const getAccessToken = async (req: Request, audience: string) => {
  logInfo('PrepareSecuredRequest', req);
  if (isLocal()) {
    return `Bearer ${lokaltTokenxApi}`;
  }

  const { authorization } = req.headers;
  const token = utledToken(req, authorization);
  logInfo('IdPorten-token found: ' + (token.length > 1), req);
  const accessToken = await exchangeToken(token, audience).then(
    (accessToken) => accessToken.access_token
  );
  return `Bearer ${accessToken}`;
};

const getFakedingsToken = async (applicationName: string): Promise<string> => {
  const clientId = 'dev-gcp:teamfamilie:familie-ef-minside';
  const audience = `dev-gcp:teamfamilie:${applicationName}`;
  const url = `https://fakedings.intern.dev.nav.no/fake/tokenx?client_id=${clientId}&aud=${audience}&acr=Level4&pid=31458931375`;
  const token = await fetch(url).then(function (body) {
    return body.text();
  });
  return `Bearer ${token}`;
};

export default attachToken;
