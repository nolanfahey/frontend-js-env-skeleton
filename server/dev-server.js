import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev.js';
import express from 'express';
import { join } from 'path';
import open from 'open';

const port = 8001;
const app = express();
const compiler = webpack(config);

app.use(
  WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.sendFile(join(__dirname, '../client/src/app/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
