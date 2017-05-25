module.exports = {
    debug: debug,
    jiralabel: jiralabel,
    jiralabel_summay: jiralabel_summay,
    buglabel: buglabel,
    buglabel_summary: buglabel_summary,
    status_withcolour: status_withcolour,
    versions,
    versions,
    done: done,
    sort_by_status: sort_by_status,
    count_status: count_status,
    nonDoneStatusCountsArray: nonDoneStatusCountsArray,
    status_percent: status_percent,
    nonDoneStatusCount: nonDoneStatusCount,
    notDonePercent: notDonePercent,
    resolve_sprint: resolve_sprint,
    sumcounts: sumcounts,
    count: count,
    countSingleArr: countSingleArr,
    countall: countall,
    percent: percent,
    individualPercent: individualPercent,
    passed_percent: passed_percent,
    add: add,
    num: num,
    display: display,
    date: date,
    date_trail: date_trail,
    concatTwoArrays: concatTwoArrays,
    current_date: current_date
}

function debug(optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
}

// jira issue related helpers

function jiralabel(icon, type, key) {
    var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

    var icondiv = '<div id="myicon"><a href="#">' +
        iconimg +
        '</a></div>';

    return '<span title="' + type + '">[' + iconimg + ' ' + key + ']</span>';
}

function jiralabel_summay(icon, type, key, summary) {
    var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

    var icondiv = '<div id="myicon"><a href="#">' +
        iconimg +
        '</a></div>';

    return '<span title="' + type + '">[' + iconimg + ' ' + key + ']: ' + summary + '</span>';
}

function buglabel(icon, key) {
    var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

    return '<span title="Bug">[' + iconimg + ' ' + key + ']</span>';
}

function buglabel_summary(icon, key, summary, statusobj) {
    var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';
    var statusspan = '<span style="font-weight:bold;color:' + resolveColour(statusobj.statusCategory.colorName) + '">' + statusobj.name + '</span>';

    return '<span title="' + summary + '">[' + iconimg + ' ' + key + ' (' + statusspan + ')]</span>';
}

function status_withcolour(statusobj) {
    return '<span style="color:' + resolveColour(statusobj.statusCategory.colorName) + '">' + statusobj.name + '</span>';
}

function versions(arr) {
    if (arr.length > 0) {
        var tmp = '';
        for (var i = 0; i < arr.length; i++) {
            tmp += '<div>' + arr[i].name + '</div>';
        }

        return tmp;
    } else {
        return '-';
    }
}

function done(arr) {
    if (arr.length > 0) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].fields.status.name.toLowerCase() == "done")
                count++;
        }

        return count;
    } else {
        return "-";
    }
}

function sort_by_status(array) {
    return array.sort(compareStatus);
}

function count_status(arr, status) {
    var count = countStatus(arr, status);

    return count;
}

function nonDoneStatusCountsArray(arr) {
    var statuses = countAllStatuses(arr);

    return "[" +
        statuses.new + ", " +
        statuses.todo + ", " +
        statuses.reop + ", " +
        statuses.blocked + ", " +
        statuses.failed + ", " +
        statuses.progr + ", " +
        statuses.rfqa + ", " +
        statuses.inqa +
        "]";
}

function status_percent(arr, status) {
    var count = countStatus(arr, status);

    return ((count / arr.length) * 100).toFixed(1);
}

function nonDoneStatusCount(arr) {
    var statuses = countAllStatuses(arr);

    return statuses.new + statuses.todo + statuses.reop + statuses.blocked + statuses.failed + statuses.progr + statuses.rfqa + statuses.inqa;
}

function notDonePercent(arr) {
    var statuses = countAllStatuses(arr);
    var sum = statuses.new + statuses.todo + statuses.reop + statuses.blocked + statuses.failed + statuses.progr + statuses.rfqa + statuses.inqa;

    return ((sum / arr.length) * 100).toFixed(1);
}

function resolve_sprint(sprintarray, jkey) {
    if (sprintarray != null) {
        var tmp = '';
        for (var i = 0; i < sprintarray.length; i++) {
            tmp += '<div>' + getSprintValue(sprintarray[i], jkey) + '</div>';
        }

        return tmp;
    } else {
        return '-';
    }
}
// RETURNING THE DIVS MIGHT NEED TO BE CHANGED SO THE TEMPLATE SUPPLIES THE TAGS
// THE STRING WITHOUT THE TAGS MIGHT NEED TO BE USED FOR FILTERING!!!!

// test related helpers

function sumcounts(passed, blocked, untested, retest, failed, partialpass, nir) {
    var sum = parseInt(passed) + parseInt(blocked) + parseInt(untested) + parseInt(retest) + parseInt(failed) + parseInt(partialpass) + parseInt(nir);

    return sum;
}

function count(plans, runs, prop) {
    var sumcounts = countPropInArr(plans, prop) + countPropInArr(runs, prop);

    return sumcounts;
}

function countSingleArr(arr, prop) {
    var sumcount = countPropInArr(arr, prop);

    return sumcounts;
}

function countall(plans, runs) {
    var passc = countPropInArr(plans, "passed_count") + countPropInArr(runs, "passed_count");
    var failedc = countPropInArr(plans, "failed_count") + countPropInArr(runs, "failed_count");
    var blockedc = countPropInArr(plans, "blocked_count") + countPropInArr(runs, "blocked_count");
    var retestc = countPropInArr(plans, "retest_count") + countPropInArr(runs, "retest_count");
    var untestc = countPropInArr(plans, "untested_count") + countPropInArr(runs, "untested_count");
    var partialpc = countPropInArr(plans, "custom_status1_count") + countPropInArr(runs, "custom_status1_count");;
    var nirc = countPropInArr(plans, "custom_status2_count") + countPropInArr(runs, "custom_status2_count");;

    return passc + failedc + blockedc + retestc + untestc + partialpc + nirc;
}

function percent(plans, runs, prop) {
    var passc = countPropInArr(plans, "passed_count") + countPropInArr(runs, "passed_count");
    var failedc = countPropInArr(plans, "failed_count") + countPropInArr(runs, "failed_count");
    var blockedc = countPropInArr(plans, "blocked_count") + countPropInArr(runs, "blocked_count");
    var retestc = countPropInArr(plans, "retest_count") + countPropInArr(runs, "retest_count");
    var untestc = countPropInArr(plans, "untested_count") + countPropInArr(runs, "untested_count");
    var partialpc = countPropInArr(plans, "custom_status1_count") + countPropInArr(runs, "custom_status1_count");;
    var nirc = countPropInArr(plans, "custom_status2_count") + countPropInArr(runs, "custom_status2_count");;
    var myc = countPropInArr(plans, prop) + countPropInArr(runs, prop);

    return ((myc / (passc + failedc + blockedc + retestc + untestc + partialpc + nirc)) * 100).toFixed(1);
}

function individualPercent(arr, prop) {
    console.log(arr[1]);
    var passc = countPropInArr(arr, "passed_count");
    var failedc = countPropInArr(arr, "failed_count");
    var blockedc = countPropInArr(arr, "blocked_count");
    var retestc = countPropInArr(arr, "retest_count");
    var untestc = countPropInArr(arr, "untested_count");
    var myc = countPropInArr(arr, prop);

    return ((myc / (passc + failedc + blockedc + retestc + untestc)) * 100).toFixed(1);
}

function passed_percent(passed, blocked, untested, retest, failed, partialpass, nir) {
    var sum = parseInt(passed) + parseInt(blocked) + parseInt(untested) + parseInt(retest) + parseInt(failed) + parseInt(partialpass) + parseInt(nir);

    return ((parseInt(passed) / sum) * 100).toFixed(1);
}

// general helpers

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function num(tonum) {
    return parseInt(tonum);
}

function display(d) {
    if (d)
        return 'display="y"';
    else
        return 'display="n"';
}

function date(d) {
    var dateFormat = require('dateformat');
    //var mydate = new Date(d);
    //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return dateFormat(d, "yyyy-mm-dd HH:MM");
}

function date_trail(d) {
    var dateFormat = require('dateformat');
    var mydate = new Date(d * 1000);

    return dateFormat(mydate, "yyyy-mm-dd HH:MM");
}

function concatTwoArrays(a, b) {
    return a.concat(b);
}

function current_date() {
    var dateFormat = require('dateformat');
    var d = new Date();

    return dateFormat(d, "yyyy-mm-dd");
}




function countPropInArr(arr, prop) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count += arr[i][prop];
    }

    //console.log("count of " + prop + ": " + count);
    return count;
}

function countStatus(arr, status) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (getStatus(arr[i]) == status)
            counter++;
    }
    return counter;
}

function countAllStatuses(arr) {
    var statuses = {
        new: 0,
        todo: 0,
        reop: 0,
        blocked: 0,
        failed: 0,
        progr: 0,
        rfqa: 0,
        inqa: 0
    };

    for (var i = 0; i < arr.length; i++) {
        switch (getStatus(arr[i])) {
            case "new":
                statuses.new++;
                break;
            case "to do":
                statuses.todo++;
                break;
            case "reopened":
                statuses.reop++;
                break;
            case "blocked":
                statuses.blocked++;
                break;
            case "failed qa":
                statuses.failed++;
                break;
            case "in progress":
                statuses.progr++;
                break;
            case "ready for qa":
                statuses.rfqa++;
                break;
            case "in qa":
                statuses.inqa++;
                break;
            default:
                break;
        }
    }

    return statuses;
}

function compareStatus(a, b) {
    if (a.fields.status.name < b.fields.status.name)
        return -1;
    if (a.fields.status.name > b.fields.status.name)
        return 1;
    return 0;
}

function getStatus(obj) {
    return obj.fields.status.name.toLowerCase();
}

function getSprintValue(str, jkey) {
    var strarr = str.split(",");
    var keystr = "name=";

    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i].startsWith(keystr)) {
            return strarr[i].slice(keystr.length);
        }
    }
}

function resolveColour(c) {
    var colour = "";
    switch (c) {
        case "green":
            colour = "green";
            break;
        case "yellow":
            colour = "orange";
            break;
        case "blue-gray":
            colour = "DarkSlateGray";
            break;
        default:
            colour = "black";
    }

    return colour;
}