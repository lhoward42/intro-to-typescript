"use strict";
//count is of "type" number
var count = 5;
count = 10;
// count = "Laurice"
//Const's type is a literal
var fname = "Laurice";
//this makes a var of type any
// let testing;
var testing;
testing = 5;
function add(x, y) {
    var result = x + y;
    return result;
}
console.log(add(5, testing));
var student = {
    fname: "Richie",
    lname: "Rich",
    grade: 12
};
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
console.log(toString(student));
console.log(add(5, testing));
//Tuple
function sendMessage() {
    return ["success", {
            fname: "Laurice",
            lname: "Howard",
            grade: 12
        }];
}
var _a = sendMessage(), statusResult = _a[0], data = _a[1];
if (statusResult == "success")
    console.log(data.fname);
