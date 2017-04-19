// Variables ===========================================================================

const PROJECTOPTIONID = "projectoption";
const PROJECTSUBMITID = "projectsubmit";
const PROJECTSELECTID = "projectselect";
const PROJECTTABLEID = "projecttable";
const PROJECTROWCLASS = "projectrow";
const PROJECTSELECTIONID = "projectselection";
const PROJECTCOLLAPSEID = "project-collapse";
const PROJECTEXPANDID = "project-expand";
const PROJECTCOLLAPSEDID = "projectbody-collapsed";
const PROJECTEXPANDEDID = "projectbody-expanded";

const JIRAKEYATTR = "jirakey";
const JIRANAMEATTR = "jiraname";
const JIRAIDATTR = "jiraid";
const TESTRAILIDATTR = "testrailid";
const TESTRAILNAMEATTR = "testrailname";
const SELECTED          = "selected";
const NOTSELECTED       = "no";

const PROJECTSELECTTEXT = "Selected: ";

var projecttable = document.getElementById(PROJECTTABLEID);
var projectsubmit = document.getElementById(PROJECTSUBMITID);
var projectrows = document.getElementsByClassName(PROJECTROWCLASS);
var projectcollapse = document.getElementById(PROJECTCOLLAPSEID);
var projectexpand = document.getElementById(PROJECTEXPANDID);

// =====================================================================================

// Page load ===========================================================================

window.addEventListener('load', function(){
    console.log("onload");

    // INIT =============================================
    var projectobj = {
        jiraid: "",
        jirakey: "",
        jiraname: "",
        testrailid: "",
        testrailname: ""
    };

    // element states ===================================
    if(typeof getUrlParameter("p") == 'undefined') {
        // project parameter is NOT set in the url

        $("#" + PROJECTCOLLAPSEDID).hide();
        buttonDisabledSkeleton(PROJECTSUBMITID);
    } else {
        // project parameter is SET in the url

        highlightRow(getUrlParameter("p"));
        selectProject(getUrlParameter("p"), projectobj);

        $("#" + PROJECTEXPANDEDID).hide();
        buttonDisabledSkeleton(PROJECTSUBMITID);
    }

    // LISTENERS =======================================
    projecttable.addEventListener("click", function(ev) {
        console.log(ev.currentTarget);

        if(ev.target.tagName.toLowerCase() == "td") {
            console.log(ev.target.tagName.toLowerCase() + " >> " + ev.target.parentNode.id);

            highlightRow(ev.target.parentNode.id);
            selectProject(ev.target.parentNode.id, projectobj);
        }
        if(ev.target.tagName.toLowerCase() == "tr") {
            console.log(ev.target.id);
        }
    });

    projectsubmit.addEventListener("click", function(ev) {
        console.log(PROJECTSUBMITID);

        // take the id's from the selected row and make the appropriate ajax api calls
        // to determine what elements should be shown
        // need story list (response should have related issues), tasks list (...), bug list
        // from JIRA and test plans and runs from testrail (need to think about how to aggregate these)
        
        buttonDisabledSkeleton(PROJECTSUBMITID);
        submitProjectInfo(projectobj);
        
    });

    projectcollapse.addEventListener("click", function(ev) {
        changeCollapseState(PROJECTEXPANDEDID, PROJECTCOLLAPSEDID);
    });
    projectexpand.addEventListener("click", function(ev) {
        changeCollapseState(PROJECTCOLLAPSEDID, PROJECTEXPANDEDID);
    });

    
});

// =====================================================================================

// Helpers =============================================================================

function highlightRow(id) {
    var row = document.getElementById(id);

    for(var i = 0; i < projectrows.length; i++) {
        projectrows[i].setAttribute(SELECTED, NOTSELECTED);
    }
    row.setAttribute(SELECTED, SELECTED);

    // var row = document.getElementById(id);
    // if(row.getAttribute(SELECTED) != SELECTED)
    //     row.setAttribute(SELECTED, SELECTED);
    // else
    //     row.setAttribute(SELECTED, NOTSELECTED);
}

function changeCollapseState(tocollapseID, toexpandID) {
    $("#" + toexpandID).show("slow");
    $("#" + tocollapseID).hide();
}

function selectProject(trID, objtochange) {
    $("#" + PROJECTSELECTIONID).text( PROJECTSELECTTEXT + $("#" + trID).attr("jiraname") );

    objtochange.jiraid = $("#" + trID).attr("jiraid");
    objtochange.jirakey = $("#" + trID).attr("id");
    objtochange.jiraname = $("#" + trID).attr("jiraname");
    objtochange.testrailid = $("#" + trID).attr("testrailid");
    objtochange.testrailname = $("#" + trID).attr("testrailname");

    buttonEnabledSkeleton(PROJECTSUBMITID);
}

function submitProjectInfo(projobj) {
    var urls = window.location.href.split('?');

    if(urls.length > 0 )
        window.location.replace(urls[0] + "?jkey=" + projobj.jirakey + "&tid=" + projobj.testrailid);
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




// old code stuff!!

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