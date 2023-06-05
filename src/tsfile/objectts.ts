
// person is an object types we pass parameter 

function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

  greet({name: "kamal", age: 33});




  // we  can be named by using either an interface:

  interface Person {
    name: string;
    age: number;
  }
   
  function greetInterfaceForObject(person: Person) {
    return "Hello " + person.name;
  }


  greetInterfaceForObject({name:'jamal', age: 55});



  // or a type alias: using for object type pass

  