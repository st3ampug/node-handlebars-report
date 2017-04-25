// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Project selection";

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
    
    changePageTitle(PAGETITLE);
    setTemplateId();

    initDataTableCustom(JIRAPROJECTTABLEID, 500);
    initDataTableCustom(TESTRAILROJECTTABLEID, 500);

    elementDisplayNone(BUTTONOVERLAYID);
    buttonDisabledSkeleton(SELECTIONSUBMITID);

    // LISTENERS =======================================
    jiraprojecttable.addEventListener("click", function(ev) {
        tableEventListener(ev, JIRASELECTIONID, jiraprojectrows, "jiraname", selections.jiraselection);
    });

    testrailprojecttable.addEventListener("click", function(ev) {
        tableEventListener(ev, TESTRAILSELECTIONID, testrailprojectrows, "testrailname", selections.testrailselection);
    });

    selectionsubmit.addEventListener("click", function(ev) {

        buttonDisabledSkeleton(SELECTIONSUBMITID);
        elementDisplayNone(BUTTONROWID);
        elementDisplayBlock(BUTTONOVERLAYID);
        submitSelectionInfo(GLOBALS.ISSUESSELECTIONPAGE, selections);
        // length check was done when the button was enabled
        
    });    
});

// =====================================================================================

// Helpers =============================================================================

function setTemplateId() {
    selections.templateid = getUrlParameter("templateid");
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
    var loc = window.location;
    var rdyurl = loc.protocol + "//" + loc.hostname + ":" + loc.port + "/"
                + nextpage + "?" + "templateid=" + selections.templateid;

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
        buttonEnabledSkeleton(SELECTIONSUBMITID);
    }
}


// old code stuff!!

function changeCollapseState(tocollapseID, toexpandID) {
    $("#" + toexpandID).show("slow");
    $("#" + tocollapseID).hide();
}



// very old

function loginCookieValidate() {
    if(loginCookiePresent()) {
        cookie = getCookie(LOGINCOOKIE).split(COOKIEDELIMITER);
        var json = {
            Email: cookie[0]
        }

        $.ajax({
            url: passcheckAPI,
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            xhrFields: {
                withCredentials: false
            },
            data: JSON.stringify(json),
            timeout: 1500,
            success: function(response) {
                console.log("Pass check successful");
                let json = response;
                if(typeof(json.LoggedIn) !== 'undefined') {
                    if (json.LoggedIn === cookie[1]) {
                        
                        console.log("GREAT SUCCESS");
                        elementVisibilityON(NAVBARLINKS);
                        elementVisibilityON(CONTAINER);
                        
                        
                    } else {
                        redirectPageSaved("");
                    }
                } else {
                    redirectPageSaved("");
                }
            },
            error: function() {
                redirectPageSaved("");
            }
        });
    } else {
        console.log("Pass check unsuccessful");
        redirectPageSaved("");
    }
}



function setUserButtonText(name) {
    if(name != "") {
        //usersbutton.innerHTML = name;
        usersbutton.innerHTML = name + " " + CARETSPAN;
        usersbutton.setAttribute("name", name);
        selecteduser = name;
    }
}

function checkUserName (name) {
    var found = false;
    var lis = dropdown.getElementsByTagName("li");
    for(var i = 0; i < lis.length; i++) {
        if((lis[i].firstChild.text == name) && (lis[i].getAttribute("class") != "disabled"))
            found = true;
    }
    return found;
}

function changeAssignState(id) {
    var devicesselected = false;
    var userselected = false;
    var trs = table.getElementsByTagName("tr");
    
    for(var i = 0; i < trs.length; i++) {
        if(trs[i].getAttribute("selected") == "selected")
            devicesselected = true;
    }
    if(selecteduser != null) {
        userselected = true;
    }

    if(devicesselected && userselected)
        $('#' + id).removeClass("disabled");
    else
        $('#' + id).addClass("disabled");
}

function changeReturnState(id) {
    var devicesselected = false;
    var devicesassigned = false;
    var trs = table.getElementsByTagName("tr");
    
    for(var i = 0; i < trs.length; i++) {
        if(trs[i].getAttribute("selected") == "selected")
            devicesselected = true;
        if(trs[i].children[4].innerText == selecteduser)
            devicesassigned = true;
    }

    if(devicesselected && devicesassigned)
        $('#returnItems').removeClass("disabled");
    else
        $('#returnItems').addClass("disabled");
}

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