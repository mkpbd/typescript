let xx = {
    a() {
        return this
    }
}
xx.a() // this is the object x in the body of a()

let ax = xx.a
//a() // now, this is undefined in the body of a()

//=== Say you have a utility function for formatting dates that looks like this:
function fancyDate() {
    // return `${this.getDate()}/${this.getMonth}/${this.getFullYear()}`
}

function fancyDate2(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}