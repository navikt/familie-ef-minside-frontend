import { injectDecoratorServerSide } from '@navikt/nav-dekoratoren-moduler/ssr';
import logger from './logger';
import { miljø } from './miljø';
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

  let decoratorBreadcrumb: DecoratorBreadcrumb[] = [
    {
      url: miljø.minsideNav,
      title: 'Min side',
      handleInApp: false,
    },
    {
      url: '/minside',
      title: 'Min side - Enslig forsørger',
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
