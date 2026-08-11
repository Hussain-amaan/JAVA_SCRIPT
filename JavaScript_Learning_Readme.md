# JavaScript Learning Series 🚀

A personal JavaScript learning journey using **VS Code**, focused on
building strong fundamentals before moving into React.

------------------------------------------------------------------------

## 📚 Progress So Far

### 1. Variables

Learned how to declare and use variables:

``` javascript
let name = "Amaan";
const age = 22;
```

Key concepts: - `let` - `const` - Variable assignment - Reassignment

------------------------------------------------------------------------

### 2. Data Types

Learned the basic JavaScript data types:

-   String
-   Number
-   Boolean
-   `undefined`
-   `null`

Example:

``` javascript
let name = "Amaan";     // String
let age = 22;           // Number
let student = true;     // Boolean
let x;                  // undefined
let value = null;       // null
```

------------------------------------------------------------------------

### 3. Operators

Covered basic operators used in JavaScript:

-   Arithmetic operators: `+`, `-`, `*`, `/`, `%`
-   Comparison operators: `>`, `<`, `>=`, `<=`, `==`, `===`
-   Logical operators: `&&`, `||`, `!`
-   Increment/decrement: `++`, `--`

Example:

``` javascript
let a = 5;

console.log(a++);
console.log(a);
console.log(++a);
```

------------------------------------------------------------------------

# 🔀 4. Conditional Statements

Learned:

### `if / else if / else`

``` javascript
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
```

### `switch`

Used when checking a value against multiple cases.

### Ternary Operator

Short form of `if/else`:

``` javascript
let result = age >= 18 ? "Eligible" : "Not Eligible";
```

------------------------------------------------------------------------

# 🔁 5. Loops

Learned:

### `for` loop

``` javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### `while` loop

``` javascript
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
```

### `continue`

Skips the current iteration.

``` javascript
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}
```

### `break`

Stops the loop completely.

``` javascript
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}
```

------------------------------------------------------------------------

# 🧩 6. Functions

Learned how to create reusable functions.

``` javascript
function EvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(EvenOdd(1));
```

Covered function concepts: - Parameters - Arguments - `return` -
Conditional logic inside functions - Reusable functions

Examples practiced: - Even/Odd checker - Positive/Negative/Zero -
Celsius to Fahrenheit - Voting eligibility - Finding the largest number

------------------------------------------------------------------------

# ⚡ 7. ES6 Functions

Learned modern JavaScript function syntax.

## Arrow Functions

``` javascript
const add = (a, b) => {
    return a + b;
};
```

### Implicit Return

``` javascript
const add = (a, b) => a + b;
```

### Single Parameter

Parentheses can be omitted for a single parameter:

``` javascript
const square = n => n * n;
```

### Default Parameters

``` javascript
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};
```

### Arrow Function Returning an Object

``` javascript
const createUser = () => {
    return {
        name: "Amaan",
        age: 22
    };
};
```

Also learned the concise form:

``` javascript
const createUser = () => ({
    name: "Amaan",
    age: 22
});
```

------------------------------------------------------------------------

# 🔥 8. Higher-Order Functions

Learned that a **Higher-Order Function (HOF)** is a function that:

1.  Takes another function as an argument, OR
2.  Returns another function.

Example:

``` javascript
function Calculator(a, b, operation) {
    return operation(a, b);
}
```

Callback functions:

``` javascript
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(Calculator(1, 2, add));
console.log(Calculator(1, 2, multiply));
```

Important distinction:

``` text
Higher-Order Function → Calculator
Callback Function     → add / multiply
```

Also learned that:

``` javascript
Calculator(1, 2, add);
```

passes the function itself, while:

``` javascript
add(1, 2);
```

executes the function.

------------------------------------------------------------------------

# 📦 9. Arrays

Learned how to create and work with arrays.

``` javascript
let fruits = ["Mango", "Orange", "Apple"];
```

### Array Indexing

JavaScript arrays use **zero-based indexing**:

``` text
Mango  → 0
Orange → 1
Apple  → 2
```

``` javascript
console.log(fruits[0]);
```

### Changing Elements

``` javascript
fruits[1] = "Banana";
```

### `length`

``` javascript
console.log(fruits.length);
```

------------------------------------------------------------------------

# 🛠️ 10. Basic Array Methods

## `push()`

Adds an element to the end.

``` javascript
fruits.push("Apple");
```

Returns the **new array length**.

------------------------------------------------------------------------

## `pop()`

Removes the last element.

``` javascript
let removed = fruits.pop();
```

Returns the **removed element**.

------------------------------------------------------------------------

## `unshift()`

Adds an element to the beginning.

``` javascript
fruits.unshift("Mango");
```

Returns the **new array length**.

------------------------------------------------------------------------

## `shift()`

Removes the first element.

``` javascript
let removed = fruits.shift();
```

Returns the **removed element**.

### Quick Reference

``` text
              Add          Remove
Beginning     unshift()    shift()
End           push()       pop()
```

------------------------------------------------------------------------

# 🔄 11. Looping Through Arrays

Using a normal `for` loop:

``` javascript
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Also learned the accumulator pattern for calculating a total:

``` javascript
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);
```

------------------------------------------------------------------------

# 🚀 12. Array Methods

## `forEach()`

Runs a function for every element.

``` javascript
numbers.forEach(number => {
    console.log(number);
});
```

Important:

``` text
forEach() → performs an action
```

It does **not** create a new array.

------------------------------------------------------------------------

## `map()`

Transforms every element and returns a **new array**.

``` javascript
let numbers = [5, 10, 15, 20, 25];

let newNumbers = numbers.map(number => number * 3);

console.log(newNumbers);
```

Output:

``` text
[15, 30, 45, 60, 75]
```

Important:

``` text
map() → transform → new array
```

------------------------------------------------------------------------

## `filter()`

Creates a new array containing elements that satisfy a condition.

``` javascript
let numbers = [10, 15, 20, 25, 30, 35];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

``` text
[10, 20, 30]
```

Important:

``` text
filter() → keep matching elements → new array
```

------------------------------------------------------------------------

## `find()`

Returns the **first element** that satisfies a condition.

``` javascript
let numbers = [5, 12, 18, 25, 30];

let result = numbers.find(number => number > 20);

console.log(result);
```

Output:

``` text
25
```

Important:

``` text
find() → first matching element
```

------------------------------------------------------------------------

## `some()`

Checks whether **at least one** element satisfies a condition.

Returns `true` or `false`.

``` javascript
let numbers = [10, 20, 30, 40];

let result = numbers.some(number => number > 20);

console.log(result);
```

Output:

``` text
true
```

Important:

``` text
some() → "Does at least ONE match?"
```

------------------------------------------------------------------------

## `every()`

Checks whether **all** elements satisfy a condition.

``` javascript
let numbers = [10, 20, 30, 40];

let result = numbers.every(number => number > 5);

console.log(result);
```

Output:

``` text
true
```

Important:

``` text
every() → "Do ALL match?"
```

------------------------------------------------------------------------

## `reduce()`

Combines all array elements into **one final value**.

Example: Sum

``` javascript
let numbers = [5, 10, 15, 20];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

``` text
50
```

Important:

``` text
reduce() → array → one final value
```

Common structure:

``` javascript
array.reduce((accumulator, currentValue) => {
    return ...;
}, initialValue);
```

------------------------------------------------------------------------

## `sort()`

Sorts an array.

### Ascending numbers

``` javascript
numbers.sort((a, b) => a - b);
```

### Descending numbers

``` javascript
numbers.sort((a, b) => b - a);
```

Example:

``` javascript
let numbers = [10, 5, 20, 2, 100];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

``` text
[2, 5, 10, 20, 100]
```

Important:

`sort()` **modifies the original array**.

------------------------------------------------------------------------

## `includes()`

Checks whether an array contains a value.

``` javascript
let languages = ["JavaScript", "Python", "Java", "C++"];

console.log(languages.includes("Python"));
```

Output:

``` text
true
```

Returns:

``` text
true / false
```

------------------------------------------------------------------------

## `slice()`

Extracts/copies part of an array **without changing the original
array**.

``` javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 4));
```

Output:

``` text
[20, 30, 40]
```

Important:

``` text
slice(start, end)

start → included
end   → excluded
```

------------------------------------------------------------------------

## `splice()`

Adds/removes elements and **changes the original array**.

Example:

``` javascript
let fruits = ["Mango", "Apple", "Orange", "Banana"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

``` text
["Mango", "Orange", "Banana"]
```

Important:

``` text
slice()  → original unchanged
splice() → original changed
```

------------------------------------------------------------------------

## `concat()`

Combines arrays into a **new array**.

``` javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result);
```

Output:

``` text
[1, 2, 3, 4, 5, 6]
```

------------------------------------------------------------------------

# 🧠 Array Methods Quick Cheat Sheet

  Method         Main Purpose               Returns
  -------------- -------------------------- -----------------------
  `push()`       Add at end                 New length
  `pop()`        Remove from end            Removed element
  `unshift()`    Add at beginning           New length
  `shift()`      Remove from beginning      Removed element
  `forEach()`    Perform action             `undefined`
  `map()`        Transform elements         New array
  `filter()`     Select matching elements   New array
  `find()`       Find first match           Element / `undefined`
  `some()`       At least one matches?      Boolean
  `every()`      All match?                 Boolean
  `reduce()`     Combine elements           Single value
  `sort()`       Sort elements              Same modified array
  `includes()`   Check existence            Boolean
  `slice()`      Extract/copy portion       New array
  `splice()`     Add/remove elements        Removed elements
  `concat()`     Combine arrays             New array

------------------------------------------------------------------------

# 🎯 Current Learning Progress

``` text
JavaScript Fundamentals
│
├── Variables                    ✅
├── Data Types                   ✅
├── Operators                   ✅
├── Conditional Statements      ✅
│   ├── if / else
│   ├── switch
│   └── ternary operator
│
├── Loops                        ✅
│   ├── for
│   ├── while
│   ├── break
│   └── continue
│
├── Functions                    ✅
│
├── ES6 Functions                ✅
│   ├── Arrow functions
│   ├── Default parameters
│   ├── Implicit return
│   └── Returning objects
│
├── Higher-Order Functions       ✅
│   └── Callback functions
│
└── Arrays                       ✅
    ├── Indexing
    ├── length
    ├── push()
    ├── pop()
    ├── shift()
    ├── unshift()
    ├── forEach()
    ├── map()
    ├── filter()
    ├── find()
    ├── some()
    ├── every()
    ├── reduce()
    ├── sort()
    ├── includes()
    ├── slice()
    ├── splice()
    └── concat()
```

## 🔜 Next

Before moving on to the next JavaScript topic, practice these array
methods together:

-   `map()`
-   `filter()`
-   `reduce()`
-   `find()`
-   `some()`
-   `every()`
-   `sort()`
-   `slice()`
-   `splice()`
-   `concat()`

The goal is not just to memorize syntax, but to understand **which
method to choose for a particular problem**.

------------------------------------------------------------------------

## 📌 Learning Style

This series is being learned practically in **VS Code**:

1.  Learn one concept
2.  See a simple example
3.  Solve a small question
4.  Get hints when stuck
5.  Write the solution independently
6.  Move to the next concept
