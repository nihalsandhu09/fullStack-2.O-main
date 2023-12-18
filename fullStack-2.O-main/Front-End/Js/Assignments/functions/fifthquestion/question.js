// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


function factorial(n){
    if(n==0 || n ==1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case: factorial of 0 and 1 is 1
    } else {
      return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
    }
  }
  
  // Test with different inputs
  console.log(factorial(0)); // Output: 1
  console.log(factorial(1)); // Output: 1
  console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
  console.log(factorial(7)); // Output: 5040 (7! = 7 * 6 * 5 * 4 * 3 * 2 * 1)
  