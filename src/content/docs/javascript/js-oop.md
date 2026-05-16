---
title: Object Oriented Programming
description: All about Object Oriented Programming in JavaScript
---

**Features of OOP:**

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

:::note
OOP in JS uses Prototypal Inheritance
:::

## 3 ways of Implementing Prototypal Inheritance in JS

1. Constructor Functions
   - Technique to create objects from a function
   - **Examples** - Arrays, Maps & Sets
2. ES6 Classes
   - Modern alternative to constructive function syntax
   - ES6 classes work exactly like **constructor classes**
   - ES6 Classes do not behave like classes in "classical OOP"
3. Object.create()
   - Easiest & most straight-forward way to create objects
   - Not commmonly used.

---

### Constructor Functions

```js
console.log(`${fatherName} is your father`);
let x = 6;
var y = 9;
console.log(x, y);
```

**Note** - Never create Functions inside constructor functions.

```js
// Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = 2024 - this.birthYear;
};

console.log(new Person("Jonas", 1994));
// 1. New empty object is created
// 2. Function is called, this = empty object
// 3. The empty object is linked to a prototype
// 4. Function  automatically returns empty object

const matilda = new Person("matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jack instanceof Person); // Checking if an object is an isntance of the constructor function
```

```txt
// Output
Person {firstName: 'Jonas', birthYear: 1994, calcAge: 30}
Person {firstName: 'matilda', birthYear: 2017, calcAge: 7}
Person {firstName: 'Jack', birthYear: 1975, calcAge: 49}
true
```

### Prototypes

```js

```
