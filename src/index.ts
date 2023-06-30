// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);


// =============== form

const form = document.getElementById("form")!;

const form1 = document.querySelector("form") as HTMLFormElement;
const form2 = <HTMLFormElement>document.querySelector("form");

const selectElement = document.querySelector("select") as HTMLSelectElement;

const radioElement = document.querySelector("#rr") as HTMLInputElement;
// const checkboxElement = document.querySelector("checkbox") as HTMLCheckboxElement;
const checkboxElement = document.querySelector("checkbox")!;
