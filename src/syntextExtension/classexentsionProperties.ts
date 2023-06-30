/**
 * 
 * I recommend avoiding using class parameter properties unless you’re working in a project 
 * that heavily uses classes or a framework that would benefit from them.
 */
class Engineer {
    readonly area: string

    constructor(area: string) {
        this.area = area;

        console.log(`this is area ${area}`);
    }
}

let rr = new Engineer("reactangle chart ");
rr.area;