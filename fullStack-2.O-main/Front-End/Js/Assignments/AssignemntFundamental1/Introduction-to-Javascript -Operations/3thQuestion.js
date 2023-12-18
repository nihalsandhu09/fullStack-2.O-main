




// the differentiation among unary, binary, and ternary operators in JavaScript lies in the number of operands they work with.

// Unary Operators: These operators work with only one operand.

// Examples:
// ++ (increment)
// -- (decrement)
// - (negation)
// + (unary plus)
// ! (logical NOT)

let x = 5;
x++; // Increment by 1 (x is now 6)

let y = -10;
let absoluteY = Math.abs(y); // absoluteY is 10 (unary minus)

let isTrue = true;
let notTrue = !isTrue; // notTrue is false (logical NOT)
// Binary Operators: These operators work with two operands.

// Examples:
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// === (strict equality)

let a = 10;
let b = 5;
let sum = a + b; // Addition

let product = a * b; // Multiplication

let isEqual = a === b; // Strict equality check


// Ternary Operator: It is the only operator that works with three operands. It's a conditional operator.

// Example:
condition ? value_if_true : value_if_false

let age = 20;
let isAdult = age >= 18 ? 'Adult' : 'Minor';
// If age is greater than or equal to 18, isAdult is 'Adult', otherwise 'Minor'