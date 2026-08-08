//  for Loop


//  Print numbers from 1 to 10.


// for(i=1;i<11;i++){
//         console.log(i);
// }


// Using a for loop, print all even numbers between 1 and 20.

// let i = 1;

// for(i=1;i<=50;i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }



// Calculate the sum of numbers from 1 to 10.


// let sum =0;

// for(i=1;i<=10;i++){
//     sum+=i;
// }

// console.log(sum);


// use a while loop to print 10 down to 1.


// let i = 10;

// while (i >=1) {
//     console.log(i);
//     i--;
// }



// do...while

// let i = 5;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);




// Write a for loop that prints numbers from 1 to 20, but:

// Skip 5
// Skip 10
// Skip 15


// for(i=1;i<=20;i++){
//     if(i === 5){
//         continue;
//     }else if(i=== 10){
//         continue;
//     }else if(i===15){
//         continue;
//     }else {
//         console.log(i);
//     }
// }

// console.log(i);


// OR:

// for (let i = 1; i <= 20; i++) {

//     if (i === 5 || i === 10 || i === 15) {
//         continue;
//     }

//     console.log(i);
// }


// Write a loop that prints numbers from 1 to 10, but stops completely when it reaches 6.



for(let i=1;i<=10;i++){
    if(i===6){
        break;
    }
    console.log(i);
}