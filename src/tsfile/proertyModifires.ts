/**
 * 
 * ======================== Property Modifiers ===============================
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

Optional Properties
Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, 
we can mark those properties as optional by adding a question mark (?) to the end of their names.
 * 
 */

type Shape = {
    x: number,
    y: number,

}

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // ...
}

function getShape() {

    let aa: PaintOptions;
    //return aa.shape;
}
const shape = getShape();
//   paintShape({ shape });
//   paintShape({ shape, xPos: 100 });
//   paintShape({ shape, yPos: 100 });
//   paintShape({ shape, xPos: 100, yPos: 100 });




interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    // obj.prop = "hello";
    //Cannot assign to 'prop' because it is a read-only property.
}



/**
 * 
 * Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. 
 * It just means the property itself can’t be re-written to.
 * 
 */



interface Home {
    readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}

function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.

    //home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
    // name: "Victor the Evictor",
    //age: 42,
    // };


}