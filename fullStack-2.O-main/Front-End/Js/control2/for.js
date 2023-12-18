// lets start loops we can call it iteration 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
// }

// lets print number that are divisble by 2 only 

// for(let i = 1 ; i<10;i++){
//     if(i % 2 ==0){
//         console.log(i)
//     }
// }

// here it is 2,4,6,8 will be printed 


// let print value of array 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i =0;i<arr.length;i= i+1){
//     console.log(`value of i is now ${arr[i]}`)
// }

// let add 2 of each value of array 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let ele = 0;ele<arr.length;ele++){
//     console.log(arr[ele] + 2)
//     // console.log(`after adding 2 to each value of array now value of arr is ${arr[ele] + 2}`)
// }



// if a value is divided by two then print it or if value is divided by 3 not print it 

// for(let i =0;i<=12;i++){
//     if(i % 2 ==0){
//         continue
//     }else if(i % 3 == 0){
//         console.log(i)
//     }
// }

// give the total of array 

let cardItems = [100,200,300,400]

let sum = 0
for(let i =0;i<cardItems.length;i++){
  
  sum = sum + cardItems[i]
  



  
}
console.log(sum)


for(let i=0;i<4;i++){
  for(let j = 1;j<4;j++){
    console.log(j)
  }
  console.log(i)
}

function printSquare(size){
for(let i =0;i<size;i++){
  let line = '';
  for(let j =1;j<=size;j++){
    line = line + '*  ';
    
  }
  console.log(line)
}
}

printSquare(2)


for(let i=0;i<=15;i++){
  if(i ===0){
    console.log(`${i} is even`)
  }
  else if (i % 2 ===0){
console.log(`${i} is even`)
  }
  else{
    console.log(`${i} is odd`)
  }
}




let obj = {
  name:"Nihal Sandhu",
  rollNo:952,
}

obj.name = "Nihal Singh Sandhu"

console.log(obj)