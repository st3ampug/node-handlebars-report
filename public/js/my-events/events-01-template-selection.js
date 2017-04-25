// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Template selection";

const BUTTONROWID = "button-row";
const BUTTONOVERLAYID = "button-overlay";
const SELECTIONSUBMITID = "selecitonsubmit";
const TEMPLATESELECTIONTITLEID = "template-title";
const TEMPLATESELECTIONDESCID = "template-description";
const TEMPLATEOPTIONSCLASS = "template-options";
const TEMPLATESELECTID = "templateselect"

const SELECTED          = "selected";
const NOTSELECTED       = "no";

var templateselect = document.getElementById(TEMPLATESELECTID);
var selectionsubmit = document.getElementById(SELECTIONSUBMITID);

var selection = {
    templateid: ""
}

// =====================================================================================

// Page load ===========================================================================

window.addEventListener('load', function(){
    console.log("onload");

    // INIT =============================================

    changePageTitle(PAGETITLE);

    elementDisplayNone(BUTTONOVERLAYID);
    buttonDisabledSkeleton(SELECTIONSUBMITID);

    // element states ===================================
    

    // LISTENERS =======================================
    templateselect.addEventListener("change", function(ev){
        var info = getSelectedInformation($("#" + TEMPLATESELECTID).val());
        
        $("#" + TEMPLATESELECTIONTITLEID).text(info.name);
        $("#" + TEMPLATESELECTIONDESCID).text(info.description)

        selection.templateid = info.id;

        buttonEnabledSkeleton(SELECTIONSUBMITID);
    });

    selectionsubmit.addEventListener("click", function(ev) {
        buttonDisabledSkeleton(SELECTIONSUBMITID);
        elementDisplayNone(BUTTONROWID);
        elementDisplayBlock(BUTTONOVERLAYID);

        // submit selection
        submitSelectionInfo(GLOBALS.PROJECTSELECTIONPAGE, selection);
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

function getSelectedInformation(str) {
    var retobj = {
        id: "",
        name: "",
        description: ""
    }

    var options = $("." + TEMPLATEOPTIONSCLASS);
    for(var i = 0; i < options.length; i++) {
        if(options[i].text == str) {
            retobj.id = options[i].getAttribute("id");
            retobj.name = options[i].text;
            retobj.description = options[i].getAttribute("description");
        }
    }

    return retobj;
}

function submitSelectionInfo(nextpage, selection) {
    // using href so the user can navigate back
    var loc = window.location;
    var rdyurl = loc.protocol + "//" + loc.hostname + ":" + loc.port + "/"
                + nextpage + "?" + "templateid=" + selection.templateid;

    window.location.href = rdyurl;
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