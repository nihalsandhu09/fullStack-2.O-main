// Generate n9mbers between any 2 given n9mbers.

const num1 = 10;
const num2 = 25;
const numberofNumbers = 6
function GenerateRnadomNumber(value1,value2){
    return Math.floor(Math.random() * (value2 - value1 + 1) )+ value1;
}

// console.log(GenerateRnadomNumber(num1,num2))

for(let i =0; i<numberofNumbers;i++){
    const genrateNumber = GenerateRnadomNumber(num1,num2)
    console.log(genrateNumber)
}