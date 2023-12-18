// <!-- Loops in programming are structures that allow you to repeat a block of code multiple times until a certain condition is met. They are essential for automating repetitive tasks and iterating through collections of data. There are several types of loops commonly used in programming: -->

// 1. For Loop:
// The for loop is used when you know how many times you want to execute a block of code.

// Syntax:


for (initialization; condition; increment/decrement) {
    // Code to be executed
}


Example:


for (let i = 0; i < 5; i++) {
    console.log(i);
}
// This loop will print numbers from 0 to 4.

// 2. While Loop:
// The while loop is used when you want to execute a block of code as long as a specified condition is true.

Syntax:

while (condition) {
    // Code to be executed
}




let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// This loop will print numbers from 0 to 4.


// 3. Do-While Loop:
// The do-while loop is similar to the while loop, but it always executes the code block at least once before checking the condition.

// Syntax:


do {
    // Code to be executed
} while (condition);
Example:


let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);
// This loop will print numbers from 0 to 4.

// 4. For...In Loop:
// The for...in loop is used to iterate through the properties of an object.

Syntax:


for (variable in object) {
    // Code to be executed
}
Example:


const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// This loop will print each property of the person object along with its value.

// 5. For...Of Loop:
// The for...of loop is used to iterate over iterable objects like arrays, strings, etc.

Syntax:


for (variable of iterable) {
    // Code to be executed
}
Example:


const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}
// This loop will print each element of the numbers array.


// Loops are essential in programming as they enable automation, allowing you to execute repetitive tasks efficiently and work with collections of data or perform iterations based on specific conditions. Each loop type has its own specific use cases and can be chosen based on the problem at hand.