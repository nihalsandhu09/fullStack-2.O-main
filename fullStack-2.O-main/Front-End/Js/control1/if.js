let userLOgged = false;

if(userLOgged){
    console.log(`user has been logged`)
}else{
    console.log(`Loggin  has failed`)
}


let score = 200

if(score > 100){
    console.log('score has been good')
    score -= 100
}else if(score == 100){
console.log(`score has been lower to 100`)
}
console.log(score)



if(""){  // empty string is falsy value
console.log('hello')
}



if(3 < 4 || 4 < 3){   // with logical or operator 
    console.log('the operation is succesful ')
}

let hour = 9;

if(10 > hour || hour > 11){
    console.log(`office is closed`)
}

if(4<3 & 3<4){
    console.log('logical &and operator ')
}

