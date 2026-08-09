//  Normal Function

function add(a,b){
    return a+b;
}

console.log(add(1,4))


// Arrow Function

const add = (a,b) =>{
    return a+b;
}

console.log(add(1,2))


// Arrow Function with One Parameter


const square = n =>{
    return n*n;
}


console.log(square(4))


// Implicit Return
// If your function has only one expression, you can remove {} and return



const add = (a,b) => a+b;
console.log(add(5, 10));


// Arrow Function with Multiple Statements
// If you need multiple statements, use {} and return explicitly:

const calculate = (a, b) => {
    let result = a + b;
    return result;
};

console.log(calculate(10, 20));


// Default Parameters

function greet(name="user"){
    return "Hello " + name;
}

console.log(greet("amaan"))


// Template Literals

const greet = name => `hello ${name}`;

let name = "amaan"

console.log(greet(name));


// Function Returning an Object

const createUser = () => {
    return {
        name: "Amaan",
        age: 22
    };
};

console.log(createUser())


const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet());
console.log(greet("Amaan"));


// Create an arrow function:

// calculateArea(length, width)

// Requirements:

// If no length is provided, use 10
// If no width is provided, use 5
// Return the area


function Area(length = 10, breadth = 5) {
    let area = length * breadth;
    return area;
}

console.log(Area());
console.log(Area(10, 2));


// With  ES6 arrow function

const Area=(l=10,b=5)=>{
    return l*b;
};

console.log(Area());
console.log(Area(10, 2));