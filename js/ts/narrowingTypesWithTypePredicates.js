"use strict";
// predicate" হলো একটি ফাংশন যা একটি বৈশিষ্ট্য বা শর্ত যাচাই করে এবং সেটির ভিত্তিতে একটি লজিক্যাল মান প্রদান করে। 
// TypeScript এই প্রিন্সিপলে ভিত্তি করে "predicate" টাইপ দিয়ে কাজ করে, যার মাধ্যমে আপনি একটি বৈশিষ্ট্য বা শর্ত যাচাই করতে 
// এবং একটি লজিক্যাল মান প্রদান করতে পারেন।
// সাধারণভাবে, প্রেডিকেট ফাংশন একটি  টাইপের প্যারামিটার নেয় এবং একটি বুলিয়ান মান ফেরত দেয়।
// এটি  টাইপের সম্পর্কিত একটি প্রোপার্টি বা কোনও কাস্টিং লজিক পরীক্ষা করে সঠিক টাইপের ডেটা আছে কিনা তা যাচাই করে।
// isString ফাংশনটি একটি প্রেডিকেট ফাংশন, যা একটি মূল ডেটা টাইপকে চেক করে দেখে যে কি এটি স্ট্রিং টাইপের ডেটা কিনা।  
function isString(value) {
    return typeof value === "string";
}
function printLengthIfString(input) {
    if (isString(input)) {
        // এই ব্লকে, TypeScript জানে যে input একটি স্ট্রিং টাইপ
        console.log(input.length);
    }
    else {
        console.log("Not a string");
    }
}
printLengthIfString("Hello, TypeScript!"); // এটি স্ট্রিং, তাই লেংথ প্রিন্ট হবে
printLengthIfString(42); // এটি স্ট্রিং নয়, তাই "Not a string" প্রিন্ট হবে
// isNumber একটি প্রেডিকেট ফাংশন যা প্রথম আর্গুমেন্ট
// যে ভ্যালু প্রদান করা হলো সেটি একটি নাম্বার কি না তা পরীক্ষা করে এবং একটি লজিক্যাল মান প্রদান করে।
function isNumber(value) {
    return typeof value === "number";
}
function doubleIfNumber(value) {
    if (isNumber(value)) {
        return value * 2;
    }
    return value;
}
console.log(doubleIfNumber(5)); // এটি দ্বিগুণ হবে: 10
console.log(doubleIfNumber("hello")); // এটি সাধারণ স্ট্রিং থাকবে: "hello"
function rollDeice(value) {
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) {
    }
}
function isDice(value) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value);
}
// function isDiceString(value: string): value is Dice {
//     // Error: A type predicate's type must be assignable to
//     // its parameter's type. Type 'number' is not assignable to type 'string'.
//     return ["1", "2", "3", "4", "5", "6"].includes(value);
// }
// Correct on a type-level
// incorrect set of values on a value-level
function isDiceWithReturnTypeDice(value) {
    return [1, 2, 3, 4, 5, 7].includes(value);
}
//Actually, any condition works for TypeScript. Return true and TypeScript will think value is Dice.
function isDiceWithReturnTrue(value) {
    return true;
}
