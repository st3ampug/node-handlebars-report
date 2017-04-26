
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
    // jira issue related helpers
    jiralabel: (icon, type, key)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';
        
        var icondiv =   '<div id="myicon"><a href="#">' + 
                        iconimg +
                        '</a></div>';

        return '<span title="' + type + '">[' + iconimg + ' ' + key + ']</span>';
    },
    jiralabel_summay: (icon, type, key, summary)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';
        
        var icondiv =   '<div id="myicon"><a href="#">' + 
                        iconimg +
                        '</a></div>';

        return '<span title="' + type + '">[' + iconimg + ' ' + key + ']: ' + summary + '</span>';
    },
    buglabel: (icon, key)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

        return '<span title="Bug">[' + iconimg + ' ' + key + ']</span>';
    },
    buglabel_summary: (icon, key, summary)=>{
        var iconimg = '<img src="' + icon + '" style="margin-bottom:-4px" />';

        return '<span title="' + summary + '">[' + iconimg + ' ' + key + ']</span>';
    },
    versions: (arr)=>{
        if(arr.length > 0) {
            var tmp = '';
            for(var i = 0; i < arr.length; i++) {
                tmp += '<div>' + arr[i].name + '</div>';
            }

            return tmp;
        } else {
            return '-';
        }
    },
    done: (arr)=>{
        if(arr.length > 0) {
            var count = 0;
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].fields.status.name.toLowerCase() == "done")
                    count++;
            }
            
            return count;
        } else {
            return "-";
        }
    },
    sort_by_status: (array)=>{
		return array.sort(compareStatus);
    },
    // test related helpers
    sumcounts: (passed, blocked, untested, retest, failed)=>{
        var sum =  parseInt(passed) + parseInt(blocked) + parseInt(untested) + parseInt(retest) + parseInt(failed);
        
        return sum;
    },
    count: (plans, runs, prop)=>{
        var sumcounts = countPropInArr(plans, prop) + countPropInArr(runs, prop);

        return sumcounts;
    },
    countall: (plans, runs)=>{
        var passc = countPropInArr(plans, "passed_count") + countPropInArr(runs, "passed_count");
        var failedc = countPropInArr(plans, "failed_count") + countPropInArr(runs, "failed_count");
        var blockedc = countPropInArr(plans, "blocked_count") + countPropInArr(runs, "blocked_count");
        var retestc = countPropInArr(plans, "retest_count") + countPropInArr(runs, "retest_count");
        var untestc = countPropInArr(plans, "untested_count") + countPropInArr(runs, "untested_count");

        return passc + failedc + blockedc + retestc + untestc;
    },
    percent: (plans, runs, prop)=>{
        var passc = countPropInArr(plans, "passed_count") + countPropInArr(runs, "passed_count");
        var failedc = countPropInArr(plans, "failed_count") + countPropInArr(runs, "failed_count");
        var blockedc = countPropInArr(plans, "blocked_count") + countPropInArr(runs, "blocked_count");
        var retestc = countPropInArr(plans, "retest_count") + countPropInArr(runs, "retest_count");
        var untestc = countPropInArr(plans, "untested_count") + countPropInArr(runs, "untested_count");
        var myc = countPropInArr(plans, prop) + countPropInArr(runs, prop);

        return ((myc / (passc + failedc + blockedc + retestc + untestc)) * 100).toFixed(1);
    },
    // general helpers
    add: (a, b)=>{
        return parseInt(a) + parseInt(b);
    },
    num: (tonum)=>{
        return parseInt(tonum);
    },
    display: (d)=>{
        if(d)
            return 'display="y"';
        else
            return 'display="n"';
    }
}

function countPropInArr(arr, prop) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        count += arr[i][prop];
    }
    //console.log("count of " + prop + ": " + count);
    return count;
}

function compareStatus(a, b) {
  if (a.fields.status.name < b.fields.status.name)
    return -1;
  if (a.fields.status.name > b.fields.status.name)
    return 1;
  return 0;
}