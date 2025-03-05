import { injectDecoratorServerSide } from '@navikt/nav-dekoratoren-moduler/ssr/index.js';
import logger from './logger.js';
import { defaultBreadcrumbs } from './miljø';
type NaisEnv = 'prod' | 'dev';

export type DecoratorBreadcrumb = {
  url: string;
  title: string;
  analyticsTitle?: string;
  handleInApp?: boolean;
};

const getHtmlWithDecorator = (filePath: string) => {
  const env = process.env.ENV;
  if (env === undefined) {
    logger.error('Mangler miljø for dekoratøren');
    throw Error('Miljø kan ikke være undefined');
  }

  const dekoratørConfig = {
    env: env === 'localhost' ? 'dev' : (env as NaisEnv),
    filePath: filePath,
    params: {
      simple: false,
      enforceLogin: false,
      redirectToApp: true,
      level: 'Level4',
      breadcrumbs: defaultBreadcrumbs,
      chatbot: true,
    },
  };

  return injectDecoratorServerSide(dekoratørConfig);
};

export default getHtmlWithDecorator;
