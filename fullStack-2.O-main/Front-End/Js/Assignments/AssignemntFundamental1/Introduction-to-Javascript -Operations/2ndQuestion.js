// Q2. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for
// each category. 

// ```
// Certainly! Operators in JavaScript can be categorized based on their functionality into several groups:


// // 1 Airthmatic Operations 
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulo, returns the remainder of a division)
// ```
let a = 10;
let b = 3;
let sum = a+b; // 13
let difference = a-b // 7
let multiplyValue =  a*b //30
let division = a/b  //3.33
let remainder = a / b  // 1


// ```
// Assignment Operators:

// = (assignment)
// += (addition assignment)
// -= (subtraction assignment)
// *= (multiplication assignment)
// /= (division assignment)
// %= (modulo assignment)
// ```

let x = 5;
x += 3; // Equivalent to x = x + 3 (x is now 8)
x -= 2; // Equivalent to x = x - 2 (x is now 6)
x *= 4; // Equivalent to x = x * 4 (x is now 24)


// ```
// Comparison Operators:

// == (equality)
// === (strict equality)
// != (inequality)
// !== (strict inequality)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// ```
// code 

let num1 = 5;
let num2 = 10;
console.log(num1 === num2); // false
console.log(num1 < num2); // true
console.log(num1 != num2) ;// true
console.log(num1 !== num2)  // true strictly inequality check type also 
console.log(5>=5) // true
console.log(5<=5)  // true


// Logical Operators:

// && (logical AND)
// || (logical OR)
// ! (logical NOT)

let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // false  logical and operator if one condition is false then it will give false 
console.log(isTrue || isFalse); // true   logical or operstor if one conditon is true it will give true 
console.log(!isTrue); // false  logical not make true false and flase true 



// 5 Bitwise Operators:

// & (bitwise AND)
// | (bitwise OR)
// ^ (bitwise XOR)
// ~ (bitwise NOT)
// << (left shift)
// >> (right shift)
// >>> (unsigned right shift)

let num3 = 5; // binary: 101
let num4 = 3; // binary: 011
console.log(num3 & num4); // bitwise AND: 1 (binary: 001)
console.log(num3 | num4); // bitwise OR: 7 (binary: 111)
