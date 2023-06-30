"use strict";
class School {
    constructor(name) {
        this.name = name;
    }
}
class Preschool extends School {
    getStudentTypes() {
        return ["preschooler"];
    }
}
let school;
school = new Preschool("Sunnyside Daycare");
// Ok
