var express = require('express');
var exphbs  = require('express-handlebars');
var queryString = require("querystring");

const access = require('./code/access.js');
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
    res.render(
        'home',
        {
            context: globals.context,
            stringify: JSON.stringify(globals.context)
        }
    );

    // this part will create an object out of the query string
    if (req.url.indexOf('?') >= 0) {
        qparams = queryString.parse(req.url.replace(/^.*\?/, ''));

        // do stuff
        console.log(qparams);
    }
});

app.listen(3000);