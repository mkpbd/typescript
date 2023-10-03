"use strict";
// Enums (Enumerations) TypeScript একটি উপাদান যা একটি নির্দিষ্ট মানের সেট নির্দিষ্ট করে থাকে 
// এবং সেই সেটের মধ্যে একটি মান নির্বাচন করার জন্য ব্যবহার করা হয়।
//  Enums মূলত কোনও কনসট্যান্ট ভ্যালুগুলির সেট নির্দিষ্ট করে, যা একটি নামের সাথে যুক্ত থাকে।
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor); // Output: 1
var Color2;
(function (Color2) {
    Color2["Red"] = "RED";
    Color2["Green"] = "GREEN";
    Color2["Blue"] = "BLUE";
})(Color2 || (Color2 = {}));
let myColor2 = Color2.Green;
console.log(myColor2); // Output: "GREEN"
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
/**
 * Like classes, they contribute to the value and type namespace, which means
you can use Direction when annotating types, or in your JavaScript code
as values.
 */
// used as type
function move(direction) {
    // tbd.
}
// used as value
move(Direction.Up);
// Default
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 0] = "Up";
    Direction3[Direction3["Down"] = 1] = "Down";
    Direction3[Direction3["Left"] = 2] = "Left";
    Direction3[Direction3["Right"] = 3] = "Right";
})(Direction3 || (Direction3 = {}));
;
var Direction4;
(function (Direction4) {
    Direction4[Direction4["Up"] = 1] = "Up";
    Direction4[Direction4["Down"] = 2] = "Down";
    Direction4[Direction4["Left"] = 3] = "Left";
    Direction4[Direction4["Right"] = 5] = "Right";
})(Direction4 || (Direction4 = {}));
;
var Status;
(function (Status) {
    Status["Admin"] = "Admin";
    Status["User"] = "User";
    Status["Moderator"] = "Moderator";
})(Status || (Status = {}));
;
function closeThread(threadId, status) {
    // tbd
}
closeThread(10, Status.Admin);
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["User"] = "User";
    Roles["Moderator"] = "Moderator";
})(Roles || (Roles = {}));
;
function closeThread1(threadId, status) {
    // write code hear
}
closeThread1(10, "User");
function accepetPerson(peson) {
}
const student = {
    name: 'mostofa kamal',
    age: 23,
    address: 'kamal@gmail.com'
};
accepetPerson(student);
class Balance {
    constructor(value) {
        this.kind = "balance";
        this.value = value;
    }
}
class AccountNumber {
    constructor(value) {
        this.kind = "account";
        this.value = value;
    }
}
const account = new AccountNumber(12345678);
const balance = new Balance(10000);
function acceptBalance(balance) {
    // tbd
}
acceptBalance(balance); // ok
const account1 = 12345678;
let balance1 = 10000;
const amount = 3000;
function increase(balance, amount) {
    return (balance + amount);
}
balance1 = increase(balance1, amount);
const result = balance1 + amount; // result is number
const credits = (balance1 + amount); // credits is Credits
function retrieve(contentType) {
    // tbd.
    return [];
}
function retrieve1(content) {
    // tbd
    return [];
}
function ContentTypeWithStringObjed(content) {
}
ContentTypeWithStringObjed('post'); // OK 
ContentTypeWithStringObjed('postrrrr'); // OK  because we use  string intersection blanck object string & {}
