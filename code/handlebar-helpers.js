
module.exports = {
    debug: (optionalValue)=>{
        console.log("Current Context");
        console.log("====================");
        console.log(this);
        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    },
    jiralabel: (icon, type, key, summary)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';
        
        var icondiv =   '<div id="myicon"><a href="#">' + 
                        iconimg +
                        '</a></div>';

        return '<span title="' + type + '">[' + iconimg + ' ' + key + ']: ' + summary + '</span>';
    },
    buglabel: (icon, key, summary)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

        return '<span title="Bug">[' + iconimg + ' ' + key + ']: ' + summary + '</span>';
    },
    sumcounts: (passed, blocked, untested, retest, failed)=>{
        var sum =  parseInt(passed) + parseInt(blocked) + parseInt(untested) + parseInt(retest) + parseInt(failed);
        
        return sum;
    }
}