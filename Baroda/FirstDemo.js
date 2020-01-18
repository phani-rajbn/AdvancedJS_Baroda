//FirstDemo.js
function addFunc(first, second) {
	//console.log(first + second);
	var firstValue = parseFloat(first);
	var secondValue = parseFloat(second);
	return firstValue + secondValue;
}

function subFunc(first, second){
	var firstValue = parseFloat(first);
	var secondValue = parseFloat(second);
	return firstValue - secondValue;	
}
//The new interpolation syntax of JS introduced in ES6...
console.log(`The Added Value is ${addFunc(123,234)}`);
console.log("The substracted value is " + subFunc(123, 23));
