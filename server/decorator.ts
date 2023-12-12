import { injectDecoratorServerSide } from '@navikt/nav-dekoratoren-moduler/ssr/index.js';
import logger from './logger.js';
import { miljø } from './miljø.js';
type NaisEnv = 'prod' | 'dev';

type DecoratorBreadcrumb = {
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

  const decoratorBreadcrumb: DecoratorBreadcrumb[] = [
    {
      url: miljø.minSideUrl,
      title: 'Min side',
      handleInApp: false,
    },
    {
      url: '/minside',
      title: 'Dine stønader til enslig mor eller far',
      handleInApp: false,
    },
  ];

  const dekoratørConfig = {
    env: env === 'localhost' ? 'dev' : (env as NaisEnv),
    filePath: filePath,
    params: {
      simple: false,
      enforceLogin: false,
      redirectToApp: true,
      level: 'Level4',
      breadcrumbs: decoratorBreadcrumb,
    },
  };

  return injectDecoratorServerSide(dekoratørConfig);
};

export default getHtmlWithDecorator;
