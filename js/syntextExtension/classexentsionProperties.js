"use strict";
/**
 *
 * I recommend avoiding using class parameter properties unless you’re working in a project
 * that heavily uses classes or a framework that would benefit from them.
 */
class Engineer {
    constructor(area) {
        this.area = area;
        console.log(`this is area ${area}`);
    }
}
let rr = new Engineer("reactangle chart ");
rr.area;
class NamedEngineer {
    constructor(firstName, lastName, area) {
        this.area = area;
        this.fullName = `${firstName} ${lastName}  ${area} `;
    }
}
