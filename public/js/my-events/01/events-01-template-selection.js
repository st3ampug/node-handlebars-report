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

// =====================================================================================