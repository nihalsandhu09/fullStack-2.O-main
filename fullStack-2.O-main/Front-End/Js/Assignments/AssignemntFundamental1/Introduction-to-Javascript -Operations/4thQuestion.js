// Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts
// important?

// Understanding the precedence and associativity of operators in JavaScript is crucial as it determines the order in which operations are executed in an expression.

// Precedence refers to the priority level of operators. Operators with higher precedence are executed first. For instance, in the expression a + b * c, the * operator has higher precedence than +, so b * c will be evaluated first, and then the result will be added to a.

// Associativity comes into play when operators of the same precedence appear consecutively. It defines the order in which operations are performed when operators have the same precedence level. Associativity can be left-to-right or right-to-left.

// For example, in an expression like a - b + c, the - and + operators have the same precedence. The associativity of these operators in JavaScript is left-to-right, meaning the operations are performed from left to right. So, a - b is evaluated first, and then c is added to the result.

// It's important to understand these concepts because they dictate how expressions are evaluated in JavaScript. Misunderstanding operator precedence and associativity can lead to incorrect results in computations and logical operations. When writing complex expressions, knowing these rules helps in writing code that behaves as intended without relying on excessive parentheses to clarify the order of operations.

let result = 5 + 10 * 2; // Multiplication (*) has higher precedence than addition (+)
console.log(result); // Output will be 25, as multiplication is performed first

let anotherResult = (5 + 10) * 2; // Parentheses can be used to explicitly control precedence
console.log(anotherResult); // Output will be 30, as addition is performed first due to parentheses


// By understanding operator precedence and associativity, developers can write clearer, more concise, and accurate code while ensuring that expressions are evaluated in the intended order