// Enums (Enumerations) TypeScript একটি উপাদান যা একটি নির্দিষ্ট মানের সেট নির্দিষ্ট করে থাকে 
// এবং সেই সেটের মধ্যে একটি মান নির্বাচন করার জন্য ব্যবহার করা হয়।
//  Enums মূলত কোনও কনসট্যান্ট ভ্যালুগুলির সেট নির্দিষ্ট করে, যা একটি নামের সাথে যুক্ত থাকে।

enum Color {
    Red,
    Green,
    Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: 1


enum Color2 {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

let myColor2: Color2 = Color2.Green;
console.log(myColor2); // Output: "GREEN"

enum Direction {
    Up,
    Down,
    Left,
    Right,
};

/**
 * Like classes, they contribute to the value and type namespace, which means
you can use Direction when annotating types, or in your JavaScript code
as values.
 */

// used as type
function move(direction: Direction) {
    // tbd.
}

// used as value
move(Direction.Up);

// Default
enum Direction3 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
};
enum Direction4 {
    Up = 1, // 1
    Down, // 2
    Left, // 3
    Right = 5, // 5
};


// same a union types 
type Direction2 = 0 | 1 | 2 | 3;

enum Status {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator",
};

function closeThread(threadId: number, status: Status): void {
    // tbd
}
closeThread(10, Status.Admin);

enum Roles {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator",
};
// closeThread(10, Roles.Admin); // get error because emnum only Status


type StatusByUnion = 'Admin' | 'User' | 'Moderator';

function closeThread1(threadId: number, status: StatusByUnion) {
    // write code hear

}

closeThread1(10, "User");


// "keyof" TypeScript একটি কীওয়ার্ড যা একটি ডাটা টাইপের প্রোপার্টির নামগুলির একটি ইটারেটেবল (প্রবর্তনশীল) লিস্ট তৈরি করে। 
// এই কীওয়ার্ডটি বিশেষভাবে অবজেক্টের প্রোপার্টি নেমগুলির রেফারেন্স নির্দিষ্ট করতে ব্যবহৃত হয়।
// এই "keyof" কীওয়ার্ডটি ব্যবহার করতে হলে, আপনি একটি টাইপ নির্দিষ্ট করতে হবে এবং 
// "keyof" এর পরে ঐ টাইপের নাম দিতে হবে। এটি তারপরে আপনাকে ঐ টাইপের সমস্ত প্রোপার্টির নামগুলির একটি লিস্ট দেয়, 
// যা আপনি অন্যান্য জায়গায় ব্যবহার করতে পারেন, যেমন প্রোপার্টি এক্সেস বা অন্যান্য অপারেশনের সাথে।
interface Person {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person;

// PersonKeys এখন একটি স্ট্রিং লিটারাল টাইপ "name" | "age" | "email"

type Person3 = {
    name: string;
    age: number;
    address: string;
};

type PersonKeys2 = keyof Person3;

// PersonKeys2 এখন একটি স্ট্রিং অ্যারে হবে: "name" | "age" | "address"


type Student = {
    name: string;
    age: number,
    address: string;
}
function accepetPerson(peson: Person3) {

}

const student: Student = {
    name: 'mostofa kamal',
    age: 23,
    address: 'kamal@gmail.com'
}
accepetPerson(student);

class Balance {
    private kind = "balance"
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}
class AccountNumber {
    private kind = "account"
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}


const account = new AccountNumber(12345678);
const balance = new Balance(10000);
function acceptBalance(balance: Balance) {
    // tbd
}

acceptBalance(balance); // ok
// acceptBalance(account);


type Credits = number & { _kind: "credits" };

type AccountNumbers = number & { _kind: 'accountNumber' };
const account1 = 12345678 as AccountNumbers;
let balance1 = 10000 as Credits;
const amount = 3000 as Credits;

function increase(balance: Credits, amount: Credits): Credits {
    return (balance + amount) as Credits;
}
balance1 = increase(balance1, amount);

const result = balance1 + amount; // result is number
const credits = (balance1 + amount) as Credits; // credits is Credits

// Hypothetical code, this does not work!
// type Balance2 = unique number;
// type AccountNumber3 = unique number;


type Entry = {
    // tbd.
};
function retrieve(contentType: string): Entry[] {
    // tbd.
    return [

    ]
}


type ContentType = "post" | "page" | "asset" | string;
function retrieve1(content: ContentType): Entry[] {
// tbd
    return [];
}


type ContentType1 = "post" | "page" | "asset" | string & {};

function ContentTypeWithStringObjed(content: ContentType1){
    
}

ContentTypeWithStringObjed('post') ; // OK 
ContentTypeWithStringObjed('postrrrr') ; // OK  because we use  string intersection blanck object string & {}