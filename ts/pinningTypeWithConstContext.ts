let nameIsString: string = "mostofa kamal kamal";
// whit a const binding typescript will infer the exact literal type

const nameWithConstString: string = "WihtConstString";

type Circle11 = {
    radius: number,
    kind: "circle",
};
type Square11 = {
    x: number,
    kind: "square",
};
type Triangle11 = {
    x: number,
    y: number,
    kind: "triangle",
};


type Shape11 = Circle11 | Triangle11 | Square11;
function area(shape: Shape11) { /* ... */ }
const circle = {
    radius: 2,
    kind: "circle",
};
area(circle);


// Type assertion
const circle11 = {
    radius: 2,
    kind: "circle",
} as Circle;
area(circle11); // Works!

const circle12 = {
    radius: 2,
    kind: "circle",
} as const;

area(circle12); // Works!
// circle12.radius = 33;