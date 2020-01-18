//Classes in JS: 4 ways of creating classes in JS...
/////////////////Singleton Classes///////////////////////////
var emp = {};
emp.empID = 123;
emp.empName ="Phaniraj";
emp.empAddress = "Bangalore"
console.log(emp);//The complete obj data will be displayed...

console.log(`${emp.empName} from ${emp.empAddress}`);
/////////Function based Classes////////////////
function book(id, title, price){
	this.bookId = id;
	this.title = title;
	this.cost = price;
	//this operator makes the object filled with the data that U wish to provide. without this, the variable is scoped only to the function....
}
//It allows to create objects using new operator and gives a OO approach towards classes and objects. Classes will defined as functions and objects will be created using new operator. new will implicitly invoke the method that creates the object for u.... 
var b1 = new book(123, 'Pro JS', 450);
var b2 = new book(124, 'ES6 Features', 340);
console.log(b1.title);
console.log(b2.title);
////////////////////Anonymous Functions////////////////////////////////////
var customer = function(id, name, address){
	custId = id;
	custName = name;
	custAddress = address;
	return {
		customerID : custId,
		customerName : custName,
		customerAddress : custAddress		
	}
}

var cst = new customer(123, "TestName", "TestAddress");
console.log(cst);
//////////////////////new syntax of Class based on ES6/////////////////
class Customer{
	//constructor is used to create the object. Basically a function that is invoked when the object is created. It provides the scope of injecting the basic dependencies for the successfull object creation. 
	constructor(id, name, address){
		this.cstId = id;
		this.cstName = name;
		this.cstAddress = address;
	}
}

class CustomerRepository{
	addCustomer(cst){
		this.customers.push(cst);
	}

	constructor(){
		this.customers = [];
		this.addCustomer(new Customer(123, "Phaniraj", "Bangalore"));
		this.addCustomer(new Customer(124, "Gopal", "Bangalore"));
		this.addCustomer(new Customer(125, "Rajeev", "Bangalore"));
		this.addCustomer(new Customer(126, "Suraj", "Bangalore"));
		this.addCustomer(new Customer(127, "Krishnan", "Bangalore"));
	}


	deleteCustomer(id){
		/*var cst = this.customers.find(function(arg){
			return arg.cstId == id;
		})*/
		var cst = this.customers.find((arg)=>arg.cstId == id);
		var index =this.customers.indexOf(cst);
		this.customers.splice(index, 1);
	}

	updateCustomer(cst){
		let copy = this.customers.find((val)=> val.cstId == cst.cstId);
		if(copy == undefined)
			throw "Customer not found to update";
		copy.cstName = cst.cstName;
		copy.cstAddress = cst.cstAddress;
	}

	getAllCustomers (){
		return this.customers;
	}
}

/*let db = new CustomerRepository();
db.addCustomer(new Customer(123, "Phaniraj", "Bangalore"));
db.addCustomer(new Customer(124, "Gopal", "Bangalore"));
db.addCustomer(new Customer(125, "Rajeev", "Bangalore"));
db.addCustomer(new Customer(126, "Suraj", "Bangalore"));
db.addCustomer(new Customer(127, "Krishnan", "Bangalore"));

db.updateCustomer(new Customer(134, "Gopal", "Mysore"));

var data = db.getAllCustomers();
data.forEach(function(v, i){
	console.log(v.cstName);
})

*/