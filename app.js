// Init
// ==============================================================================

var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
var async   = require('async');
var queryString = require("querystring");

const a = require('./code/secret/access.js');
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

// Funtions
// ==============================================================================

app.get('/', function (req, res) {
    console.log("Sending requests");

    async.parallel([
        function(next) {
            const jiraurl = globals.jiraurl + '/project';
            console.log("JIRA request: " + jiraurl);

            request({
                url: jiraurl,
                headers: {
                    "Authorization": basicAuth(a.jirauser, a.jirapass)
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("JIRA projects request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("JIRA projects request: " + response.statusCode);
                    next(null, body);
                }
            });
        }, function(next) {
            const testrailurl = globals.testrailurl + '/get_projects';
            console.log("TestRail request: " + testrailurl);
            
            request({
                url: testrailurl,
                headers: {
                    "Authorization": basicAuth(a.testrailuser, a.testrailpass),
                    "Content-Type": "application/json"
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("TestRail projects request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("TestRail projects request: " + response.statusCode);
                    next(null, body);
                }
            });
    }], function(err, results) {
        if(results.length > 1){
            // construct the custom obj out of the 2 responses and set it as the context

            console.log("Attempting to render page");
            res.render('home', {
                context: mergeObjects(JSON.parse(results[0]), JSON.parse(results[1]))
            });
        }
  });
});

// HOW TO CONTINUE
// the config (1st) page now displays projects from JIRA and projects from TestRail, based on the raw reponse from their API calls
// NOW: the raw objects need to be massaged into a an object that contains JIRA name, JIRA key, TestRail id (name should be the same!!)
// that object should be used to populate select elements with the projects, after selection 1 and clicking OK, other api calls should
// be sent to populate elements that have not been added to the first page yet!

app.get('/test', function (req, res) {
    res.render(
        'template1', {
            context: globals.context,
            stringify: JSON.stringify(globals.context)
        });

    // this part will create an object out of the query string
    if (req.url.indexOf('?') >= 0) {
        qparams = queryString.parse(req.url.replace(/^.*\?/, ''));

        // do stuff
        console.log(qparams);
    }
});

app.listen(3000);


// Helpers
// ==============================================================================

function currentDate() {
    var dateFormat = require('dateformat');
    var now = new Date();
    //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return dateFormat(now, "yyyy-mm-dd");
}

function basicAuth(u, p) {
    var auth = "Basic " + new Buffer(u + ":" + p).toString("base64");
    //console.log(auth);
    return auth;
}

function mergeObjects(o1, o2) {
    return {
        jira: o1,
        testrail: o2
    };
}