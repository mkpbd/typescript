class PersonC {
  constructor(public name: string) {
    this.name = name;
  }
  hi() {
    console.log(this.name);
  }
  hi_timeout() {
    // "this" inside setTimeout refers to the global object (window)

    let self = this;
    setTimeout(function () {
      console.log(self.name);
    }, 0);
  }
  hi_timeout_arrow() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  }
}
const person2 = new PersonC("Stefan");
person2.hi(); // prints "Stefan"
person2.hi_timeout(); // prints "undefined"
person2.hi_timeout_arrow(); // prints "Stefan"

const button = document.querySelector("button");
button?.addEventListener("click", function () {
  this.classList.toggle("clicked");
});
