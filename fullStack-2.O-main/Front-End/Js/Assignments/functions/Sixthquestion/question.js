// Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.  

function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...nextArgs) {
          return curried(...args.concat(nextArgs));
        };
      }
    };
  }
  
  // Function to add two numbers
  function add(x, y) {
    return x + y;
  }
  
  // Currying the add function using curry
  const curriedAdd = curry(add);
  
  // Testing the curried function
  console.log(curriedAdd(2, 3)); // Output: 5
  console.log(curriedAdd(2)(3)); // Output: 5
  console.log(curriedAdd(2)(3, 4)); // Output: 5
  console.log(curriedAdd(2)(3)(4)); // Output: 5
  