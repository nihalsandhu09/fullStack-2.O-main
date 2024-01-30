// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(param){
    let a = 10;

    return  function inner(){
        console.log(a)
        console.log(param)
    }
}

let fnc = outerFunction("this is param")
fnc()
// console.log(outerFunction("this is param") ,fnc())


// oueter function is executed but with lexical  scoping we can acces to outer function variable and parameter this happens because of lexical scoping because lexical works on the principle child can acces parents scope and its variables and parameters 