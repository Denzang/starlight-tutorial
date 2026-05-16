---
title: JavaScript Functions
description: All About JavaScript Functions
---

## Functions

```js
// Functions
function logger() {
  // Function Definition
  console.log("My Name is John");
}
logger(); // Function Calling/ invoking / running

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 6);
console.log(appleJuice);
// My Name is John
// 5 6
// Juice with 5 appleas and 6 oranges
```

### Function Declaration and Expression

```js
// JavaScript Function Declaration
function calcAge(birthYear) {
  return 2024 - birthYear;
}
const age = calcAge(1994);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1997);
console.log(age, age2); // 30 27
```

### Arrow Function

```js
// Arrow Function
// Like Lambda Function in Python. Easy to write a function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `Hello ${firstName}, you will retire in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Jackson"));
// Hello Jackson, you will retire in 35 years.
```

### Functions Calling Other Functions

```js
// Function(s) calling other function(s)
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function FruitProcessor(apples, oranges) {
  applePieces = cutFruitPieces(apples);
  orangePieces = cutFruitPieces(oranges);
  const juice = `Juice made with ${applePieces} pieces from ${oranges} oranges & ${orangePieces} pieces from ${apples} apples`;
  return juice;
}

console.log(FruitProcessor(3, 3));
// Juice made with 12 pieces from 3 oranges & 12 pieces from 3 apples
```
