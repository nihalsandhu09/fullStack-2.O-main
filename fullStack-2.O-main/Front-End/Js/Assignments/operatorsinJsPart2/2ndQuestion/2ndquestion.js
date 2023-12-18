
// Describe the usage of the comma operator in JavaScript and provide an example.

// In JavaScript, the comma operator , is used to separate multiple expressions. It evaluates each expression from left to right and returns the value of the rightmost expression.

// 1 commonly used  is in variable declaration like this when we have to declare multiple variables in a single line 

let a=1, b=2, c=3

// 2 function arguments 
// it can be use for pass multiple arguments to function 
function add(a,b,c){
return a*b*c
}

add(1,2,4)

// 3 Expressions: It's used when multiple expressions need to be evaluated within a single statement.

let x = 0;
while (x < 5, x++) {
  console.log(x); // Outputs numbers from 1 to 5
}
