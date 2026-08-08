// Create a function called add that accepts two numbers and returns their sum.


function add(x,y){
    sum=x+y;
    return sum
}

console.log(add(1,3))


// Even or Odd


function EvenOdd(numb){
    if(numb % 2==0){
        return "Even"

    }else {
        return "Odd"
    }
}

console.log(EvenOdd(1))


// Create this function: findLargest(a, b, c) It should return the largest number


function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a + " is greater";
    } else if (b > a && b > c) {
        return b + " is greater";
    } else {
        return c + " is greater";
    }
}

console.log(findLargest(1, 2, 3));


// Positive, Negative, or Zero


function numb(n){
    if (n>0){
        return "Positive"

    }else if(n<0){
        return "Negative"

    }else {
        return "Zero"
    }
}

console.log(numb(2))


// Celsius to Fahrenheit

function CtoF(n){
    temp = (n * 9 / 5) + 32;
    return temp

}

console.log(CtoF(0))



// Voting Eligibility


function vote(age){
    if (age >=18){
        return "Eligibe"
    }else{
        return "Not Eligible"
    }
}

console.log(vote(20))