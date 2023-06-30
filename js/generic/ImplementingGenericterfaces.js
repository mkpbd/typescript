"use strict";
class MoviePart {
    constructor(role, speaking) {
        this.role = role;
        this.speaking = speaking;
    }
}
const part = new MoviePart("Miranda Priestly", true);
part.role;
// Type: string
//class IncorrectExtension implements ActingCredit<string> {
//  role: 'hello';
//   role: boolean;
// ~~~~~~~
// Error: Property 'role' in type 'IncorrectExtension' is not
// assignable to the same property in base type 'ActingCredit<string>'.
// Type 'boolean' is not assignable to type 'string'.
//}
