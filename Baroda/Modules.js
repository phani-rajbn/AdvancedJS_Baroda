//Modules.js
//Every JS file is a module. A Module can define members: variables, functions and classes.
//All the members created in the module are considered private to the module itself, unless they are exported out from there. 

function factorial(num) {
	var fact = 1;
	for(var i = 1; i <= num; i++)
		fact *= i;
	return fact;
}

function isPrime(num){
	var limit = num /2;
	for(var i = 2; i<= limit;i++){
		if(num % i === 0) return false;
	}
	return true;
}

function shoppingCart(){
	var cart = [];
	function addToCart(product){
		cart.push(product)
	}

	function getAll(){
		return cart;
	}

	return{
		addToBasket : addToCart,
		showAll : getAll
	}
}

//Modules are a part of a framework called Common.js which provides the concept of module exporting mechanism. This feature is what is followed in Nodejs Environments....
//It defines a global variable called module. using this variable, U could create a property called exports and assign data to the exports object...
module.exports = {};

module.exports.factorial = factorial;

module.exports.isPrime = isPrime;
//The functions are made available thro this module as an object that has 2 functions factorial and isPrime....
module.exports.flipKart = new shoppingCart();//flipKart becomes a ready to use objects which is well suited to create singleton object to the user of the module...

