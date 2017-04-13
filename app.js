var express = require('express');
var exphbs  = require('express-handlebars');
const globals = require('./code/globals.js'); // context from this really should come from api calls
const handlebarHelpers = require('./code/handlebar-helpers.js');

var app = express();

app.engine('handlebars', exphbs({
                                defaultLayout: 'main',
                                helpers: handlebarHelpers
                            }));

app.set('view engine', 'handlebars');

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home', globals.context);
});

app.listen(3000);