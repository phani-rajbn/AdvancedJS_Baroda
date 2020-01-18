/*function temp(name, age){
	this.name = name;
	this.age = age;
}

var obj = new temp("Phaniraj", 43);
console.log(obj);
//Every class in JS is derived from Object, which is the super class for every type in JS.
//Types in JS are of 4 types: number, string, Object, undefined. U could use the typeof operator to find the internal data type of a variable. var is the only way of declaring the variable before ES6.
//THe base type of any class could be refered using a property called ProtoType. This property could be used thro any object to either access the base class members or add newer properties to the base type of the object. 
//PS:The prototype is a property of the object, not the class. 
temp.prototype.jobDesc = "Trainer in JS";//Property addition
temp.prototype.display = function(){//function addition
	console.log("Display Function");
}
console.log(obj);
var obj2 = new temp("Sunder", 45);

console.log(obj2);
obj2.jobDesc ="Trainer in .NET";
console.log(obj2.jobDesc);
console.log(obj2.display());
console.log(obj2.__proto__ == temp.prototype);
for(member in obj2)
 console.log(obj2[member]);*/
////////////////////New ES6 Syntax of Inheritance//////////////////
class baseClass{
	constructor(){
		console.log("Base class created with arg ");
	}
	addFunc(first, second){
		return first + second;
	}
	static singletonMethod(){
		console.log("Called by its classname");
	}
}

class derivedClass extends baseClass{
	//overriding the constructor provided by the JS Engine which means that U should explicitly call the base version before ur constructor is to be invoked which otherwise will be done by the default constructor provided by the JS Engine.
	
	constructor(){
		super();//explicit way of invoking the base class constructor U must call...
		console.log("derived class object is created");
	}

	subFunc(first, second){
		return first - second;
	}
	static anotherMethod(){
		console.log("another method");
	}
	//method overriding in JS....
	addFunc(first, second){
		let res = super.addFunc(first, second);//invoking the memthod of the base class. use the super keyword only if there is conflict in the method invocation
		return res + (first * second)
	}
}

var obj = new derivedClass();
console.log(obj.addFunc(123,23));//from the base class
console.log(obj.subFunc(123,23));//from the derived class.

baseClass.singletonMethod();
derivedClass.singletonMethod();//base class static methods become static in the derived class also...
//Static methods can be invoked only by the name of the class, not thro the object.