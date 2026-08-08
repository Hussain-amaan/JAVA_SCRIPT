//  IF STATEMENT


let age =20;

if (age >= 18){

    console.log("you are Eligible To Vote ");
    
}


//  IF-ELSE STATEMENT

let age = 2;

if (age >=18){

    console.log("You Are Eligible To Vote ");

}else {
    console.log("You are not Eligible To Vote ");


}


//  Else-If Statement
// Write a program to determine the grade

let marks = 10;

if (marks >=90){
    console.log("A+");

}else if(marks >=80 ){
    console.log("B+");

}else if(marks >=70) {
    console.log("C+");

} else if(marks >= 60){
    console.log("D+");

}else{
    console.log("F");

}


// Write a program that checks whether a person can enter a movie:


let age =10;

let hasTicket = true;

if (age>=18 && hasTicket){
    console.log("you are eligible to watch the movies");
}else {
    console.log("Not Allowed");
}



// Write a program that checks whether a number is positive, negative, or zero.


let number = -1;


if (number > 0){
    console.log("Positive");

}else if (number <0){
    console.log("Negative");

}else {
    console.log("Zero");
}

// switch Statement

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Saturday":
        console.log("Weekend");
        break;

    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Normal day");
}




// Ternary Operator ?


let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);