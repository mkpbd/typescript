"use strict";
// string data types 
let names = "mostofa kamal passa";
console.log(names);
let namebySingleQoute = 'this is a single qoute for developing ';
console.log(namebySingleQoute);
let nameByStringLitterals = `this is a string litterals we can use this easayl name `;
console.log(nameByStringLitterals);
// boolean 
let isTrue = false;
isTrue = true;
console.log(isTrue);
// number  data types 
let intnumber = 100;
let floatNumber = 20.5;
let hexierDecimalNumber = 0xff;
let octaNumber = 0o335;
let binaryNumber = 0b1010;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//==============  undefined 
let noDataAssign = undefined;
//================== null data 
let nullData = null;
//================  naver data types =============
let naverDataType;
//  ================ arrary   data types ==============
let friendsNameList;
friendsNameList = ["kamal", "jamal", 'tomal', `romal`, 'others'];
console.log(friendsNameList);
let numberList = [6, 7, 8, 0xff, 0o234, 0b1011100];
//============== UNION Types ===============
let unionTypes;
unionTypes = 'kamal';
unionTypes = 440;
// ==============  tuple data types ==============
let emplyee = ["mostofa kamal", 1];
// add element of tuple 
emplyee.push('tomal', 33);
console.log(emplyee);
let person = ["kamal", 32, true];
let user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
//==================== Tuple array ===================
let emplyeeTuplearr;
emplyeeTuplearr = [[1, 'kamal', 22, true], [2, 'jamal', 44, false]];
//============================ Enum Data types ==============
/**
 *
 * Numeric Enum
 * Numeric enums are number-based enums i.e. they store string values as numbers.
 *  */
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
var PrintMedia2;
(function (PrintMedia2) {
    PrintMedia2[PrintMedia2["Newspaper"] = 1] = "Newspaper";
    PrintMedia2[PrintMedia2["Newsletter"] = 2] = "Newsletter";
    PrintMedia2[PrintMedia2["Magazine"] = 3] = "Magazine";
    PrintMedia2[PrintMedia2["Book"] = 4] = "Book";
})(PrintMedia2 || (PrintMedia2 = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
    return PrintMedia.Book;
}
let mediaType = getMedia('Forbes'); // returns Magazine
//======================= Computed Enums: ======================
var PrintMedia3;
(function (PrintMedia3) {
    PrintMedia3[PrintMedia3["Newspaper"] = 1] = "Newspaper";
    PrintMedia3[PrintMedia3["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia3[PrintMedia3["Magazine"] = PrintMedia3.Newsletter * 3] = "Magazine";
    PrintMedia3[PrintMedia3["Book"] = 10] = "Book";
})(PrintMedia3 || (PrintMedia3 = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletter')
        return 5;
    return 0;
}
//========================== String Enum ================
/**
 * String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.
 */
var PrintMediaString;
(function (PrintMediaString) {
    PrintMediaString["Newspaper"] = "NEWSPAPER";
    PrintMediaString["Newsletter"] = "NEWSLETTER";
    PrintMediaString["Magazine"] = "MAGAZINE";
    PrintMediaString["Book"] = "BOOK";
})(PrintMediaString || (PrintMediaString = {}));
// Access String Enum 
PrintMediaString.Newspaper; //returns NEWSPAPER
PrintMediaString['Magazine']; //returns MAGAZINE
//==================== Heterogeneous Enum =====================
// Heterogeneous enums are enums that contain both string and numeric values.
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var PrintMediaMapping;
(function (PrintMediaMapping) {
    PrintMediaMapping[PrintMediaMapping["Newspaper"] = 1] = "Newspaper";
    PrintMediaMapping[PrintMediaMapping["Newsletter"] = 2] = "Newsletter";
    PrintMediaMapping[PrintMediaMapping["Magazine"] = 3] = "Magazine";
    PrintMediaMapping[PrintMediaMapping["Book"] = 4] = "Book";
})(PrintMediaMapping || (PrintMediaMapping = {}));
PrintMediaMapping.Magazine; // returns  3
PrintMediaMapping["Magazine"]; // returns  3
PrintMediaMapping[3]; // returns  Magazine
//============================= ypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type. =======
let code = 'test code ';
code = 30;
code = 'test';
let empId;
empId = 'esm23456kfaafadf3456';
empId = 33333;
function printCoord(pt) {
    console.log(pt.x + " " + pt.y);
}
printCoord({ x: 10, y: 20 });
function sanitizeInput(str) {
    return (str);
}
sanitizeInput("hllo kamal");
