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

    setDisplayForRow: function (rowid) {
        var row = document.getElementById(rowid);
        
        if(row.getAttribute("display") == "n")
            SharedFunctions.elementDisplayNone(rowid);
        else
            SharedFunctions.elementDisplayBlock(rowid);
    },

    changePageTitle: function (title) {
        document.title = title;
    },

    openPageInNewTab: function (url) {
        var w = window.open(url, '_blank');
        w.focus();
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

    setNavBarElements: function(link01, link02, link03) {
        $("#" + GLOBALS.navIDs.templateSelection).attr("href", link01);
        $("#" + GLOBALS.navIDs.projectSelection).attr("href", link02);
        $("#" + GLOBALS.navIDs.issueSelection).attr("href", link03);

        if(link01 != "#") {
            SharedFunctions.changeNavItemState(GLOBALS.navIDs.templateSelection);
            $("#" + GLOBALS.navIDs.templateSelection).attr("title", link01);
        }
        if(link02 != "#") {
            SharedFunctions.changeNavItemState(GLOBALS.navIDs.projectSelection);
            $("#" + GLOBALS.navIDs.projectSelection).attr("title", link02);
        }
        if(link03 != "#") {
            SharedFunctions.changeNavItemState(GLOBALS.navIDs.issueSelection);
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
    },

    currentUrlWithPort: function() {
        var loc = window.location;
        return loc.protocol + "//" + loc.hostname + ":" + loc.port + "/";
    },

    takeToHrefLink: function(id) {
        window.location.href = $("#" + id).attr("href");
    }
}