// The major difference between let and var exist around the scoping mechanism

// let and onst support block scope
// var support functoins scope and if functions sport not present then global scope 


// let and const support TDZ 
// var does'nt support TDX 

// difference bewenn let and const 
// Reasssignment


// variable declared with let are reassignable 
// const on the other hand is not 


function letReassignment(){
    let x = 10;
    console.log(x);
    x = 'nihal';
    console.log(x)
}

function constReassignment(){
    const x = 10;
    console.log(x)
    x = 'Niahl';
    console.log(x)
}

// letReassignment()

// constReassignment()

function constReassignmentWithObject(){
    const obj = {x:10,y:20}
    console.log(obj);
    obj - {a:5}; // reassignment to a brand new object will throw an error 
}

function constUpdatingValue(){
    const o = {x:10,y :0}
o.x = 90; // this do not throw an error 
o.y = 99;
}