const ACCESS = {
    urls: {
        iraurl: "https://waracle.atlassian.net/rest/api/2",
        testrailurl: "https://waracle.testrail.com/index.php?/api/v2"
    },
    login: {
        jirauser: "b.polgar@waracle.com",
        jirapass: "Bb041204",
        testrailuser: "test.account@waracle.com",
        testrailpass: "Waracle2017"
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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
}

function elementVisibilityON(id) {
    $("#" + id).css('visibility', 'visible');
}

function elementVisibilityOFF(id) {
    $("#" + id).css('visibility', 'hidden');
}

function elementDisplayBlock(id) {
    $("#" + id).css('display', 'block');
}

function elementDisplayNone(id) {
    $("#" + id).css('display', 'none');
}