"use strict";
/**
 *
 * ======================== Property Modifiers ===============================
Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

Optional Properties
Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases,
we can mark those properties as optional by adding a question mark (?) to the end of their names.
 *
 */
function paintShape(opts) {
    // ...
}
function getShape() {
    let aa;
    //return aa.shape;
}
const shape = getShape();
function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    // obj.prop = "hello";
    //Cannot assign to 'prop' because it is a read-only property.
}
function visitForBirthday(home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
function evict(home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    //home.resident = {
    // Cannot assign to 'resident' because it is a read-only property.
    // name: "Victor the Evictor",
    //age: 42,
    // };
}
