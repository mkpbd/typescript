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
