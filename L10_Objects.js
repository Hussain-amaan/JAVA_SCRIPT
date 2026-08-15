// let person = {
//     name : "Amaan",
//     age : 24,
//     city : "Rajouri"
// };

// console.log(person);


// Accessing Object Properties

// let person = {
//     name : "Amaan",
//     age : 24,
//     city : "Rajouri"
// };


// console.log(person.name);
// console.log(person.age)

// console.log(person['name']);
// console.log(person['age']);


// #####################################

// Adding a Property

// let person = {
//     name : "Amaan",
//     age : 24,
//     city : "Rajouri"
// };
// person.country = "India";

// console.log(person);


// ############################################

// Changing a Property

// let person = {
//     name : "Amaan",
//     age : 24,
//     city : "Rajouri"
// };

// person.age = 23;

// console.log(person)

// ############################################

// Deleting a Property

// let person = {
//     name : "Amaan",
//     age : 24,
//     city : "Rajouri"
// };

// delete person.city

// console.log(person);


// ####################################

// Objects Can Contain Different Data Types

// let student = {
//     name: "Amaan",
//     age: 22,
//     isStudent: true,
//     marks: [80, 75, 90]
// };
// console.log(student)


// #################################

// Object with a Function

// let person = {
//     name: "Amaan",

//     greet: function() {
//         console.log("Hello!");
//     }
// };

// person.greet();

// ####################################
// this in Objects

// let person = {
//     name: "Amaan",

//     greet: function() {
//         console.log("Hello " + this.name);
//     }
// };

// person.greet();

// ######################################

// Nested Objects

// let student = {
//     name: "Amaan",

//     address: {
//         city: "Rajouri",
//         state: "Jammu & Kashmir"
//     }
// };

// console.log(student.address.city)


// ########################################

// Array of Objects

// let students = [
//     {
//         name: "Amaan",
//         age: 22
//     },
//     {
//         name: "Rahul",
//         age: 21
//     },
//     {
//         name: "Fahad",
//         age: 23
//     }
// ];

// console.log(students[0].name);
// console.log(students[0].age);


// #################################
// Add a method called result() that prints: Amaan scored 85 marks


let student = {
    name: "Amaan",
    marks: 85,
    greet: function greet(){
        console.log(this.name +" Scored " + this.marks + " Marks")
    }
};

student.greet();