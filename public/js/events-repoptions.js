// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Report builder";

const REPORTTITLEID = "reporttitle";
const STORIESTABLEID = "storiestable";
const STORYROWCLASS = "storyrow";
const SELECTEDSTORIESID = "selectedstories";
const TASKSTABLEID = "taskstable";
const TASKROWCLASS = "taskrow";
const SELECTEDTASKSID = "selectedtasks";
const BUGSTABLEID = "bugstable";
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
var storiestable = document.getElementById(STORIESTABLEID);
var storyrows = document.getElementsByClassName(STORYROWCLASS);
var taskstable = document.getElementById(TASKSTABLEID);
var taskrows = document.getElementsByClassName(TASKROWCLASS);
var bugstable = document.getElementById(BUGSTABLEID);
var bugrows = document.getElementsByClassName(BUGROWCLASS);
var testplanstable = document.getElementById(TESTPLANSTABLEID);
var testplanrows = document.getElementsByClassName(TESTPLANROWCLASS);
var testrunstable = document.getElementById(TESTRUNSTABLEID);
var testrunrows = document.getElementsByClassName(TESTRUNROWCLASS);

var selectionsubmit = document.getElementById(SELECTIONSUBMITID);


var selections = {
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

    changePageTitle(PAGETITLE);

    initDataTableCustom(STORIESTABLEID, 400);
    initDataTableCustom(TASKSTABLEID, 400);
    initDataTableCustom(BUGSTABLEID, 400);
    initDataTableCustom(TESTPLANSTABLEID, 400);
    initDataTableCustom(TESTRUNSTABLEID, 400);

    elementDisplayNone(BUTTONOVERLAYID);
    buttonDisabledSkeleton(SELECTIONSUBMITID);

    // element states ===================================
    

    // LISTENERS =======================================
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
        buttonDisabledSkeleton(SELECTIONSUBMITID);
        elementDisplayNone(BUTTONROWID);
        elementDisplayBlock(BUTTONOVERLAYID);

        // submit selection
        submitSelectionInfo(REPORTPAGE, selections, reporttitle.value);
    });
    
});

// =====================================================================================

// Helpers =============================================================================

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
    if(
        ( storiestable.getAttribute("rowscount") == "0" || selections.storyselection.length > 0 ) &&
        ( taskstable.getAttribute("rowscount") == "0" || selections.taskselection.length > 0 ) &&
        ( bugstable.getAttribute("rowscount") == "0" || selections.bugselection.length > 0 ) &&
        ( testplanstable.getAttribute("rowscount") == "0" || selections.testplanselection.length > 0 ) &&
        ( testrunstable.getAttribute("rowscount") == "0" || selections.testrunselection.length > 0 )
    ) {
        buttonEnabledSkeleton(SELECTIONSUBMITID);
    }
}

function changeCollapseState(tocollapseID, toexpandID) {
    $("#" + toexpandID).show("slow");
    $("#" + tocollapseID).hide();
}

function submitSelectionInfo(nextpage, selections, title) {
    // using href so the user can navigate back
    var urls = window.location.href.split('?');
    var rdyurl = urls[0] + nextpage + "?" + "title=" + removeSpecials(title) + "&";

    if(storiestable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("st[]", selections.storyselection) + "&";
    }
    if(taskstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("ta[]", selections.taskselection) + "&";
    }
    if(bugstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("bu[]", selections.bugselection) + "&";
    }
    if(testplanstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("tp[]", selections.testplanselection) + "&";
    }
    if(testrunstable.getAttribute("rowscount") != "0") {
        rdyurl += concatArrayElements("tr[]", selections.testrunselection);
    }

    if(rdyurl.slice(-1) == "&") {
        rdyurl = rdyurl.slice(0, -1);
    }

    if(urls.length > 0 )
        window.location.href = rdyurl;
}

function concatArrayElements(pref, arr) {
    var ret = "";
    for(var i = 0; i < arr.length; i++) {
        ret += pref + "=" + arr[i];
        if( !(i+1 == arr.length) )
            ret += "&";
    }

    console.log(ret);
    return ret;
}




function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function removeSpecials(str) {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();

    var res = "";
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i] || lower[i].trim() === '')
            res += str[i];
    }
    return res;
}




// old code stuff

function checkUserCookie() {
    console.log("Attempting to check cookie's content");
    
    var cookiecontent = getCookie(USERCOOKIE);
    console.log("Cookie's content: " + cookiecontent);

    if(cookiecontent != "" && checkUserName(cookiecontent)) {
        saveduser = cookiecontent;
    }
}

$.fn.redraw = function(){
  $(this).each(function(){
    var redraw = this.offsetHeight;
  });
};

// =====================================================================================