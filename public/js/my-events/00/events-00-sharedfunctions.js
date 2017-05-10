var SharedFunctions = {
    setCookie: function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },

    getCookie: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    basicAuth: function (u, p) {
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
        var encodedString = Base64.encode(u + ":" + p);
        
        return encodedString;
    },


    getUrlParameter: function (sParam) {
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
    },

    openPageInNewTab: function (url) {
        var w = window.open(url, '_blank');
        w.focus();
    },

    currentUrlWithPort: function() {
        var loc = window.location;
        return loc.protocol + "//" + loc.hostname + ":" + loc.port + "/";
    },

    takeToHrefLink: function(id) {
        window.location.href = $("#" + id).attr("href");
    },

    convertToEpochFromString: function(dateStr) {
        return new Date(dateStr).getTime();
    },

    convertToEpochFromDate: function(date) {
        if(date != null)
            return date.getTime();
        else
            return null;
    },



    Display: {
        jqueryHide: function(id) {
            $("#" + id).hide();
        },

        jqueryShow: function(id) {
            $("#" + id).show("slide", {direction: "up"}, 350);
        },

        elementVisibilityON: function (id) {
            $("#" + id).css('visibility', 'visible');
        },

        elementVisibilityOFF: function (id) {
            $("#" + id).css('visibility', 'hidden');
        },

        elementDisplayBlock: function (id) {
            $("#" + id).css('display', 'block');
        },

        elementDisplayNone: function (id) {
            $("#" + id).css('display', 'none');
        },

        buttonEnabledSkeleton: function (id) {
            $("#" + id).removeAttr('disabled');
            $("#" + id).addClass('button-primary');
        },

        buttonDisabledSkeleton: function (id) {
            $("#" + id).attr('disabled', '');
            $("#" + id).removeClass('button-primary');
        },

        buttonDisabledSkeletonDelay: function (id, delay) {
            $("#" + id).attr('disabled', '');
            $("#" + id).removeClass('button-primary');

            setTimeout(function() {
                $("#" + id).removeAttr('disabled');
                $("#" + id).addClass('button-primary');
            }, delay);
        },

        setDisplayForRow: function (rowid) {
            var row = document.getElementById(rowid);
            
            if(row.getAttribute("display") == "n")
                SharedFunctions.Display.elementDisplayNone(rowid);
            else
                SharedFunctions.Display.elementDisplayBlock(rowid);
        },
        
        changePageTitle: function (title) {
            document.title = title;
        },

        displaySelection: function(id, container){
            console.log("container in displaySelection: " + container)
            var tmp = "";
            for(var i = 0; i < container.length; i++) {
                tmp += "<span class='mylabel'>" + container[i] + "</span>"
            }

            $("#" + id).html(tmp);
        },

        amendSelection: function(container, selection) {
            var row = document.getElementById(selection);
            if(row.getAttribute(GLOBALS.SELECTED) != GLOBALS.SELECTED) {
                for(var i = 0; i < container.length; i++) {
                    if(container[i] == selection)
                        container.splice(i, 1);
                }
            } else {
                container.push(selection);
            }
        },

        pushSelection: function(container, rowclass) {
            container = [];
            var rows = document.getElementsByClassName(rowclass);
            for(var i = 0; i < rows.length; i++) {
                if(rows[i].getAttribute(GLOBALS.SELECTED) == GLOBALS.SELECTED)
                    container.push(rows[i].getAttribute("id"));
            }
            return container;
        }
    },

    Table: {
        highlightSingleRow: function (id, projectrowsarray) {
            var row = document.getElementById(id);

            for(var i = 0; i < projectrowsarray.length; i++) {
                projectrowsarray[i].setAttribute(GLOBALS.SELECTED, GLOBALS.NOTSELECTED);
            }
            row.setAttribute(GLOBALS.SELECTED, GLOBALS.SELECTED);
        },

        highlightMultipleRows: function (id) {
            var row = document.getElementById(id);
            if(row.getAttribute(GLOBALS.SELECTED) != GLOBALS.SELECTED)
                row.setAttribute(GLOBALS.SELECTED, GLOBALS.SELECTED);
            else
                row.setAttribute(GLOBALS.SELECTED, GLOBALS.NOTSELECTED);
        },

        selectAllVisibleRows: function(rowclass) {
            var rows = document.getElementsByClassName(rowclass);

            for(var i = 0; i < rows.length; i++) {
                SharedFunctions.Table.highlightMultipleRows(rows[i].getAttribute("id"));
            }
        }
    },

    NavBar: {

        setNavBarElements: function(link01, link02, link03) {
            $("#" + GLOBALS.navIDs.templateSelection).attr("href", link01);
            $("#" + GLOBALS.navIDs.projectSelection).attr("href", link02);
            $("#" + GLOBALS.navIDs.issueSelection).attr("href", link03);

            if(link01 != "#") {
                SharedFunctions.NavBar.changeNavItemState(GLOBALS.navIDs.templateSelection);
                $("#" + GLOBALS.navIDs.templateSelection).attr("title", link01);
            }
            if(link02 != "#") {
                SharedFunctions.NavBar.changeNavItemState(GLOBALS.navIDs.projectSelection);
                $("#" + GLOBALS.navIDs.projectSelection).attr("title", link02);
            }
            if(link03 != "#") {
                SharedFunctions.NavBar.changeNavItemState(GLOBALS.navIDs.issueSelection);
                $("#" + GLOBALS.navIDs.issueSelection).attr("title", link03);
            }
        },

        changeNavItemState: function(id) {
            var item = document.getElementById(id);
            
            if(item.getAttribute("class") == "navitem") {
                item.setAttribute("class", "navitem-enabled");
                item.setAttribute("style", "cursor:pointer");
            }
            else {
                item.setAttribute("class", "navitem");
                item.removeAttribute("style");
            }
        }
    },

    Init: {
        initDatePicker: function(id) {
            $("#" + id).datepicker();
            $("#" + id).datepicker( "option", "dateFormat", "yy-mm-dd" );
        },

        initDataTableDefault: function (id) {
            $("#" + id).DataTable();
        },

        initDataTableMinimal: function (id) {
            $("#" + id).DataTable({
                "searching": false,
                "paging":   false,
                "ordering": true,
                "info":     false
            });
        },

        initDataTableMedium: function (id) {
            $("#" + id).DataTable({
                "paging":   true,
                "ordering": true,
                "info":     false
            });
        },

        initDataTableMaximum: function (id) {
            $("#" + id).DataTable({
                "paging":   true,
                "ordering": true,
                "info":     true
            });
        },

        initDataTableCustom: function (id, scrollY) {
            $("#" + id).DataTable({
                "searching": true,
                "paging":   false,
                "ordering": true,
                "info":     false,
                "scrollY":  scrollY,
                "sDom": "ltr"
            });
        },

        initDataTableDateFilter: function(startid, endid) {
            $.fn.dataTable.ext.search.push(
                function( settings, data, dataIndex ) {
                    var min, max;
                    if(SharedFunctions.convertToEpochFromDate($("#" + startid).datepicker("getDate")) != null)
                        min = SharedFunctions.convertToEpochFromDate($("#" + startid).datepicker("getDate"));
                    else
                        min = NaN;

                    if(SharedFunctions.convertToEpochFromDate($("#" + endid).datepicker("getDate")) != null)
                        max = SharedFunctions.convertToEpochFromDate($("#" + endid).datepicker("getDate")) + 86400000; // added and extra day
                    else
                        max = NaN;
                        
                    var date = SharedFunctions.convertToEpochFromString(data[3]) || 0; // use data for the date column
            
                    if ( ( isNaN( min ) && isNaN( max ) ) ||
                        ( isNaN( min ) && date <= max ) ||
                        ( min <= date   && isNaN( max ) ) ||
                        ( min <= date   && date <= max ) )
                    {
                        return true;
                    }
                    return false;
                }
            );
        }
    },

    Validation: {
        startDateInputFromDatePicker: function(startid, endid) {
            var startdate = $("#" + startid).datepicker("getDate");
            var enddate = $("#" + endid).datepicker("getDate");

            if(enddate != null) {
                if(startdate <= enddate) {
                    return true;
                } else {
                    return false;
                }
            } 

            return true;
        },

        endDateInputFromDatePicker: function(startid, endid) {
            var startdate = $("#" + startid).datepicker("getDate");
            var enddate = $("#" + endid).datepicker("getDate");

            if(startdate != null) {
                if(startdate <= enddate) {
                    return true;
                } else {
                    return false;
                }
            } 

            return true;
        }
    },

    ErrorDisplay: {
        errorMsg: function(msg, delay) {
            var errorbox = $("." + GLOBALS.ERRORDISPLAY);
            var msgbox = $("#" + GLOBALS.ERRORDISPLAY + "-msg");

            msgbox.text(msg);

            errorbox.css('display', 'block');
            setTimeout(function() {
                //errorbox.css('display', 'none');
                errorbox.fadeOut();
            }, delay);

        },

        infoMsg: function(msg) {
            // ?? maybe todo
        }
    }
}