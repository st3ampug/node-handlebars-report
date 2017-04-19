// Variables ===========================================================================

const STORIESTABLEID = "storiestable";
const STORYROWCLASS = "storyrow";
const SELECTEDSTORIESID = "selectedstories";
const TASKSTABLEID = "taskstable";
const TASKROWCLASS = "taskrow";
const SELECTEDTASKSID = "selectedtasks";
const BUGSTABLEID = "bugstable";
const BUGROWCLASS = "bugrow";
const SELECTEDBUGSID = "selectedbugs";
// plans missing 
const TESTRUNSTABLEID = "testrunstable";
const TESTRUNROWCLASS = "testrunrow";
const SELECTEDTESTRUNSID = "selectedtestruns";


const SELECTED          = "selected";
const NOTSELECTED       = "no";

var storiestable = document.getElementById(STORIESTABLEID);
var storyrows = document.getElementsByClassName(STORYROWCLASS);
var taskstable = document.getElementById(TASKSTABLEID);
var taskrows = document.getElementsByClassName(TASKROWCLASS);
var bugstable = document.getElementById(BUGSTABLEID);
var bugrows = document.getElementsByClassName(BUGROWCLASS);
//plans missing
var testrunstable = document.getElementById(TESTRUNSTABLEID);
var testrunrows = document.getElementsByClassName(TESTRUNROWCLASS);


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
    initDataTableCustom(STORIESTABLEID, 400);
    initDataTableCustom(TASKSTABLEID, 400);
    initDataTableCustom(BUGSTABLEID, 400);
    initDataTableCustom(TESTRUNSTABLEID, 400);

    // element states ===================================
    

    // LISTENERS =======================================
    storiestable.addEventListener("click", function(ev) {
        console.log(ev.currentTarget);

        if(ev.target.tagName.toLowerCase() == "td") {
            console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

            highlightRow(ev.target.parentNode.id);
            amendSelection(selections.storyselection, ev.target.parentNode.id);
            displaySelection(SELECTEDSTORIESID, selections.storyselection);
        }
        if(ev.target.tagName.toLowerCase() == "tr") {
            console.log(ev.target.id);
        }
    });

    taskstable.addEventListener("click", function(ev) {
        console.log(ev.currentTarget);

        if(ev.target.tagName.toLowerCase() == "td") {
            console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

            highlightRow(ev.target.parentNode.id);
            amendSelection(selections.taskselection, ev.target.parentNode.id);
            displaySelection(SELECTEDTASKSID, selections.taskselection);
        }
        if(ev.target.tagName.toLowerCase() == "tr") {
            console.log(ev.target.id);
        }
    });

    bugstable.addEventListener("click", function(ev) {
        console.log(ev.currentTarget);

        if(ev.target.tagName.toLowerCase() == "td") {
            console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

            highlightRow(ev.target.parentNode.id);
            amendSelection(selections.bugselection, ev.target.parentNode.id);
            displaySelection(SELECTEDBUGSID, selections.bugselection);
        }
        if(ev.target.tagName.toLowerCase() == "tr") {
            console.log(ev.target.id);
        }
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

function changeCollapseState(tocollapseID, toexpandID) {
    $("#" + toexpandID).show("slow");
    $("#" + tocollapseID).hide();
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