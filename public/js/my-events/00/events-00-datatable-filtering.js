var DataFiltering = {
    filterVersion: function(searchfieldid, tableid, columnnum) {
        $("#" + tableid).DataTable().column(columnnum).search(
            $("#" + searchfieldid).val()
        ).draw();
    },

    selectFilter: function(arr, tableid, columnnum) {
        // ((^|, )(.*part1.*|.part2.|.part3.))+$
        var regex = "";
        if (arr.length != 0) {
            var first = true;
            regex = "((^|, )(";

            for (var i = 0; i < arr.length; i++) {
                if (!first) {
                    regex += "|"
                }
                regex += ".*" + arr[i].text + "\\D*";
                first = false;
            }

            regex += "))+$";
        }

        $("#" + tableid).DataTable().column(columnnum).search(
            regex, // my regex
            true, // regex search ON
            false // smart search OFF (conflicts with regex)
        ).draw();
    },

    filterDate: function(startid, endid, tableid, columnnum) {
        var startdate = $("#" + startid).datepicker("getDate");
        var enddate = $("#" + endid).datepicker("getDate");

        if (startdate != null)
            startdate = SharedFunctions.convertToEpochFromDate(startdate);
        else
            startdate = 0;

        if (enddate != null)
            enddate = SharedFunctions.convertToEpochFromDate(enddate);
        else
            enddate = 8640000000000000; // http://stackoverflow.com/questions/27093130/how-to-get-the-minimum-and-maximum-date

        // this was never finished, used a different method to filter

    }
}