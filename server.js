import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const port = 3000;
const webpackConfig = config;
const publicPath = webpackConfig.output.publicPath;
const compiler = webpack(webpackConfig);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  publicPath: publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port);
