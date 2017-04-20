// Init
// ==============================================================================

var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
var async   = require('async');
var queryString = require("query-string");

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

var contextsave = {};

// Routing
// ==============================================================================

app.get('/', function (req, res) {
    if (req.url.indexOf('?') >= 0) {
        // with (the right) params, the project options page loads

        qparams = queryString.parse(req.url.replace(/^.*\?/, ''));
        console.log(qparams);

        if(typeof qparams.jkey != 'undefined' && typeof qparams.tid != 'undefined') {
            
            projectCalls(req, res, 'repoptions', qparams.jkey, qparams.tid);

        }
        else {
            res.render("error");
        }

    } else {
        // without params, the project selection loads
        
        initCalls(req, res, 'projects');

    }
});

// HOW TO CONTINUE
// the config (1st) page now displays projects from JIRA and projects from TestRail, based on the raw reponse from their API calls
// NOW: the raw objects need to be massaged into a an object that contains JIRA name, JIRA key, TestRail id (name should be the same!!)
// that object should be used to populate select elements with the projects, after selection 1 and clicking OK, other api calls should
// be sent to populate elements that have not been added to the first page yet!

app.get('/template1', function (req, res) {
    res.render(
        'template1', {
            context: globals.context,
            stringify: JSON.stringify(globals.context)
        });

    // this part will create an object out of the query string
    if (req.url.indexOf('?') >= 0) {
        qparams = queryString.parse(req.url.replace(/^.*\?/, ''), {arrayFormat: 'bracket'});

        // do stuff
        console.log(qparams);
    }
});

app.get('/spinner', function (req, res) {
    res.render(
        'spinner');

    // this part will create an object out of the query string
    if (req.url.indexOf('?') >= 0) {
        qparams = queryString.parse(req.url.replace(/^.*\?/, ''));

        // do stuff
        console.log(qparams);
    }
});

app.listen(3000);

// Functions
// ==============================================================================

function initCalls(req, res, pagetorender) {
    console.log("Sending initial requests");

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
        if(results.length == 2){
            // construct the custom obj out of the 2 responses and set it as the context

            console.log("Attempting to render page");
            contextsave = mergeTwoObjects(JSON.parse(results[0]), JSON.parse(results[1]))

            res.render(pagetorender, {
                context: contextsave
            });
        } else {
            res.render("error");
        }
  });
}

function projectCalls(req, res, pagetorender, jkey, tid) {
    console.log("Sending project requests");

    async.parallel([
        function(next) {
            // JIRA Stories req ====================

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Story) order by key ASC&startAt=0&maxResults=1000&fields=issuetype,summary,status,description,issuelinks&fieldsByKeys=false';
            console.log("JIRA request: " + jiraurl);

            request({
                url: jiraurl,
                headers: {
                    "Authorization": basicAuth(a.jirauser, a.jirapass)
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("JIRA stories request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("JIRA stories request: " + response.statusCode);
                    next(null, body);
                }
            });
        }, function(next) {
            // JIRA Tasks req ====================

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Task) order by key ASC&startAt=0&maxResults=1000&fields=issuetype,summary,status,description,issuelinks&fieldsByKeys=false';
            console.log("JIRA request: " + jiraurl);

            request({
                url: jiraurl,
                headers: {
                    "Authorization": basicAuth(a.jirauser, a.jirapass)
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("JIRA tasks request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("JIRA tasks request: " + response.statusCode);
                    next(null, body);
                }
            });
        },function(next) {
            // JIRA Bugs req ====================

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Bug) order by key ASC&startAt=0&maxResults=1000&fields=issuetype,summary,status,description,issuelinks&fieldsByKeys=false';
            console.log("JIRA request: " + jiraurl);

            request({
                url: jiraurl,
                headers: {
                    "Authorization": basicAuth(a.jirauser, a.jirapass)
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("JIRA bugs request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("JIRA bugs request: " + response.statusCode);
                    next(null, body);
                }
            });
        },function(next) {
            // TestRail Plans req ====================

            const testrailurl = globals.testrailurl + '/get_plans/' + tid;
            console.log("TestRail request: " + testrailurl);
            
            request({
                url: testrailurl,
                headers: {
                    "Authorization": basicAuth(a.testrailuser, a.testrailpass),
                    "Content-Type": "application/json"
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("TestRail plans request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("TestRail plans request: " + response.statusCode);
                    next(null, body);
                }
            });
        },function(next) {
            // TestRail Runs req ====================

            const testrailurl = globals.testrailurl + '/get_runs/' + tid;
            console.log("TestRail request: " + testrailurl);
            
            request({
                url: testrailurl,
                headers: {
                    "Authorization": basicAuth(a.testrailuser, a.testrailpass),
                    "Content-Type": "application/json"
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log("TestRail runs request: 200");
                    next(null, body);
                }
                if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
                    console.log("TestRail runs request: " + response.statusCode);
                    next(null, body);
                }
            });
        }], function(err, results) {
        if(results.length == 5){
            // construct the custom obj out of the multiple responses and set it as the context

            console.log("Attempting to render page");
            contextsave = mergeFiveObjects(
                        JSON.parse(results[0]),
                        JSON.parse(results[1]),
                        JSON.parse(results[2]),
                        JSON.parse(results[3]),
                        JSON.parse(results[4])
                    );

            res.render(pagetorender, {
                context: contextsave
            });
        } else {
            res.render("error");
        }
  });
}


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

function mergeTwoObjects(o1, o2) {
    var retobj = {
        jiraprojects: o1,
        testrailprojects: []
    };

    for(var i = 0; i < o2.length; i++) {
        if(o2[i].is_completed != true)
            retobj.testrailprojects.push(o2[i])
    }
    
    return retobj;
}

function mergeFiveObjects(o1, o2, o3, o4, o5) {
    console.log("stories " + o1.total);
    console.log("tasks " + o2.total);
    console.log("bugs " + o3.total);
    console.log("plans " + o4.length);
    console.log("runs " + o5.length);

    var retobj = {
        stories: o1.issues,
        tasks: o2.issues,
        bugs: o3.issues,
        testplans: o4,
        testruns: o5
    };
    
    return retobj;
}