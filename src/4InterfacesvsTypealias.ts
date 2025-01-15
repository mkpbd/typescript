// Understanding Interfaces Versus Type Aliases

// TypeScript declares object types in two ways: interfaces and type aliases. Which one should you use?

type PersonAsType = {
  name: string;
  age: number;
  address: string[];
  greet(): string;
};
interface PersonAsInterface {
  name: string;
  age: number;
  address: string[];
  greet(): string;
}

interface IPerson {
  name: string;
}
interface IPerson {
  age: number;
}

// IPerson is now { name: string; age: number; }

// Some data we collect in a web form
interface FormData {
  name: string;
  age: number;
  address: string[];
}
// A function that sends this data to a backend
function send(data: FormData) {
  console.log(data.entries()); // this compiles!
  // but crashes horrendously in runtime
}
