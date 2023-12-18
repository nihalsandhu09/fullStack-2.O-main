// what is recursion 

/* Let’s return to functions and study them more in-depth.

Our first topic will be recursion.

If you are not new to programming, then it is probably familiar and you could skip this chapter.

Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.

When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.*/

// write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.
// function pow(x,n){
//     let result = 1;

//     for(let i =0;i<n;i++){
//         result = result * x;
//     }
//     return result;
// }

// console.log(pow(2,4))


// use recursion 

// function pow(x,n){
//     if(n ==1){
//         return x;
//     }
//     else{
//         return x *pow(x,n-1)
//     }
// }
// console.log(pow(2,4))

// function recuse(){

//     console.log("hello")
//     recuse()
// }

// recuse()
// let count = 0;

// function counter(){
 
//     count++;
//     counter()
// }

// counter()


 let count = 0;
 
 function counter(){
    if(count == 4){
        return;
    }
    else{
        console.log(count)
        count++;
        counter()
    }
 }

counter()
