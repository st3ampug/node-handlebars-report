var DataFiltering = {
    filterVersion: function(searchfieldid, tableid, columnnum) {
        $("#" + tableid).DataTable().column(columnnum).search(
            $("#" + searchfieldid).val()
        ).draw();
    }
}