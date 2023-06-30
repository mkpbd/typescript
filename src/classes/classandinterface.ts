interface Learner {
    name: string;
    study(hours: number): void;
}

class Student implements Learner {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    study(hours: number) {
        for (let i = 0; i < hours; i += 1) {
            console.log("...studying...");
        }
    }
}


// --------------------- multipule interface --------------------
interface Graded {
    grades: number[];
}

interface Reporter {
    report: () => string;
}


class ReportCard implements Graded, Reporter {
    grades: number[];
    constructor(grades: number[]) {
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


