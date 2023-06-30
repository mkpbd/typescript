class Lesson {
    subject: string;
    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends Lesson {
    url: string;
    constructor(subject: string, url: string) {
        super(subject);
        this.url = url;
    }
}
let lesson: Lesson;
lesson = new Lesson("coding");
// Ok
lesson = new OnlineLesson("coding", "oreilly.com");
// Ok
let online: OnlineLesson;
online = new OnlineLesson("coding", "oreilly.com");
// Ok



class PastGrades {
    grades: number[] = [];
}
class LabeledPastGrades extends PastGrades {
    label?: string;
}
let subClass: LabeledPastGrades;
subClass = new LabeledPastGrades();
// Ok
subClass = new PastGrades();
// Ok

//===================== Constructors Overwrite =================================
class GradeAnnouncer {
    message: string;
    constructor(grade: number) {
        this.message = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
}
class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}
