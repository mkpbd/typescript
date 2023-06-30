"use strict";
class Student {
    constructor(name) {
        this.name = name;
    }
    study(hours) {
        for (let i = 0; i < hours; i += 1) {
            console.log("...studying...");
        }
    }
}
class ReportCard {
    constructor(grades) {
        this.grades = grades;
    }
    report() {
        return this.grades.join(", ");
    }
}
class Teacher1 {
    teach() {
        console.log("The surest test of discipline is its absence.");
    }
}
class StudentTeacher extends Teacher1 {
    learn() {
        console.log("I cannot afford the luxury of a closed mind.");
    }
}
const teacher1 = new StudentTeacher();
teacher1.teach();
// Ok (defined on base)
teacher1.learn();
// Ok (defined on subclass)
