// Connect to webpack
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

// Connect to express
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
//
// // Connect to Mongoose
// mongoose.connect('mongodb://localhost/');
// var db = mongoose.connection;



// var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + '/index.html')
// })

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
