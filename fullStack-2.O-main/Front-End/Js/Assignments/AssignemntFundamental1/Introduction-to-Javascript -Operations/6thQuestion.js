// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.

function calculateBMI(weight,height){
    const heightInMeters = height / 100;

    const BMI = weight / (heightInMeters * heightInMeters)
return BMI
}

console.log(calculateBMI(99,178))