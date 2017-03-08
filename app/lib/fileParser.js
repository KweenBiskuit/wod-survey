'use strict';

const xlsx = require('xlsx');
var root = this;
root.countund = 0;
var ssf = require('ssf');

function fileParser() {}

/* TODO => get the worksheet by position, not by name; */
fileParser.prototype.readFile = function(file) {
    var arrayItems = [];

    var workbook;

    workbook = xlsx.readFile(file);
    var sheets = workbook.SheetNames;
    let worksheet = workbook.Sheets[sheets[0]];

    var parent = this;
    parent.item = {}
    var row = 3;

    do {
        var item = {};
        var Q1 = 'B' + row;
        var mail = 'C' + row;

        item.Q1 = worksheet[Q1].v;
        item.mail = worksheet[mail].v;
        arrayItems[arrayItems.length] = item;
        console.log('item', item)
        row += 1;


    } while (typeof(worksheet['A' + row]) !== 'undefined');



    return arrayItems;

}
module.exports = fileParser;