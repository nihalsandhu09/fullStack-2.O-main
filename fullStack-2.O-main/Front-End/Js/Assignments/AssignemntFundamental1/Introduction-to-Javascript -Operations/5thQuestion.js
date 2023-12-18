// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.


function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

// Example usage:
const principalAmount = 1000; 
const interestRate = 5;
const timePeriod = 2; 

const simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
console.log("Simple Interest:", simpleInterest);
