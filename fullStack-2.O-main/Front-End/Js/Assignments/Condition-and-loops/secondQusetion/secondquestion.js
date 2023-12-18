// Q2. Write a program that grades students based on their marks^
//  If greater than 90 then A GradE
//  If between 70 and 90 then a B gradE
//  If between 50 and 70 then a C gradE
//  BFlow 50 then an F grade

function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
        return "B Grade";
    } else if (marks >= 50 && marks < 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Example usage:

// let result = gradeStudent(studentMarks);
console.log(gradeStudent(99))

// console.log(`The student achieved ${result}`);
