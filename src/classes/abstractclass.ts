abstract class School {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract getStudentTypes(): string[];
}
class Preschool extends School {
    getStudentTypes() {
        return ["preschooler"];
    }
}

let school: School;
school = new Preschool("Sunnyside Daycare");
// Ok
