Getting Started Locally

Install  Type Script globally  run the following command

    npm  i -g typescript

    tsc --version

**Running Locally**

    tsc --init

JavaScript  Types

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hi!", "abc123", …
5. number // 0, 2.1, -4, …
6. bigint // 0n, 2n, -4n, …
7. symbol // Symbol(), Symbol("hi")

For each of these values, TypeScript understands the type of the value to be one of the seven basic primitives

1. null; // null
2. undefined; // undefined
3. true; // boolean
4. "Louise"; // string
5. 1337; // number
6. 1337n; // bigint
7. Symbol("Franklin"); // symbol

**Type Annotations**

```typescript
let  rocker;
// Type: any
rocker = "Joan Jett";
// Type: string
rocker.toUpperCase();
// Ok
rocker = 19.58;
// Type: number
rocker.toPrecision(1);
// Ok
rocker.toUpperCase();
// ~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.
```

Union Types

Giving it an explicit string **|** null type annotation means TypeScript will allow it to be assigned values of type string:

```typescript
let thinker: string | null =null;
if(Math.random()>0.5)
{
thinker ="Susanne Langer";
// Ok
}
```

The order of a union type declaration does not matter. You can write **boolean | numbe**r or
**number | boolean** and TypeScript will treat both the exact same.

##### Union Properties

When a value is known to be a union type, TypeScript will only allow you to access member properties that exist on all possible types in the union. It will give you a type-checking error if you try to access a type that doesn't exist on all possible types.

```typescript
let thinker: string | number ;
if (Math.random() > 0.5) {
  thinker = "Susanne Langer";
  // Ok
}
thinker.toString();
// Ok
thinker.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
thinker.toFixed();
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
```

**Type Aliases**

Most union types you’ll see in code will generally only have two or three constituents. However, you may sometimes find a use for longer union types that are inconvenient to type out repeatedly.
Each of these variables can be one of four possible types

```typescript
let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

```

```typescript
type  RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;


```
