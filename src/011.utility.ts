/**
 * TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

This chapter covers the most popular utility types.
 */

interface Point {
    x: number;
    y: number;
    z: number;
}
type PartialPoint = Partial<Point>;
const p1: PartialPoint = { x: 10 };
const p2: PartialPoint = { y: 20, z: 30 };
type ReadonlyPoint = Readonly<Point>;
const p3: ReadonlyPoint = { x: 10, y: 20, z: 30 };
// p3.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
type PickedPoint = Pick<Point, "x" | "y">;
const p4: PickedPoint = { x: 10, y: 20 };
type OmittedPoint = Omit<Point, "z">;
const p5: OmittedPoint = { x: 10, y: 20 };
type PointWithDefault = Required<Partial<Point>>;
const p6: PointWithDefault = { x: 0, y: 0, z: 0 };
type PointRecord = Record<"a" | "b" | "c", Point>;
const points: PointRecord = {
    a: { x: 1, y: 2, z: 3 },
    b: { x: 4, y: 5, z: 6 },
    c: { x: 7, y: 8, z: 9 }
};
type PointMap = { [K in keyof Point]: string };
const pointDescriptions: PointMap = {
    x: "X Coordinate",
    y: "Y Coordinate",
    z: "Z Coordinate"
};
type PointUnion = Point[keyof Point];
const xValue: PointUnion = 10; // Can be number from any of the properties
type ExcludedPoint = Exclude<"x" | "y" | "z" | "w", "w">;
const excluded: ExcludedPoint = "x";
type ExtractedPoint = Extract<"x" | "y" | "z", "y" | "z" | "w">;
const extracted: ExtractedPoint = "y";
type NonNullablePoint = NonNullable<string | number | null | undefined>;
const nonNullable: NonNullablePoint = "Hello";
type ReturnTypeOfFunction = ReturnType<() => Point>;
const returnTypeValue: ReturnTypeOfFunction = { x: 1, y: 2, z: 3 };
type InstanceTypeOfClass = InstanceType<typeof GenericBox>;
const instance: InstanceTypeOfClass = new GenericBox<number>(42);
console.log(p1, p2, p3, p4, p5, p6, points, pointDescriptions, xValue, excluded, extracted, nonNullable, returnTypeValue, instance);

// Generic Classes
class GenericBox1<T> {
    private _value: T;
    constructor(value: T) {
        this._value = value;
    }
    public getValue(): T {
        return this._value;
    }
    public setValue(value: T): void {
        this._value = value;
    }
}
let stringBox1 = new GenericBox1<string>("Hello, Utility Types!");
console.log(stringBox1.getValue()); // Output: Hello, Utility Types!

let numberBox1 = new GenericBox1<number>(200);
console.log(numberBox1.getValue()); // Output: 200
// Generic Interfaces
interface KeyValuePair1<K, V> {
    key: K;
    value: V;
}
let kvp1: KeyValuePair1<string, number> = { key: "height", value: 180 };
console.log(kvp1); // Output: { key: "height", value: 180 }
// Generic Constraints
function getLength1<T extends { length: number }>(arg: T): number {
    return arg.length;
}
console.log(getLength1("TypeScript")); // Output: 10
console.log(getLength1([1, 2, 3, 4, 5])); // Output: 5
// console.log(getLength1(456)); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
// Generic Type Aliases
type Wrapper1<T> = {
    value: T;
    timestamp: Date;
};

