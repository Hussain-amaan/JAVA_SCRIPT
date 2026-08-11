// JavaScript Arrays : An array lets you store multiple values inside one variable.

// Creating an Array

// let studnets=["amaan","anzar","aabish"]

// console.log(studnets);

// let data = ["Amaan", 22, true, 10.5];
// console.log(data);

// ************************************************************************

// Array Index:
// let fruits = ["Apple", "Banana", "Orange"];
// console.log([fruits[0]])

// ************************************************************************

// Changing an Array Element : Arrays are mutable, meaning you can change their values.

// let fruits = ["Apple", "Banana", "Orange"];

// fruits[1] = "Mango";

// console.log(fruits);

// ************************************************************************

// length :length tells you how many elements are in the array.

// let fruits = ["Apple", "Banana", "Orange"];

// console.log(fruits.length);

// ************************************************************************

// Adding Elements

// push() : Adds an element to the end.

// let fruits = ["Apple", "Banana"];

// fruits.push("Orange");

// console.log(fruits);

// ##########################################################################

// unshift(): Adds an element to the beginning.

// let fruits = ["Apple", "Banana"];
// fruits.unshift("Mango");
// console.log(fruits);

// ************************************************************************


// Removing Elements :


// pop()  : Removes the last element

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.pop();

// console.log(fruits);


// ##########################################################################

// shift() : Removes the first element.

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.shift();
// console.log(fruits);


// **********************************************

// let numbers =[1,2,3,4,5]

// for(i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }

// ***************************************

// let fruits=["mango","orange"];
// fruits.push("Apple");

// console.log(fruits)


// ******************************************

// let numbers = [10, 20, 30, 40, 50];
// let sum=0
// for(i=0;i<numbers.length;i++){
//     sum+=numbers[i];
// }
// console.log(sum);

// ****************************************

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(numbers){
//     new_number = numbers*2;
//     console.log(new_number)
// })


// ************************************

// let fruits = ["Apple","Mango","kiwi"];

// fruits.forEach((fruits)=>{
//     console.log(fruits);
// });

// #######################################

// map() : 

// let numbers = [5, 10, 15, 20, 25];

// let new_N = numbers.map(number => number*3);
// console.log(new_N)

// ###########################################

// filter() :

// let numbers = [10, 15, 20, 25, 30, 35];

// let Even_N = numbers.filter(number => {
//     return number % 2 == 0;
// });

// console.log(Even_N)

// #####################################
//  Use find() to find the first number greater than 20.

// let numbers = [5, 12, 18, 25, 30];

// let new_number = numbers.find(number =>{
//     return number >20 ;
// });

// console.log(new_number)


// #######################################

//  some() : answers a yes/no question

// let numbers = [5, 12, 18, 25, 30];

// let result = numbers.some(number => number > 20);

// console.log(result);


// ############################################

// every()

// every() is similar to some(), but there's an important difference:

// some() → at least one element must satisfy the condition
// every() → all elements must satisfy the condition


// let numbers =[1,2,3,4,5,6,7,8]

// let result =numbers.every(number => number > 10);

// console.log(result);

// #####################################################

// reduce()

// reduce() is used when you want to turn an entire array into one final value.


// let numbers = [5, 10, 15, 20];

// let total = numbers.reduce((sum, number) => {
//     return sum + number;
// });

// console.log(total);


// ##############################################

// sort()

// sort() is used to arrange the elements of an array.


// let fruits = ["Mango", "Apple", "Orange", "Banana"];

// fruits.sort();

// console.log(fruits);

// let numbers1 = [10, 5, 20, 2, 100];
// let numbers2 = [10, 5, 20, 2, 100];
// numbers1.sort((a,b)=>a-b);
// numbers2.sort((a,b)=>b-a);


// console.log(numbers1);

// console.log(numbers2);

// ###########################################

// includes()
// includes() checks whether an array contains a particular value.

// let languages = ["JavaScript", "Python", "Java", "C++"];
// console.log(languages.includes("Python"));

// ############################################

// slice()

// slice() is used to extract/copy a portion of an array without changing the original array.

// let numbers = [10, 20, 30, 40, 50];

// console.log(numbers.slice(1,4))


// #################################

// splice()

// let fruits = ["Mango", "Apple", "Orange", "Banana"];

// fruits.splice(1, 2);

// console.log(fruits);

// #####################################

// concat()

// concat() is used to combine two or more arrays.

let fruits1 = ["Mango", "Apple"];
let fruits2 = ["Orange", "Banana"];

let allFruits = fruits1.concat(fruits2);

console.log(allFruits);