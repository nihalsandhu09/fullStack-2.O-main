/** 1. In the following shopping cart add, re9ove, and edit ite9s
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey]'#
8 add 'Meat' in the beginning of >our shopping cart if it has not been alrea"> a""e!
8 add Sugar at the end of our shopping cart if it has not been already added!
8 remove '$one>' if >ou are allergic to hone=
8 mo"if> Tea to 'Green Tea' */


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
 
// meat has been add to our cart at the beginning 
shoppingCart.unshift("Meat")  

console.log(shoppingCart)

 // Sugar has been add to End of our Shopping Cart
shoppingCart.push("Sugar")

console.log(shoppingCart) 

// honey Removes from Array 
shoppingCart.splice(4,1)   

console.log(shoppingCart)

// Modifying Tea To Green Tea 

// shoppingCart[3] = "Green Tea";  // we can do this 
shoppingCart.splice(3,1,"Green Tea") // we can achive this wth this splice Method also
console.log(shoppingCart)