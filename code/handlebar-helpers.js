
module.exports = {
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
    }
}