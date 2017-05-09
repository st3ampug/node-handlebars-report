// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Issues selection";

const JIRASTORIESID = "jirastories";
const JIRATASKSID = "jiratasks";
const JIRABUGSID = "jirabugs";
const TESTRAILPLANSID = "testrailplans";
const TESTRAILRUNSID = "testrailruns";
const REPORTTITLEID = "reporttitle";
const STORYROWCLASS = "storyrow";
const SELECTEDSTORIESID = "selectedstories";
const TASKROWCLASS = "taskrow";
const SELECTEDTASKSID = "selectedtasks";
const BUGROWCLASS = "bugrow";
const SELECTEDBUGSID = "selectedbugs";
const TESTPLANSTABLEID = "testplanstable";
const TESTPLANROWCLASS = "testplanrow";
const SELECTEDTESTPLANSID = "selectedtestplans";
const TESTRUNSTABLEID = "testrunstable";
const TESTRUNROWCLASS = "testrunrow";
const SELECTEDTESTRUNSID = "selectedtestruns";
const SELECTIONSUBMITID = "selecitonsubmit";
const BUTTONROWID = "button-row";
const BUTTONOVERLAYID = "button-overlay";

const SELECTED          = "selected";
const NOTSELECTED       = "no";

var reporttitle = document.getElementById(REPORTTITLEID);
var storiestable = document.getElementById(GLOBALS.tableIDs.storiesTableID);
var storyrows = document.getElementsByClassName(STORYROWCLASS);
var taskstable = document.getElementById(GLOBALS.tableIDs.tasksTableID);
var taskrows = document.getElementsByClassName(TASKROWCLASS);
var bugstable = document.getElementById(GLOBALS.tableIDs.bugsTableID);
var bugrows = document.getElementsByClassName(BUGROWCLASS);
var testplanstable = document.getElementById(GLOBALS.tableIDs.testplansTableID);
var testplanrows = document.getElementsByClassName(TESTPLANROWCLASS);
var testrunstable = document.getElementById(GLOBALS.tableIDs.testrunsTableID);
var testrunrows = document.getElementsByClassName(TESTRUNROWCLASS);

var selectionsubmit = document.getElementById(SELECTIONSUBMITID);

var storyversionfilter = document.getElementById(GLOBALS.filterIDs.storyVersion);
var storystatusfilter = document.getElementById(GLOBALS.filterIDs.storyStatus);
var storysprintfilter = document.getElementById(GLOBALS.filterIDs.storySprint);
var taskversionfilter = document.getElementById(GLOBALS.filterIDs.taskVersion);
var taskstatusfilter = document.getElementById(GLOBALS.filterIDs.taskStatus);
var tasksprintfilter = document.getElementById(GLOBALS.filterIDs.taskSprint);
var bugversionfilter = document.getElementById(GLOBALS.filterIDs.bugVersion);
var bugstatusfilter = document.getElementById(GLOBALS.filterIDs.bugStatus);
var bugsprintfilter = document.getElementById(GLOBALS.filterIDs.bugSprint);
var testplansfilter = document.getElementById(GLOBALS.filterIDs.tplanSearch);
var testrunsfilter = document.getElementById(GLOBALS.filterIDs.trunSearch);


var selections = {
    templateid: "",
    storyselection: [],
    taskselection: [],
    bugselection: [],
    testplanselection: [],
    testrunselection: []
}

// =====================================================================================

// Page load ===========================================================================

window.addEventListener('load', function(){
    console.log("onload");

    // INIT =============================================

    SharedFunctions.changePageTitle(PAGETITLE);
    setTemplateId();

    SharedFunctions.NavBar.setNavBarElements(
        SharedFunctions.currentUrlWithPort(),
        SharedFunctions.currentUrlWithPort() + GLOBALS.PROJECTSELECTIONPAGE + "?" + "templateid=" + SharedFunctions.getUrlParameter("templateid"),
        window.location
    );

    SharedFunctions.setDisplayForRow(JIRASTORIESID);
    SharedFunctions.setDisplayForRow(JIRATASKSID);
    SharedFunctions.setDisplayForRow(JIRABUGSID);
    SharedFunctions.setDisplayForRow(TESTRAILPLANSID);
    SharedFunctions.setDisplayForRow(TESTRAILRUNSID);

    SharedFunctions.initDataTableCustom(GLOBALS.tableIDs.storiesTableID, 550);
    SharedFunctions.initDataTableCustom(GLOBALS.tableIDs.tasksTableID, 550);
    SharedFunctions.initDataTableCustom(GLOBALS.tableIDs.bugsTableID, 550);
    SharedFunctions.initDataTableCustom(GLOBALS.tableIDs.testplansTableID, 350);
    SharedFunctions.initDataTableCustom(GLOBALS.tableIDs.testrunsTableID, 350);

    SharedFunctions.Init.initDatePicker(GLOBALS.filterIDs.Story.storyStartDate);
    SharedFunctions.Init.initDatePicker(GLOBALS.filterIDs.Story.storyEndDate);

    SharedFunctions.elementDisplayNone(BUTTONOVERLAYID);
    SharedFunctions.buttonDisabledSkeleton(SELECTIONSUBMITID);

    // element states ===================================
    

    // LISTENERS =======================================

    $("#" + GLOBALS.navIDs.templateSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });
    $("#" + GLOBALS.navIDs.projectSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });
    $("#" + GLOBALS.navIDs.issueSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });

    $("#" + GLOBALS.filterIDs.Story.storyCollapse).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Story.storyExpanded);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Story.storyCollapsed);
    });
      $("#" + GLOBALS.filterIDs.Story.storyExpand).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Story.storyCollapsed);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Story.storyExpanded);
    });

    $("#" + GLOBALS.filterIDs.Task.taskCollapse).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Task.taskExpanded);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Task.taskCollapsed);
    });
      $("#" + GLOBALS.filterIDs.Task.taskExpand).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Task.taskCollapsed);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Task.taskExpanded);
    });

    $("#" + GLOBALS.filterIDs.Bug.bugCollapse).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Bug.bugExpanded);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Bug.bugCollapsed);
    });
      $("#" + GLOBALS.filterIDs.Bug.bugExpand).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.Bug.bugCollapsed);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.Bug.bugExpanded);
    });

    $("#" + GLOBALS.filterIDs.TPlan.tplanCollapse).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.TPlan.tplanExpanded);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.TPlan.tplanCollapsed);
    });
      $("#" + GLOBALS.filterIDs.TPlan.tplanExpand).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.TPlan.tplanCollapsed);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.TPlan.tplanExpanded);
    });

    $("#" + GLOBALS.filterIDs.TRun.trunCollapse).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.TRun.trunExpanded);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.TRun.trunCollapsed);
    });
      $("#" + GLOBALS.filterIDs.TRun.trunExpand).click(function (ev) {
        SharedFunctions.Display.jqueryHide(GLOBALS.filterIDs.TRun.trunCollapsed);
        SharedFunctions.Display.jqueryShow(GLOBALS.filterIDs.TRun.trunExpanded);
    });

    storiestable.addEventListener("click", function(ev) {
        tableEventListener(ev, SELECTEDSTORIESID, selections.storyselection, STORYROWCLASS);
    });

    taskstable.addEventListener("click", function(ev) {
        tableEventListener(ev, SELECTEDTASKSID, selections.taskselection, TASKROWCLASS);
    });

    bugstable.addEventListener("click", function(ev) {
        tableEventListener(ev, SELECTEDBUGSID, selections.bugselection, BUGROWCLASS);
    });

    testplanstable.addEventListener("click", function(ev) {
        tableEventListener(ev, SELECTEDTESTPLANSID, selections.testplanselection, TESTPLANROWCLASS);
    });

    testrunstable.addEventListener("click", function(ev) {
        tableEventListener(ev, SELECTEDTESTRUNSID, selections.testrunselection, TESTRUNROWCLASS);
    });

    selectionsubmit.addEventListener("click", function(ev) {
        // SharedFunctions.buttonDisabledSkeleton(SELECTIONSUBMITID);
        // SharedFunctions.elementDisplayNone(BUTTONROWID);
        // SharedFunctions.elementDisplayBlock(BUTTONOVERLAYID);

        SharedFunctions.buttonDisabledSkeletonDelay(SELECTIONSUBMITID, 5000);

        // submit selection
        submitSelectionInfo(GLOBALS.REPORTPAGE, selections, reporttitle.value);
    });

    $("#" + GLOBALS.filterIDs.Story.storyStartDate).change(function(ev) {
        if(!SharedFunctions.Validation.startDateInputFromDatePicker(GLOBALS.filterIDs.Story.storyStartDate, GLOBALS.filterIDs.Story.storyEndDate)) {
            $(this).val(GLOBALS.EMPTY);
            SharedFunctions.ErrorDisplay.errorMsg(GLOBALS.errorMessages.startdateEarlier, GLOBALS.ERRORDELAY);
        }
    });
    $("#" + GLOBALS.filterIDs.Story.storyEndDate).change(function(ev) {
        if(!SharedFunctions.Validation.endDateInputFromDatePicker(GLOBALS.filterIDs.Story.storyStartDate, GLOBALS.filterIDs.Story.storyEndDate)) {
            $(this).val(GLOBALS.EMPTY);
            SharedFunctions.ErrorDisplay.errorMsg(GLOBALS.errorMessages.enddateLater, GLOBALS.ERRORDELAY);
        }
    });

    $("#" + GLOBALS.filterIDs.Story.storySprint).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.storiesTableID, 4);
    });
    $("#" + GLOBALS.filterIDs.Story.storyVersion).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.storiesTableID, 5);
    });
    $("#" + GLOBALS.filterIDs.Story.storyStatus).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.storiesTableID, 6);
    });

    $("#" + GLOBALS.filterIDs.Task.taskSprint).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.tasksTableID, 4);
    });
    $("#" + GLOBALS.filterIDs.Task.taskVersion).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.tasksTableID, 5);
    });
    $("#" + GLOBALS.filterIDs.Task.taskStatus).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.tasksTableID, 6);
    });

    $("#" + GLOBALS.filterIDs.Bug.bugSprint).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.bugsTableID, 4);
    });
    $("#" + GLOBALS.filterIDs.Bug.bugVersion).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.bugsTableID, 5);
    });
    $("#" + GLOBALS.filterIDs.Bug.bugStatus).change(function(ev) {
        var selected = $(ev.target).children().filter(":selected");
        DataFiltering.selectFilter(selected, GLOBALS.tableIDs.bugsTableID, 6);
    });

    testplansfilter.addEventListener("keyup", function(ev) {
        DataFiltering.filterVersion(GLOBALS.filterIDs.tplanSearch, GLOBALS.tableIDs.testplansTableID, 1);
    });
    testrunsfilter.addEventListener("keyup", function(ev) {
        DataFiltering.filterVersion(GLOBALS.filterIDs.trunSearch, GLOBALS.tableIDs.testrunsTableID, 1);
    });
});

// =====================================================================================

// Helpers =============================================================================

function setTemplateId() {
    selections.templateid = SharedFunctions.getUrlParameter("templateid");
}

function highlightRow(id) {
    var row = document.getElementById(id);
    if(row.getAttribute(SELECTED) != SELECTED)
        row.setAttribute(SELECTED, SELECTED);
    else
        row.setAttribute(SELECTED, NOTSELECTED);
}

function amendSelection(container, selection) {
    var row = document.getElementById(selection);
    if(row.getAttribute(SELECTED) != SELECTED) {
        for(var i = 0; i < container.length; i++) {
            if(container[i] == selection)
                container.splice(i, 1);
        }
    } else {
        container.push(selection);
    }
}

function displaySelection(id, container){
    var tmp = "";
    for(var i = 0; i < container.length; i++) {
        tmp += "<span class='mylabel'>" + container[i] + "</span>"
    }

    $("#" + id).html(tmp);
}

function tableEventListener(ev, selectedcontainerid, selectionarray, rowclass) {
    console.log(ev.currentTarget);

    if(ev.target.tagName.toLowerCase() == "td") {
        console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

        if(ev.shiftKey && selectionarray.length > 0) {
            shiftModifier(ev, selectionarray, rowclass);
        } else {
            highlightRow(ev.target.parentNode.id);
            amendSelection(selectionarray, ev.target.parentNode.id);
        }

        displaySelection(selectedcontainerid, selectionarray);

    }
    if(ev.target.tagName.toLowerCase() == "tr") {
        console.log(ev.target.id);
    }

    checkSelectionArrays();
}

function shiftModifier(ev, selectionarray, rowclass) {
    var rows = document.getElementsByClassName(rowclass);
    var lastselectedpassed = false;
    var needtochangeids = [];

    for(var i = 0; i < rows.length; i++) {
        if(lastselectedpassed) {
            needtochangeids.push(rows[i].getAttribute("id"));
        }
        if(rows[i].getAttribute("id") == selectionarray[selectionarray.length-1]) {
            lastselectedpassed = true;
        }
        if(rows[i].getAttribute("id") == ev.target.parentNode.id) {
            lastselectedpassed = false;
        }
    }

    if(needtochangeids.length > 0) {
        for(var j = 0; j < needtochangeids.length; j++) {
            highlightRow(needtochangeids[j]);
            amendSelection(selectionarray, needtochangeids[j]);
        }
    }
}

function checkSelectionArrays() {
    // if(
    //     ( storiestable.getAttribute("rowscount") == "0" || selections.storyselection.length > 0 ) &&
    //     ( taskstable.getAttribute("rowscount") == "0" || selections.taskselection.length > 0 ) &&
    //     ( bugstable.getAttribute("rowscount") == "0" || selections.bugselection.length > 0 ) &&
    //     ( testplanstable.getAttribute("rowscount") == "0" || selections.testplanselection.length > 0 ) &&
    //     ( testrunstable.getAttribute("rowscount") == "0" || selections.testrunselection.length > 0 )
    // ) {
    //     SharedFunctions.buttonEnabledSkeleton(SELECTIONSUBMITID);
    // }

    // It is not necessary to restrict the user from generating the report when stuff is not selected
    SharedFunctions.buttonEnabledSkeleton(SELECTIONSUBMITID);
}

function changeCollapseState(tocollapseID, toexpandID) {
    $("#" + toexpandID).show("slow");
    $("#" + tocollapseID).hide();
}

function submitSelectionInfo(nextpage, selections, title) {
    // using href so the user can navigate back
    var loc = window.location;
    var rdyurl = loc.protocol + "//" + loc.hostname + ":" + loc.port + "/"
                + nextpage + "?" + "templateid=" + selections.templateid + "&title=" + title;

    if(storiestable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("&st[]", selections.storyselection);
    }
    if(taskstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("&ta[]", selections.taskselection);
    }
    if(bugstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("&bu[]", selections.bugselection);
    }
    if(testplanstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("&tp[]", selections.testplanselection);
    }
    if(testrunstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("&tr[]", selections.testrunselection);
    }

    // if(rdyurl.slice(-1) == "&") {
    //     rdyurl = rdyurl.slice(0, -1);
    // }

    //window.location.href = rdyurl;
    SharedFunctions.openPageInNewTab(rdyurl);
}

function concatArrayElements(pref, arr) {
    var ret = "";
    for(var i = 0; i < arr.length; i++) {
        ret += pref + "=" + arr[i];
        // if( !(i+1 == arr.length) )
        //     ret += "&";
    }

    console.log(ret);
    return ret;
}

// =====================================================================================