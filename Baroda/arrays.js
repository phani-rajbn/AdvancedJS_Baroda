function demoOnArray () {
	var data  =[123, 234,345,35,566];
	/*for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}*/
	data.forEach(function(value, index){
		console.log(value)
	})
}

var items = [];
items.push("Apple");//Adds the item to the bottom of the List...
items.push("Mango");
items.push("Orange");
items.push("Banana");
console.log(`${items.length} is the total no of items in the basket`);

//filter is used to get the subset of data from the colletion based on the condition defined in the callback function...
var subset = items.filter(function(value){
	return value.includes("a")
});

subset.forEach(function(value, index){
	console.log(value)
});

items.splice(2,1);//delete the(1) element at the index 2 
//demoOnArray();

//find method in Arrays. find vs. filter.
