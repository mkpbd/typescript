// string data types 
let names : string = "mostofa kamal passa";

console.log(names);

let namebySingleQoute : string = 'this is a single qoute for developing ';

console.log(namebySingleQoute);

let nameByStringLitterals = `this is a string litterals we can use this easayl name `;
console.log(nameByStringLitterals);


// boolean 

let isTrue : boolean = false;
isTrue = true;

console.log(isTrue);



// number  data types 

let intnumber : number = 100;
let floatNumber : number = 20.5;
let hexierDecimalNumber : number = 0xff;
let octaNumber : number =  0o335;
let binaryNumber : number = 0b1010;



//==============  undefined 

let noDataAssign : undefined = undefined;

//================== null data 

let nullData : null = null;

//================  naver data types =============

let naverDataType : never ;


//  ================ arrary   data types ==============


let friendsNameList : string[];
friendsNameList=["kamal", "jamal", 'tomal', `romal`, 'others'];

console.log(friendsNameList);

let numberList : number[]  = [6,7,8,0xff, 0o234, 0b1011100];

// ==============  tuple data types ==============

let emplyee :[string, number] = ["mostofa kamal", 1];

 // add element of tuple 
 emplyee.push('tomal', 33);

 console.log(emplyee);

let person : [string, number, boolean] = ["kamal", 32, true];

let user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

//==================== Tuple array ===================

let emplyeeTuplearr :[number, string, number, boolean][];
 emplyeeTuplearr = [[1, 'kamal', 22, true], [2, 'jamal', 44, false]];



 //============================ Enum Data types ==============

 /**
  * 
  * Numeric Enum
  * Numeric enums are number-based enums i.e. they store string values as numbers.
  *  */ 

 enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
  }

  enum PrintMedia2 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }


  function getMedia(mediaName: string) : PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }

    return PrintMedia.Book;
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine


//======================= Computed Enums: ======================

enum PrintMedia3 {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter')  return 5;
    return 0;
}


//========================== String Enum ================

/**
 * String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.
 */

enum PrintMediaString {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMediaString.Newspaper; //returns NEWSPAPER
PrintMediaString['Magazine'];//returns MAGAZINE

//==================== Heterogeneous Enum =====================

// Heterogeneous enums are enums that contain both string and numeric values.

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}


enum PrintMediaMapping {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
  PrintMediaMapping.Magazine;   // returns  3
  PrintMediaMapping["Magazine"];// returns  3
  PrintMediaMapping[3];         // returns  Magazine