# TypeScript Resources

TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.

_"Would you rather have "silly" errors during development, or insanity-inducing errors in production?"_ - ConfuciusBateman

Also, checkout how we can use TypeScript with React over in the [React Section](https://github.com/ryan-neil/typescript-resources/tree/main/react) of the repo!

### Resources

- [TypeScript Deep Dive](https://github.com/basarat/typescript-book): Basarat Ali Syed
- [Understanding TypeScript’s type notation](https://2ality.com/2018/04/type-notation-typescript.html): Dr. Axel Rauschmayer
- [TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA): Fireship.io

### Tutorials

- [TypeScript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM): Fireship.io
- [TypeScript Crash Course](https://www.youtube.com/watch?v=BCg4U1FzODs): Traversy Media

### Table of Contents

- [Pros and Cons](#Pros-and-Cons)
- [Compiling TypeScript](#Compiling-TypeScript)
- [Types](#Types)
  - [Basic Types](#Basic-Types)
  - [Function Types](#Function-Types)
  - [Interfaces](#Interfaces)
  - [Generics](#Generics)

## Pros and Cons

Pros:

- More robust
- Easily spot bugs
- Predictability
- Readability
- Popular

Cons:

- More upfront code to write
- More to learn
- Required compilation
- Not _true_ static typing

## Compiling TypeScript

- TypeScript uses `.ts` and `.tsx` extensions
- TSC (TypeScript Compiler) is used to compile `.ts` files down to JavaScript
- Can watch files and report errors at compile time
- The `tsconfig.json` file is used to configure how TypeScript works

## Types

### Basic Types:

```tsx
// good
const id: number = 7;
const name: string = 'Katie;
const isLoggedIn: boolean = false;

let something: any = 'This can be any type';
something = true;
```

Array Types:

```tsx
// good
const heros: string[] = ['Thor', 'Iron Man', 'Hulk']; // this can only hold an array of strings
const years: number[] = [1992, 1988, 1993]; // this can only hold an array of numbers
const arr: any[] = [7, 'Hello', true]; // this can be an array of any types
```

Tuples:

With tuples we can specify the exact types within the array.

```tsx
// good
const person: [number, string, boolean] = [2, 'Katie', true];

// bad
const person: [number, string, boolean] = [2, 'Katie', 7]; // error: expects last index to have boolean
```

Tuple Array:

```tsx
// good
let employee: [number, string][];

employee = [
  [1, 'Katie'],
  [2, 'Ryan'],
  [3, 'Peter'],
];
```

Unions:

If we want a particular variable to hold more than one type we can achieve this with _Unions_.

```tsx
// good
let id: number | string = 7;
id = 'Katie';

// bad
id = true;
```

Enums (Enumerated Types):

Enums allow us to define a set of named constants either numeric or strings.

```tsx
// numeric

enum Direction {
  Up, // defaults to 0
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // -> 0
console.log(Direction.Down); // -> 1 ...
```

We can also set default values for `enums`:

```tsx
// numeric

enum Direction {
  Up = 2,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // -> 2
console.log(Direction.Down); // -> 3 ...

// strings

enum Direction {
  Up = 'Up,
  Down = 'Down,
  Left = 'Left,
  Right = 'Right,
}

console.log(Direction.Down); // -> Down
```

Objects:

```tsx
// okay
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Katie',
};

// good
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Katie',
};
```

Type Assertion;

This is explicitly telling the compiler that we want to treat an entity as a different type.

```tsx
// original type = any
let cid: any = 7;

// assertion (opt 1)
let customerId = <number>cid; // customerId should now be a number
// assertion (opt 2)
let customerId = cid as number;
```

### Function Types:

Each argument being passed in has to be a certain type, as well as the function return value.

```tsx
// with return value
function sumNums(x: number, y: number): number {
  return x + y;
}

// without return value (void)
function logger(msg: string | number): void {
  console.log(msg);
}
```

### Interfaces

This can be considered like a custom type or a specific structure to an object or a function.

```tsx
// define the interface
interface UserInterface {
  id: number;
  name: string;
  isLoggedIn: boolean;
}

// pass in as a type object
const user: UserInterface = {
  id: 1,
  name: 'Katie',
  isLoggedIn: true,
};
```

> Note: interfaces cannot be used with primitives or unions, use types for these.

Optional properties:

```tsx
interface UserInterface {
  id: number;
  name: string;
  isLoggedIn?: boolean; // adding a ? makes this property optional
}

// good
const user: UserInterface = {
  id: 1,
  name: 'Katie',
};
```

Read-only properties:

```tsx
interface UserInterface {
  readonly id: number; // this property is unchangeable
  name: string;
  isLoggedIn?: boolean;
}

const user: UserInterface = {
  id: 1,
  name: 'Katie',
};

// bad
user.id = 7;
```

Interfaces with functions:

```tsx
interface MathFunc {
  // x arg is type number, y arg is type number and return value is type number
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
```

### Generics

Generics are basically used to build reusable components.

```tsx
function getArray(items: any[]): any[] {
  return [...items];
}

const numArray = getArray([2, 4, 6, 3]);
const strArray = getArray(['Katie', 'Ryan', 'Peter']);

// this works
numArray.push('Hello');
console.log(numArray); // -> [ 2, 4, 6, 3, 'Hello' ]
```

To make it so `numArray` can only take in type number we can use a generic `<T>`. Let's refactor the above code to represent this:

```tsx
function getArray<T>(items: T[]): T[] {
  return [...items];
}

const numArray = getArray<number>([2, 4, 6, 3]);
const strArray = getArray<string>(['Katie', 'Ryan', 'Peter']);

// bad
numArray.push('Hello');
strArray.push(true);

// good
numArray.push(10);
strArray.push('John');
```
