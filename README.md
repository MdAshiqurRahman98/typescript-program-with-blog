# Blog on TypeScript

## Interface vs Type
### Topic 1 — Differences Between Interfaces and Types in TypeScript

In TypeScript, both interface and type are used to define the shape of data, but they have some important differences in usage and capabilities.

Key Differences

1. Declaration Merging

Interfaces support declaration merging, meaning you can define the same interface multiple times and TypeScript will merge them.

Types do not support declaration merging.
```TypeScript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: { name: string; age: number }
```
2. Flexibility

Types are more flexible because they can represent unions, intersections, primitives, tuples, and more.

Interfaces are mainly used for object shapes.
```TypeScript
type Status = 'active' | 'inactive';
```
3. Extending

Interfaces use extends.

Types use intersection (&).
```TypeScript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
type Animal = { name: string };
type Dog = Animal & { breed: string };
```
4. Use Cases

Use interfaces for defining object structures and class contracts.

Use types for complex type logic or when working with unions.

Conclusion

Both are powerful tools. In general, use interfaces for scalability and readability, and types for flexibility and advanced type compositions.

## `keyof` keyword
### Topic 2 — What is the Use of the `keyof` Keyword in TypeScript?

The keyof keyword is a type operator that extracts the keys of an object type and creates a union of those keys. It helps make code safer by ensuring only valid property names are used.

Why Use `keyof`?

It enables type-safe property access and prevents errors when working with object keys.

Example
```TypeScript
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// "name" | "age"
Practical Example
function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}
```
If you try to pass an invalid key, TypeScript will produce a compile-time error, reducing runtime bugs.

Benefits

- Improves type safety

- Helps with generic programming

- Prevents invalid property access

- Makes refactoring safer

Conclusion

The `keyof` operator is essential for writing robust and maintainable TypeScript code, especially when building reusable utilities or working with dynamic object properties.

## Difference Between `any`, `unknown`, and `never`
### Topic 3 — Difference Between `any`, `unknown`, and `never` in TypeScript

TypeScript provides special types like any, unknown, and never to handle different scenarios when working with values whose types may not be straightforward.

`any`

The `any` type disables type checking. You can assign any value to it and perform any operation without errors.
```TypeScript
let value: any = 10;
value = "hello";
value.toUpperCase(); // allowed
```
When to use:
Only when migrating JavaScript code or when type information is truly unavailable.

Risk:
Loses type safety and may cause runtime errors.

`unknown`

The `unknown` type is safer than any. You must perform type checking before using the value.
```TypeScript
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
When to use:
When you don’t know the type yet but want safety.

`never`

The `never` type represents values that never occur, such as functions that throw errors or never return.
```TypeScript
function throwError(): never {
  throw new Error("Something went wrong");
}
```
When to use:
For exhaustive checks or functions that never complete.

Summary

`any` → No type safety

`unknown` → Safe unknown value

`never` → Impossible value

## Use of Enums
### Topic 4 — Use of Enums in TypeScript (Numeric and String Enum)

Enums allow you to define a set of named constants, making code more readable and maintainable.

Numeric Enum Example
```TypeScript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```
Numeric enums automatically assign numbers starting from 0.

String Enum Example
```TypeScript
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

let current: Status = Status.Success;
```
String enums are more descriptive and easier to debug.

Benefits of Enums

- Improves readability

- Prevents invalid values

- Makes code self-documenting

- Useful for fixed sets of options

## Example of Union and Intersection Types
### Topic 5 — Example of Union and Intersection Types in TypeScript

Union and intersection types help combine multiple types in flexible ways.

Union Type (|)

A union type allows a variable to be one of several types.
```TypeScript
function printId(id: number | string) {
  console.log(id);
}
```
Here, id can be either a number or a string.

Use case:
When a value can have multiple possible types.

Intersection Type (&)

An intersection type combines multiple types into one, requiring all properties.
```TypeScript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const worker: Staff = {
  name: "John",
  employeeId: 123
};
```
Use case:
When combining multiple object types into one.

Summary

Union → Either type

Intersection → Both types

---

## How to Run

1. Install Dependencies:
```bash
npm install
```
2. Compile TypeScript:
```bash
npx tsc solution.ts
```
3. Run the Program:
```bash
node solution.js
```