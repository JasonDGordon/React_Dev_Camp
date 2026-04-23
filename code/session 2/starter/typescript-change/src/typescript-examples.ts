// # 🧩 Adding Types to Variables
// 👉 Types are optional, but useful

const name: string = "Jason";
const count: number = 10;
const isActive: boolean = true;

/////////////////////////////////////

// # ⚡ Type Inference
// 👉 TypeScript infers the type automatically

let name2 = "Jason";
name2 = 123; // ❌ Error


/////////////////////////////////////

// # 🧩 Arrays
const numbers: number[] = [1, 2, 3];

const names: string[] = ["Ash", "Misty"];

/////////////////////////////////////

// # 🧩 Object Types

type User = {
  name: string;
  age: number;
};

/////////////////////////////////////

// # 🧩 Optional Properties

type User2 = {
  name: string;
  age?: number;
};
//👉 `age` is optional

/////////////////////////////////////

// # 🧩 Union types
type Name = "Ash" | "Misty" | "Brock";

let trainerName: Name = "Ash"; // gives intellisense
trainerName = "Jason"; // ❌ Error

let myVar: Name | number | User;

myVar = "Brock";
myVar = 123;
myVar = { name: "Jason", age: 30 };
myVar = true; // ❌ Error

/////////////////////////////////////

//# 🧩 Nullish Coalescing

const name3: string | null = null;

const displayName = name ?? "Default Name"; // Output: Default Name

//👉 Only falls back if null or undefined

/////////////////////////////////////

//# 🧩 Discriminated Unions

type Status =
  | { type: "loading" }
  | { type: "success"; data: string }
  | { type: "error"; message: string };

let stat: Status = { type: "loading" };
stat = { type: "success", data: "It was super effective" };
stat = { type: "error", message: "Magikarp used Splash... but nothing happened" };
console.log(stat);

//👉 Useful for handling different states

