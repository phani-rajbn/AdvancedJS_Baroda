//moduleClient.js: This file consumes the module that we created...
//var myModule = require("./Modules");//All the functions of the module is to be used in the program..
/*var func = require("./Modules").factorial;
var res = func(5);
console.log(res);*/

var cart = require('./Modules').flipKart;
cart.addToBasket({id:123, title:"Samsung Note 8", price : 67000});
cart.addToBasket({id:124, title:"iPhone 7S", price : 87000});

var items = cart.showAll();
console.log(items);