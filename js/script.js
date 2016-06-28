jQuery( document ).ready(function() {
    jQuery( "#table1" ).table_download({
        format: "xls",
        separator: ",",
        filename: "download",
        linkname: "Click here for XLS",
        quotes: "\""
    });
    
    jQuery( "#table2" ).table_download({
        format: "csv",
        separator: "-",
        filename: "download",
        linkname: "Export CSV",
        quotes: "\""
    });    
    
});


