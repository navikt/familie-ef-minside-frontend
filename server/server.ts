import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { cspString } from './csp.js';

const app = express();
// @ts-ignore
import config from '../../config/webpack.run.js';
import { miljø } from './miljø.js';
import { logInfo } from './logger';

app.use((_req, res, next) => {
  res.header('Content-Security-Policy', cspString());
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  next();
});

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  });

  app.use(middleware);
  app.use(cookieParser());
  app.use(webpackHotMiddleware(compiler));
}

app.use('/', routes(express.Router()));

app.listen(miljø.port, '0.0.0.0', () => {
  console.log(`server startet på port ${miljø.port}.`);
});
