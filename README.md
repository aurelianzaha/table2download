# table2download
jQuery Table 2 Download plugin

Simple plugin that allows to donwload html table in csv or xls format.

Usage:
Load jQuery and table2download.js

and simply use:
```jQuery( "#table1" ).table_download({
```    format: "xls",
```    separator: ",",
```    filename: "download",
```    linkname: "Click here for XLS",
```    quotes: "\""
```});

format: "xls" / "csv"
