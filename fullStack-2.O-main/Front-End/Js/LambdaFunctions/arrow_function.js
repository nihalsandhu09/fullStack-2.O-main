function checkPrimeNumber(num) {
    let isPrime = true;

    if (num === 1) {
        console.log(`Number ${num} is not a prime number`);
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`Number ${num} is a prime number`);
        } else {
            console.log(`Number ${num} is not a prime number`);
        }
    } else {
        console.log(`Number ${num} is not a prime number`);
    }
}

checkPrimeNumber(7);
checkPrimeNumber(8); 


/* Alright! How about creating a function in JavaScript that takes an array of numbers and returns the sum of all the numbers in the array? Would you like to give it a try? */

// let arra = [1,4,5,7,8,9]
// function sumofArray(val){


// let output = 0;

// for(let  i=0;i<val.length; i++){

//     output =  output + val[i]
// }
// return output;
// }

//  let sum = sumofArray(arra)
//  console.log(sum)


 /**Absolutely! How about creating a function in JavaScript that finds the largest number in an array of numbers? Would you like to give it a shot? */
 let arra = [1, 4, 5, 7, 8, 9];

 function findLargestNum(array) {
     let largest = array[0]; // Initialize the largest number with the first element
 
     for (let i = 1; i < array.length; i++) {
         if (array[i] > largest) {
             largest = array[i]; // Update the largest number if a larger one is found
         }
     }
 
     return largest;
 }
 
 let largest = findLargestNum(arra);
 console.log(largest);
 


 function reversString(str){
 
     let output = '';

     output = str.split('').reverse().join('')

     return output;

 }

 console.log(reversString('hello'))