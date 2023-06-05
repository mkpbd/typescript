
/** Let’s imagine a Box type that can contain any value - strings, numbers, Giraffes, whatever. */

interface Box {
    contents: any;
}



/**
 * 
 * Right now, the contents property is typed as any, which works, but can lead to accidents down the line.
 * We could instead use unknown, but that would mean that in cases where we already know the type of contents, we’d need to do precautionary checks, or use error-prone type assertions.
 * 
 */


//   interface Box {
//     contents: unknown;
//   }


let x: Box = {
    contents: "hello world",
};

// we could check 'x.contents'
if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
}

// or we could use a type assertion
console.log((x.contents as string).toLowerCase());


//=================One type safe approach would be to instead scaffold out different Box types for every type of contents.

interface NumberBox {
    contents: number;
}

interface StringBox {
    contents: string;
}

interface BooleanBox {
    contents: boolean;
}

/// ============ But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents;
}

/// That’s a lot of boilerplate. Moreover, we might later need to introduce new types and overloads. This is frustrating, since our box types and overloads are all effectively the same.


//=================== Instead, we can make a generic Box type which declares a type parameter. =====================


interface Boxes<Type> {
    contents: Type;
  }


  /***
   * 
   * 
   * Think of Box as a template for a real type, where Type is a placeholder that will get replaced with some other type. When TypeScript sees Box<string>,
   *  it will replace every instance of Type in Box<Type> with string, and end up working with something like { contents: string }. 
   * In other words, Box<string> and our earlier StringBox work identically.
   * 
   */
  let box: Boxes<string>;


  interface StringBox {
    contents: string;
  }
   
  let boxA: Boxes<string> = { contents: "hello" };
  boxA.contents;
          
  //(property) Box<string>.contents: string
   
  let boxB: StringBox = { contents: "world" };
  boxB.contents;
          
 // (property) StringBox.contents: string



 interface Apple {
    // ....
  }
   
  // Same as '{ contents: Apple }'.
  type AppleBox = Boxes<Apple>;



  // ================= This also means that we can avoid overloads entirely by instead using 


  function setContentss<Type>(box: Boxes<Type>, newContents: Type) {
    box.contents = newContents;
  }

  //================= It is worth noting that type aliases can also be generic. We could have defined our new Box<Type> interface, which was:

  interface Boxeses<Type> {
    contents: Type;
  }

  // by using a type alias instead:

  type Boxese<Type> = {
    contents: Type;
  };

  type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNullf<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null
 