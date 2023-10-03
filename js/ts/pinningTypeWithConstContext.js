"use strict";
let nameIsString = "mostofa kamal kamal";
// whit a const binding typescript will infer the exact literal type
const nameWithConstString = "WihtConstString";
function area(shape) { }
const circle = {
    radius: 2,
    kind: "circle",
};
area(circle);
// Type assertion
const circle11 = {
    radius: 2,
    kind: "circle",
};
area(circle11); // Works!
const circle12 = {
    radius: 2,
    kind: "circle",
};
area(circle12); // Works!
// circle12.radius = 33;
