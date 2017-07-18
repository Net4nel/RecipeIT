if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const serverConfig = require('./.config');
const PORT = process.env.PORT || serverConfig.PORT[process.env.NODE_ENV] || 3000;
const apiRoutes = require('./api/api.js');
const cors = require('cors');

// Connect to webpack
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

// Connect to express
var express = require('express');
var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(cors()); // allow cross-origin requests

app.use('/api', apiRoutes);

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT);
  }
});
