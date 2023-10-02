let names = "Stefan"; // names is string

const name1 = "Stefan"; // name1 is "Stefan"

//Object types behave slightly different. let bindings still infer the broader set.
// person is { name: string }
let person = { name: "Stefan" };
//But so do const bindings.
// person1 is { name: string }
const person1 = { name: "Stefan" };
person1.name = "Not Stefan"; // works!

// Exact type
const circle1: Circle1 = {
    radius: 2,
    kind: "circle",
};
area(circle1); // Works!
// Broader set
const circle2: Shape2 = {
    radius: 2,
    kind: "circle",
};
area(circle2); // Also works!