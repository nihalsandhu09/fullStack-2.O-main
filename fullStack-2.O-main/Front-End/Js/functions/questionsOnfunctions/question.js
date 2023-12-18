// Function Sum:
// Write a function that takes two numbers as arguments and returns their sum.
function sum(num1,num2){
    return num1+num2
}
console.log(sum(5,10))


// Function Max:
// Create a function that takes an array of numbers as an argument and returns the largest number in the array.
//  let array = [ 78,56,1,2,5,6]

//  function checkLargestNumber(array){
//   let large = array[0] 

//   for(let i =1; i < array.length;i++){
//     if(array[i]>large){
//         large = array[i]
//     }
//   }
//   return large;
//  }
//  console.log(checkLargestNumber(array))
// Function Even or Odd:
// Write a function that takes a number as an argument and returns "even" if the number is even, and "odd" if it's odd.

 
//  function checkEvenOdd(numebr){
 
//  if(numebr % 2 == 0){
//   console.log('Number is even')
//  }else{
//   console.log("Number is odd")
//  }


//  }
// checkEvenOdd(1)
// Function Factorial:
// Create a function that calculates the factorial of a given number using recursion.
//  function factorial(n){
 
//   if(n ==0 || n ==1){
//     return 1
//   }else{
//     return n* factorial(n-1)
//   }

//  }

//  console.log(factorial(10))

// function demo(){
//   console.log("demo recusion")
//   demo()
// }
// demo()

let counter = 1
function demo(number){
  if(counter>number){
    return;
  }

  console.log(counter)
  counter++;
  demo(number)
}
console.log(demo(5))
// Function Reverse String:
// Write a function that takes a string as an argument and returns the reversed string.

// Function Average:
// Create a function that takes an array of numbers as an argument and returns the average of those numbers.

// Function Concatenate Arrays:
// Write a function that takes two arrays as arguments and returns a new array that combines both arrays.

// Function Palindrome Check:
// Create a function that checks if a given string is a palindrome (reads the same forward and backward).

// Function Capitalize Words:
// Write a function that takes a sentence as an argument and returns the same sentence with the first letter of each word capitalized.

// Function Power:
// Create a function that takes two numbers, base and exponent, and returns the result of raising the base to the exponent power.