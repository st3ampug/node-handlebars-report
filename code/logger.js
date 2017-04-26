module.exports = {
    log(type, str) {
        var retstr = currentDate();
        switch(type) {
        case "deb":
            retstr += " [ DEBUG  ]: ";
            break;
        case "set":
            retstr += " [setting ]: ";
            break;
        case "err":
            retstr += " [error   ]: ";
            break;
        case "inf":
        default: 
            retstr += " [info    ]: ";
            break;
        }

        if(typeof str === 'object')
        retstr += JSON.stringify(str);
        else
        retstr += str;

        console.log(retstr);
    }
}

function currentDate() {
    var dateFormat = require('dateformat');
    var now = new Date();
    //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return dateFormat(now, "yyyy-mm-dd HH:MM:ss");
}