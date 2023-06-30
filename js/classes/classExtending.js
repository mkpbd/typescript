"use strict";
class Lesson {
    constructor(subject) {
        this.subject = subject;
    }
}
class OnlineLesson extends Lesson {
    constructor(subject, url) {
        super(subject);
        this.url = url;
    }
}
let lesson;
lesson = new Lesson("coding");
// Ok
lesson = new OnlineLesson("coding", "oreilly.com");
// Ok
let online;
online = new OnlineLesson("coding", "oreilly.com");
// Ok
class PastGrades {
    constructor() {
        this.grades = [];
    }
}
class LabeledPastGrades extends PastGrades {
}
let subClass;
subClass = new LabeledPastGrades();
// Ok
subClass = new PastGrades();
// Ok
//===================== Constructors Overwrite =================================
class GradeAnnouncer {
    constructor(grade) {
        this.message = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
}
class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}
