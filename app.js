// Init
// ==============================================================================

var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
var async   = require('async');
var fs      = require('fs');
var queryString = require("query-string");

const a = require('./code/secret/access.js');
const globals = require('./code/globals.js');
const handlebarHelpers = require('./code/handlebar-helpers.js');
var hasOwnProperty = Object.prototype.hasOwnProperty;

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

// First page: Report template selection
app.get('/', function (req, res) {
    if (req.url.indexOf('?') >= 0) {

        var qparams = queryString.parse(req.url.replace(/^.*\?/, ''));
        console.log(qparams);

        if(typeof qparams.templateid != 'undefined') {
            initCalls(req, res, 'projects');
        }
        if(typeof qparams.jkey != 'undefined' && typeof qparams.tid != 'undefined') {
            allTheCalls(req, res, 'repoptions', qparams.jkey, qparams.tid);
        }
        else {
            res.render("errors/error-general");
        }

    } else {
        // without params, the project selection loads
        //initCalls(req, res, 'projects');

        // testing routing without params
        var mycontext = globals.templates;
        console.log(mycontext);

        res.render(
            globals.pages[1], {
            context: mycontext
        });
    }
});

// Second page: Project selection (JIRA and TestRail api calls to pop. tables)
app.get("/projects", function (req, res) {
    if (req.url.indexOf('?') >= 0) {
        var qparams = queryString.parse(req.url.replace(/^.*\?/, ''), {arrayFormat: 'bracket'});
        console.log(qparams);

        if(typeof qparams.templateid != 'undefined') {
            //initCalls(req, res, 'projects');

            switch (qparams.templateid) {
                case "0":
                    res.render("errors/error-general");
                case "1":
                    testCalls(req, res, globals.pages[2], qparams.templateid);
                    break;
                case "2": 
                    projectCalls(req, res, globals.pages[2], qparams.templateid);
                    break;
                case "3": 
                    projectAndTestCalls(req, res, globals.pages[2], qparams.templateid);
                    break;

                default: 
                    res.render("errors/error-noparams");
            }
        }
    } else {
        res.render();
    }
});

// Third page: Issues selection (JIRA and TestRail api calls to pop. tables)
app.get('/issues', function (req, res) {
    if (req.url.indexOf('?') >= 0) {

        var qparams = queryString.parse(req.url.replace(/^.*\?/, ''));
        console.log(qparams);

        if(typeof qparams.jkey != 'undefined' && typeof qparams.tid != 'undefined') {
            allTheCalls(req, res, globals.pages[3], qparams.jkey, qparams.tid, qparams.templateid);
        }
        else {
            res.render("errors/error-noparams");
        }

    } else {
        res.render("errors/error-general");
    }
});

// Fourth page: report generation based on the selected template
app.get('/report', function (req, res) {

    if (req.url.indexOf('?') >= 0) {
        var qparams = queryString.parse(req.url.replace(/^.*\?/, ''), {arrayFormat: 'bracket'});
        console.log(qparams);

        if(isEmpty(qparams) || isEmpty(contextsave)) {
            res.render('errors/error-nocontext');

        } else if(fs.existsSync('./views/report-templates/template' + qparams.templateid + globals.templateextension)) {
            var context = constructReportContext(qparams, contextsave);

            res.render(
            'report-templates/template' + qparams.templateid, {
                context: context,
                stringify: JSON.stringify(context)
            });
        } else {
            res.render("errors/error-notemplate");
        }
    } else {
        res.render("errors/error-general");
    }
});

app.listen(3000);

// Functions
// ==============================================================================

function projectCalls(req, res, pagetorender, templateid) {
    console.log("Sending initial request");

    const jiraurl = globals.jiraurl + '/project';
    console.log("JIRA request: " + jiraurl);

    const selectedtemplate = globals.templates[templateid];
    console.log("template selection: " + JSON.stringify(selectedtemplate));

    request({
        url: jiraurl,
        headers: {
            "Authorization": basicAuth(a.jirauser, a.jirapass)
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("JIRA projects request: 200");
            console.log("Attempting to render page");
            contextsave = passJiraObject(JSON.parse(response.body));

            res.render(pagetorender, {
                context: contextsave,
                reptemplate: selectedtemplate
            });
        }
        if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
            console.log("JIRA projects request: " + response.statusCode);
            res.render("errors/error-general");
        }
    });
}

function testCalls(req, res, pagetorender, templateid) {
    console.log("Sending initial request");

    const testrailurl = globals.testrailurl + '/get_projects';
    console.log("TestRail request: " + testrailurl);

    const selectedtemplate = globals.templates[templateid];
    console.log("template selection: " + JSON.stringify(selectedtemplate));
    
    request({
        url: testrailurl,
        headers: {
            "Authorization": basicAuth(a.testrailuser, a.testrailpass),
            "Content-Type": "application/json"
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("TestRail projects request: 200");
            console.log("Attempting to render page");
            contextsave = passTestRailObject(JSON.parse(response.body));

            res.render(pagetorender, {
                context: contextsave,
                reptemplate: selectedtemplate
            });
        }
        if (!error && ( response.statusCode == 400 || response.statusCode == 401 )) {
            console.log("TestRail projects request: " + response.statusCode);
            res.render("errors/error-general");
        }
    });
}

function projectAndTestCalls(req, res, pagetorender, templateid) {
    console.log("Sending initial requests");

    const selectedtemplate = globals.templates[templateid];
    console.log("template selection: " + JSON.stringify(selectedtemplate));

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
        },
        function(next) {
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
                context: contextsave,
                reptemplate: selectedtemplate
            });
        } else {
            res.render("errors/error-general");
        }
  });
}

function allTheCalls(req, res, pagetorender, jkey, tid, templateid) {
    console.log("Sending project requests");

    const selectedtemplate = globals.templates[templateid];
    console.log("template selection: " + JSON.stringify(selectedtemplate));

    async.parallel([
        function(next) {
            // JIRA Stories req ====================

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Story) ' + globals.jiraapiextension;
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

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Task) ' + globals.jiraapiextension;
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

            const jiraurl = globals.jiraurl + '/search?jql=project = ' + jkey + ' AND issuetype in (Bug) ' + globals.jiraapiextension;
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
                context: contextsave,
                reptemplate: selectedtemplate
            });
        } else {
            res.render("errors/error-general");
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

function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

function passJiraObject(o) {
    var retobj = {
        jiraprojects: o,
        testrailprojects: []
    };
    
    return retobj;
}

function passTestRailObject(o) {
    var retobj = {
        jiraprojects: {},
        testrailprojects: []
    };

    for(var i = 0; i < o.length; i++) {
        if(o[i].is_completed != true)
            retobj.testrailprojects.push(o[i])
    }
    
    return retobj;
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

function pushToArrFromContextWithJiraKey(retobjarr, newarr, savedarr) {
    for(var i = 0; i < newarr.length; i++) {
        for(var j = 0; j < savedarr.length; j++) {
            if(savedarr[j].key == newarr[i]){
                retobjarr.push(savedarr[j]);
            }
        }
    }
}

function pushToArrFromContextWithTestRailId(retobjarr, newarr, savedarr) {
    for(var i = 0; i < newarr.length; i++) {
        for(var j = 0; j < savedarr.length; j++) {
            if(savedarr[j].id == newarr[i]){
                retobjarr.push(savedarr[j]);
            }
        }
    }
}

function constructReportContext(qparams, savedcontext) {
    var retobj = {
        title: "",
        stories: [],
        tasks: [],
        bugs: [],
        testplans: [],
        testruns: []
    };

    retobj.title = qparams.title;

    if("st" in qparams && "stories" in savedcontext) {
        pushToArrFromContextWithJiraKey(retobj.stories, qparams.st, savedcontext.stories);
        console.log("stories ok");
    }
    if("ta" in qparams && "tasks" in savedcontext) {
        pushToArrFromContextWithJiraKey(retobj.tasks, qparams.ta, savedcontext.tasks);
        console.log("tasks ok");
    }
    if("bu" in qparams && "bugs" in savedcontext) {
        pushToArrFromContextWithJiraKey(retobj.bugs, qparams.bu, savedcontext.bugs);
        console.log("bugs ok");
    }
    if("tp" in qparams && "testplans" in savedcontext) {
        pushToArrFromContextWithTestRailId(retobj.testplans, qparams.tp, savedcontext.testplans);
        console.log("testplans ok");
    }
    if("tr" in qparams && "testruns" in savedcontext) {
        pushToArrFromContextWithTestRailId(retobj.testruns, qparams.tr, savedcontext.testruns);
        console.log("testruns ok");
    }

    return retobj;
}