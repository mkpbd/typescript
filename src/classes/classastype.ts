class Teacher {
    sayHello() {
        console.log("Take chances, make mistakes, get messy!");
    }
}
let teacher: Teacher;
teacher = new Teacher();
// Ok


class SchoolBus {
    getAbilities() {
        return ["magic", "shapeshifting"];
    }
}
function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
}
withSchoolBus(new SchoolBus());
// Ok

//----------- Classes and Interfaces
interface Learner {
    name: string;
    study(hours: number): void;
}