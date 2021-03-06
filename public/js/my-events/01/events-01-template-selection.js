// Variables ===========================================================================

const PAGETITLE = "Waracle - Test Report - Template selection";

const BUTTONROWID = "button-row";
const BUTTONOVERLAYID = "button-overlay";
const SELECTIONSUBMITID = "selecitonsubmit";
const TEMPLATESELECTIONTITLEID = "template-title";
const TEMPLATESELECTIONDESCID = "template-description";
const TEMPLATEOPTIONSCLASS = "template-options";
const TEMPLATESELECTID = "templateselect"

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

    SharedFunctions.Init.initDataTableCustom(PAGETITLE);

    SharedFunctions.NavBar.setNavBarElements(
        SharedFunctions.currentUrlWithPort(),
        "#",
        "#"
    );

    SharedFunctions.Display.elementDisplayNone(BUTTONOVERLAYID);
    SharedFunctions.Display.buttonDisabledSkeleton(SELECTIONSUBMITID);

    // element states ===================================
    

    // LISTENERS =======================================

    $("#" + GLOBALS.navIDs.templateSelection).click(function(ev) {
        SharedFunctions.takeToHrefLink(ev.target.id)
    });

    templateselect.addEventListener("change", function(ev){
        var info = getSelectedInformation($("#" + TEMPLATESELECTID).val());
        
        $("#" + TEMPLATESELECTIONTITLEID).text(info.name);
        $("#" + TEMPLATESELECTIONDESCID).text(info.description)

        selection.templateid = info.id;

        SharedFunctions.Display.buttonEnabledSkeleton(SELECTIONSUBMITID);
    });

    selectionsubmit.addEventListener("click", function(ev) {
        SharedFunctions.Display.buttonDisabledSkeleton(SELECTIONSUBMITID);
        SharedFunctions.Display.elementDisplayNone(BUTTONROWID);
        SharedFunctions.Display.elementDisplayBlock(BUTTONOVERLAYID);

        // submit selection
        submitSelectionInfo(GLOBALS.PROJECTSELECTIONPAGE, selection);
    });
});

// =====================================================================================

// Helpers =============================================================================

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
    var rdyurl = SharedFunctions.currentUrlWithPort() + nextpage + "?" + "templateid=" + selection.templateid;

    window.location.href = rdyurl;
}

// =====================================================================================