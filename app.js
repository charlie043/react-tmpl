var express = require('express');
var path = require('path');

var app = express();

app.set('port', 8999);
app.set('views', path.join(__dirname, 'src/front/jsx/views/pre'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./src/server/api'));

app.use('/', function(req, res) {
  res.render('index', {title: 'template'});
});

var server = app.listen(app.get('port'), function() {
  console.log('runnning', server.address().port);
});
