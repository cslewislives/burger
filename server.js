var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 1313;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controllers');

app.use(routes);

app.listen(PORT, function () {
console.log('App now listening at localhost:' + PORT);
});