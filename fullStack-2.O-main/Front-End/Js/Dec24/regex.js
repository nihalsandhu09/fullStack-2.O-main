const regex = /[a-z]/;

const str = 'hello';

console.log(str.match(regex))

console.log(regex.test(str))



function calculateSum(array){

    let sum = 0;

    for (let i= 0; i< array.length; i++) {
        sum  += array[i]
        
    }
console.log(sum)
}
let array = [1,2,3,4,5,6,7,8,9]
calculateSum(array)