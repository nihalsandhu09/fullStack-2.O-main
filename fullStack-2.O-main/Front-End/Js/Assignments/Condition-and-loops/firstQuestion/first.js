
// Conditional statements are fundamental constructs in programming that allow you to make decisions based on certain conditions. They evaluate whether a certain condition is true or false and execute different blocks of code accordingly.

// Types of Conditional Statements:
// 1. if Statement:
// The if statement executes a block of code if a specified condition is true.

if (condition) {
    // Code to be executed if the condition is true
}


let x = 10;
if (x > 5) {
    console.log('x is greater than 5');
}



// 2. if...else Statement:
// The if...else statement allows you to execute one block of code if the condition is true and another block if the condition is false.

// syntax 
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

let y = 3;
if (y > 5) {
    console.log('y is greater than 5');
} else {
    console.log('y is not greater than 5');
}



// 3. if...else if...else Statement:
// The if...else if...else statement allows you to check multiple conditions and execute different blocks of code based on which condition is true.


// syntax 

if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if none of the conditions are true
}


let z = 7;
if (z === 5) {
    console.log('z is 5');
} else if (z === 7) {
    console.log('z is 7');
} else {
    console.log('z is neither 5 nor 7');
}


// Conditional statements are used to control the flow of a program by allowing you to execute specific blocks of code based on certain conditions. They are essential for creating dynamic and responsive programs that can make decisions based on different scenarios