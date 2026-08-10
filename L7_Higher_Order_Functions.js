// Higher-Order Functions


// Function as an Argument

function sayHello(){
    console.log("HeLLO");
}

function execute (fn){
    fn();
}


execute(sayHello);



// Function Returning Another Function

function outer() {

    function inner() {
        console.log("Hello!");
    }

    return inner;
}

const result = outer();

result();

// Calculator

function add(a,b){
    let sum =a+b;
    return sum;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function Calculator(a,b,operation){
    return operation(a, b);
}

console.log(Calculator(1,2,add));
console.log(Calculator(1,2,multiply));
console.log(Calculator(1,2,sub));
console.log(Calculator(1,2,divide));


const add=(a,b) =>a+b;
const multiply=(a,b)=>a*b;
const sub=(a,b)=> a-b;
const divide=(a,b)=>a/b;

const Calculator=(a,b,operation)=>operation(a,b);

console.log(Calculator(1,2,add));
console.log(Calculator(1,2,multiply));
console.log(Calculator(1,2,sub));
console.log(Calculator(1,2,divide));
