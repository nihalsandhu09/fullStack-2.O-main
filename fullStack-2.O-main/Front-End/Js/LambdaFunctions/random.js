// console.log(Math.floor(Math.random()*10+1))


// by default it return a random 

let a = 10;
let b = 20;

// function generateRandomNumber(min,max){
//     console.log(Math.floor(Math.random() + (max - min)+min))
// }
// generateRandomNumber(a,b)

function randominRange(x,y){
  return Math.floor(Math.random()*(y-x+1)+ x)
}

console.log(randominRange(a,b))