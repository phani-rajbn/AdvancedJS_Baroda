//exceptionHandling.js.
/*
An Exception is an abnormal situation where the app fails to execute further due to the inputs provided by the user that could not be computed or could a logical error that has raised due to the faultness of the program.
Exceptions are handled using try...catch...finally statements. try must be followed by catch and an optional  finally block. 
Exceptions are raised using a keyword throw. throw determines how U wish to raise the Exception. It could be either by a message or by creating an instance of a custom class that contain more info about the exception.
finally block executes on all conditions. finally is something that will happen irrespective of the exception or not. clean up operations are done in the finally block 
*/
/////////////////Old Syntax of Custom Exception//////////////////////
function customException(msg){
	this.message = msg;
	this.name="customException";
}
/////////////////New ES6 syntax of creating custom Exceptions//////////////
class NumberNotValidException extends Error{
	constructor(msg, name){
		super(msg);
		this.message = msg;
		this.name = name;
	}
}
function checkForNumber(value){
	if(isNaN(value))
		//throw "Not a valid Number";//throw is a jump statement. It Exits the function and if not handled escalates to the caller and its caller till the Application comes to the state of termination.
		//throw new customException("Not a valid number") 
		throw new NumberNotValidException("Not a valid number", "NumberNotValidException");
	return value;
}

function testFunc() {
	try{
		let v = "234Apple";
		checkForNumber(v);
	}catch(err){
		console.log(err);
	}finally{
		console.log("End of the program");
	}
}
testFunc();