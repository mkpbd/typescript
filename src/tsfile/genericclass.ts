//A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};


// ============== Generic Constraints =====================

function loggingIdentity<Type>(arg: Type): Type {
    //console.log(arg.length);
  // Property 'length' does not exist on type 'Type'.
    return arg;
  }


  interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }


  // Using Type Parameters in Generic Constraints 


  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let xxx = { a: 1, b: 2, c: 3, d: 4 };
   
  //getProperty(x, "a");
  //getProperty(x, "m");


  //;=================== Using Class Types in Generics =======================

  // When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions. For example,

  function create<Type>(c: { new (): Type }): Type {
    return new c();
  }




  class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal {
    numLegs: number = 4;
  }
   
  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
   
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;

  // ================================== Generic Parameter Defaults ============================

  /**
   * 
   * 
   * Consider a function that creates a new HTMLElement. Calling the function with no arguments generates a Div; calling it with an element as the first argument generates an element of the argument’s type. 
   * You can optionally pass a list of children as well. Previously you would have to define it as:
   * 
   * 
   */



 // declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
//Cannot find name 'Container'.
//declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
////Cannot find name 'Container'.
//declare function create<T extends HTMLElement, U extends HTMLElement>(
 // element: T,
 // children: U[]
//): Container<T, U[]>;
//Cannot find name 'Container'.

