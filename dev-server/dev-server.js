import Webpack from 'webpack';

import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from '../config/webpack.run.js';

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(webpackConfig.devServer, compiler);

server.startCallback(() => {
  console.log(
    `Successfully started minside server on http://localhost:3000${process.env.PUBLIC_URL}`
  );
});
