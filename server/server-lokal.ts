import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import cookieParser from 'cookie-parser';
// @ts-ignore
import config from '../../config/webpack.run.js';
import startServer from './server-felles.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
    index: false,
  });

  app.use(middleware);
  app.use(cookieParser());
  app.use(webpackHotMiddleware(compiler));
}

startServer(app);
