//NewES6Features.js
//Method definitions within a Class without an explicit class creation...
var obj = {
	testFunc(){
		console.log("test Func")
	}
};//If U want an object with single method in it. It was introduced in ES5 but becaome popular since ES6...There is no need for this operator.
console.log(obj.testFunc()); //The purpose of method definition syntax is to create objects off the line and associate a method to it This method behaves like static method which is invoked by the name of the class. There is no need for this operator where the method is directly associated with the object. 
///////////////Default parameters in JS////////////////////
function testFunc(arg){
	if(arg!= undefined){
		console.log(arg);
	}else {
		console.log("The value of arg is not provided")
	}
}
//testFunc();

function exampleFunc(arg = 123){
	testFunc(arg);
}

exampleFunc();

function getDate(dt = new Date()){
	let dd = dt.getDate();
	let MM = dt.getMonth() + 1;
	let yy = dt.getFullYear();
	return `${dd}/${MM}/${yy}`;
}
console.log(getDate());
/////////////////////Rest parameters in JS////////////////
function addFunc (...values) {
let res = 0.0;
values.forEach((value)=>{
	res += value;
})
return res;		
}
//The variable parameter should be the last of the parameter list. U can have only one such variable paramter within the function. Priority would be given to the actual parameters and then to the variable parameters. Implicitly the rest parameter is always an array.
console.log(addFunc(123,23));
console.log(addFunc(123,23, 56,56,6,7));
/////////////////////Properties in JS/////////////////
class Employee{
/*	constructor(id ,name, address){
		this.empId = id;
		this.empName = name;
		this.empAddress = address;
	}*/

	get empId(){
		return this._id;
	}

	set empId(value){
		this._id = value;
	}

	get empName(){
		return this._name;
	}
	set empName(value){
		this._name = value;
	}
}

var emp = new Employee();
emp.empId = 123;
emp.empName = "SomeName";
console.log(emp.empId);
//////////////////Lambda Expressions//////////////////////////
//usefull in callback functions and creating methods as expressions
//=> means goes to or gets U.....
//lambda expressions is another acroynm for Arrow functions....
//Helpful for creating callback functions without a need for explicit functions. This is an improvizations on Anonymous methods that was used for callback functions. 
//U can create single line methods as Lambda Expressions. These are called as Arrow functions.
addFunc = (first, second) => first + second;
console.log("The added value is " + addFunc(123, 234));