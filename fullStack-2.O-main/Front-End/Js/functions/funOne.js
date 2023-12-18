/*    
In JavaScript, functions are blocks of code that perform a specific task or return a value. They're essential for organizing code, making it reusable, and encapsulating logic.*/

// we can ceclare a functionn using function keyword 

function Hello(){
console.log("Hello this is my first function ")
}
Hello() 


// we can also create function like variable in js we can store function in variable also 

// this syntaxt is called function expression 

const func = function hello(){
  console.log("Hello thsi is function expression ")
}
func()  // we can call it with variable name and for invoaction we have to use parenteses 


// Arrowfunction this is another or modern way towrite  function 

const arow = ()=>{
    console.log(`this is arrow function `)
}
arow()

// function can take parmeters also 

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice"); // Output: Hello, Alice!

  
//   Return Statement:
// Functions can return values using the return statement 

function add(a, b) {
    return a + b;
  }
  
//   const result = add(3, 4); // result = 7
  
//   Anonymous Functions:
// Functions can also be anonymous (without a name): 

// but fo that we have to pass it as a variable or as a callback 

const fnc = function(){
    console.log('anonymous function')
}
fnc()



// callback function  

// Functions can be passed as arguments to other functions: or we can say function that was passed to another function is called callback function 
/**
 * 
 * Do you remember we discusses that functions are first class citizen ?
 * 
 * - That claimed that we can pass functions as an argument
 */


/**
 * array -> list of numbers that we will get
 * fn -> is a function passed as an argument to the processArray function
 */
function processArray(array, fn) {
    
    for(let i = 0; i < array.length; i++) { // iterating over every index of the array
        console.log("index", i, "value", array[i], "return value of fn", fn(array[i]));
        // i-> index, array[i] => value at the ith index , fn(array[i]) -> it will pass array[i] as argument to fn
        // fn(array[i]) ->
        //      1. We are calling fn
        //      2. Argument passed to call fn is array[i]
        //      3. fn represents the function passed as gthe argument to processArray
    }
}


processArray([2,3,4,1,5], function cube(x) { return x*x*x; }); // passing function as an argument, fn->cube



// processArray([2,3,4,1,5], function square(x) { return x*x; });


// Function Scope:
// Variables declared within a function are scoped to that function
// function scopeExample() {
//     const localVar = "I'm local";
//     console.log(localVar); // Output: I'm local
//   }
  
//   console.log(localVar); // This will throw a ReferenceError as localVar is not accessible outside scopeExample()
  

// Higher order function 
//    A higher-order function is a function that either takes another function as an argument, returns a function, or does both. Essentially, it treats functions as first-class citizens, allowing them to be manipulated and passed around like any other data type.


function higherorder(callback){
    callback()
}

function callback(){
    console.log("Hi this is callback function")
}
higherorder(callback)


// 2  Returns a Function:
// Higher-order functions can also return a function as their result. This is useful for creating functions dynamically or modifying their behavior based on conditions.

function createGreeter(greetings){
   return function(name){
    console.log(`${greetings} ${name}`)
   }
}

const greetingsInEnglish = createGreeter('Namste')
greetingsInEnglish("Nihal")

  /* 3 Manipulates Functions:
Higher-order functions can manipulate other functions by wrapping them, combining them, or transforming their behavior. */

function withUpperCase(callback) {
    return function(text) {
      const result = callback(text.toUpperCase());
      return result;
    };
  }
  
  function addExclamation(text) {
    return `${text}!`;
  }
  
  const withExclamationUpperCase = withUpperCase(addExclamation);
  const result = withExclamationUpperCase('hello'); // Output: HELLO!
  console.log(result)

  // rest parameter 

  // rest parameter can accept thousands of arguments  

  function checkrestparameter(x,...y) {
    console.log(x)
    console.log(y)
  }
  
  checkrestparameter(5,1,2,4,5,6,7,8,9)