var logger = require('morgan');

var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

var nunjucksEnv = nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: app,
  tags: {
    blockStart: '<%',
    blockEnd: '%>',
    variableStart: '<$',
    variableEnd: '$>',
    commentStart: '<#',
    commentEnd: '#>'
  }
});

app.use(express.static(__dirname+'/../client/'));
app.use(express.static(__dirname+'/../client/dist/'));
app.use(express.bodyParser());
app.use(express.cookieParser());

var port = process.env.EXPRESS_PORT || 8080;
var server = app.listen(port);

console.log('Listening on http://127.0.0.1:' + port);


app.get('/' , function( req, res) {

  res.render('animate-message.html');

});

