// Q1 Explain the usage of ternary operator with syntax and write a program to check whether the number is even
// or odd using the ternary operator.


// The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in many programming languages. It's a shorthand way of expressing an if-else statement.

// The ternary operator is primarily used for making quick, concise decisions within code. Its primary advantages include:

// Conciseness: It condenses an if-else statement into a single line, reducing the amount of code needed.

// Readability: In some cases, it can enhance readability, especially for simple conditional assignments, making the code more compact and easier to understand.

// Functional in Expressions: It can be used within expressions or when assigning values, allowing for conditional value assignments directly.

// syntax of ternory operator 

// condition ? expression1 : expression2

// Here, if the condition is true, expression1 is executed; otherwise, expression2 is executed.


// to check number is even or odd here is the code for ThaT 

let number = 15 

 let result = number % 2 == 0 ? "even ":" odd"
console.log(result)