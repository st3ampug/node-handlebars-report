// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Project selection";

const JIRAROWID = "jirarow";
const TESTRAILROW = "testrailrow";
const JIRASELECTIONID = "jiraselection";
const TESTRAILSELECTIONID = "testrailselection";
const JIRAPROJECTTABLEID = "jiraprojecttable";
const JIRAPROJECTROWCLASS = "j-projectrow";
const TESTRAILROJECTTABLEID = "testrailprojecttable";
const TESTRAILPROJECTROWCLASS = "tr-projectrow";
const SELECTIONSUBMITID = "selecitonsubmit";
const BUTTONROWID = "button-row";
const BUTTONOVERLAYID = "button-overlay";

const JIRAKEYATTR = "id";
const JIRANAMEATTR = "jiraname";
const TESTRAILIDATTR = "id";
const TESTRAILNAMEATTR = "testrailname";
const SELECTED          = "selected";
const NOTSELECTED       = "no";

const PROJECTSELECTTEXT = "Selected: ";

var jiraprojecttable = document.getElementById(JIRAPROJECTTABLEID);
var jiraprojectrows = document.getElementsByClassName(JIRAPROJECTROWCLASS);
var testrailprojecttable = document.getElementById(TESTRAILROJECTTABLEID);
var testrailprojectrows = document.getElementsByClassName(TESTRAILPROJECTROWCLASS);
var selectionsubmit = document.getElementById(SELECTIONSUBMITID);

var selections = {
    templateid: "",
    jiraselection: [],
    testrailselection: []
}

// =====================================================================================

// Page load ===========================================================================

window.addEventListener('load', function(){
    console.log("onload");
    
    // INIT =============================================
    
    SharedFunctions.changePageTitle(PAGETITLE);
    setTemplateId();

    SharedFunctions.setNavBarElements(
        SharedFunctions.currentUrlWithPort(),
        window.location,
        "#"
    );

    SharedFunctions.setDisplayForRow(JIRAROWID);
    SharedFunctions.setDisplayForRow(TESTRAILROW);

    SharedFunctions.initDataTableCustom(JIRAPROJECTTABLEID, 500);
    SharedFunctions.initDataTableCustom(TESTRAILROJECTTABLEID, 500);

    SharedFunctions.elementDisplayNone(BUTTONOVERLAYID);
    SharedFunctions.buttonDisabledSkeleton(SELECTIONSUBMITID);

    // LISTENERS =======================================

    $("#" + GLOBALS.navIDs.templateSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });
    $("#" + GLOBALS.navIDs.projectSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });

    jiraprojecttable.addEventListener("click", function(ev) {
        tableEventListener(ev, JIRASELECTIONID, jiraprojectrows, "jiraname", selections.jiraselection);
    });

    testrailprojecttable.addEventListener("click", function(ev) {
        tableEventListener(ev, TESTRAILSELECTIONID, testrailprojectrows, "testrailname", selections.testrailselection);
    });

    selectionsubmit.addEventListener("click", function(ev) {

        SharedFunctions.buttonDisabledSkeleton(SELECTIONSUBMITID);
        SharedFunctions.elementDisplayNone(BUTTONROWID);
        SharedFunctions.elementDisplayBlock(BUTTONOVERLAYID);
        submitSelectionInfo(GLOBALS.ISSUESSELECTIONPAGE, selections);
        // length check was done when the button was enabled
        
    });    
});

// =====================================================================================

// Helpers =============================================================================

function setTemplateId() {
    selections.templateid = SharedFunctions.getUrlParameter("templateid");
}

function highlightRow(id, projectrows) {
    var row = document.getElementById(id);

    for(var i = 0; i < projectrows.length; i++) {
        projectrows[i].setAttribute(SELECTED, NOTSELECTED);
    }
    row.setAttribute(SELECTED, SELECTED);

}

// wow this mess needs to be straightened out!

function displaySelection(selectionID, trID, attr) {
    $("#" + selectionID).text( PROJECTSELECTTEXT + $("#" + trID).attr(attr) );
}

function submitSelectionInfo(nextpage, selections) {
    // using replace so the user can't navigate back
    var rdyurl = SharedFunctions.currentUrlWithPort() + nextpage + "?" + "templateid=" + selections.templateid;

    if(selections.jiraselection.length != 0)
        rdyurl += "&jkey=" + selections.jiraselection[0];
    if(selections.testrailselection.length != 0)
        rdyurl += "&tid=" + selections.testrailselection[0];

    window.location.href = rdyurl;
}

function tableEventListener(ev, selectedcontainerid, projectrows, attr, selectionarray) {
    console.log(ev.currentTarget);

    if(ev.target.tagName.toLowerCase() == "td") {
        console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

        highlightRow(ev.target.parentNode.id, projectrows);
        amendSelection(selectionarray, ev.target.parentNode.id)
        displaySelection(selectedcontainerid, ev.target.parentNode.id, attr);
    }
    if(ev.target.tagName.toLowerCase() == "tr") {
        console.log(ev.target.id);
    }

    checkSelectionStrings();
}

function amendSelection(container, selectionid) {
    if(container.length < 2) {
        container.splice(0, 1);
        container.push(selectionid);
    }
}

function checkSelectionStrings() {
    if(
        ( jiraprojecttable.getAttribute("rowscount") == "0" || selections.jiraselection.length > 0 ) &&
        ( testrailprojecttable.getAttribute("rowscount") == "0" || selections.testrailselection.length > 0 )
    ) {
        SharedFunctions.buttonEnabledSkeleton(SELECTIONSUBMITID);
    }
}

// =====================================================================================