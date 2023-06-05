//Without generics, we would either have to give the identity function a specific type:

function identity(arg: number): number {
    return arg;
  }

  // Or, we could describe the identity function using the any type: 

  function identityAny(arg: any): any {
    return arg;
  }




   // Generic types use

  function identityGen<Type>(arg: Type): Type {
    return arg;
  }

  let output = identityGen<string>("myString");
  let outputNum = identityGen<number>(55);
  let outputObject = identityGen<object>({a:'a', b:3});


  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

  function loggingIdentitys<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }


  function identityff<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentityf: <Type>(arg: Type) => Type = identityff;


  function identity1<Input>(arg: Input): Input {
    return arg;
  }
   
  let myIdentity: <Input>(arg: Input) => Input = identity1;


  function identity2<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity2: { <Type>(arg: Type): Type } = identity2;


// Which leads us to writing our first generic interface. Let’s take the object literal from the previous example and move it to an interface:


  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
   
  function identity3<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity3: GenericIdentityFn = identity3;



  interface GenericIdentityFnf<Type> {
    (arg: Type): Type;
  }
   
  function identity4<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity4: GenericIdentityFnf<number> = identity4;