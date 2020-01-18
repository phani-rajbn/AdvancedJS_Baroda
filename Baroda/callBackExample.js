//callBackExample.js
//Callback functions are async functions that are passed as parameter of a funciton and will be invoked on condition while the next line of execution would have occured without waiting for the function to complete. 

function msgAll(fnsms, fnemail){
	setTimeout(()=>{
		fnsms();
		fnemail();
	}, 3000);
	console.log("All the messages are posted");
}
 function sendSMSs(){
	for(let i =0; i < 10; i++){
			console.log("SMS sent to Mr.User" + i);
		}
}

 function sendEmails(){
	for(let i =0; i < 10; i++){
			console.log("Email sent to Mr.User" + i);
		}
}

async function doOperations(){
	sendSMSs();
	sendEmails();
}
//msgAll(sendSMSs, sendEmails);
//console.log("End of all notifications");
//////Promise object////////////////////////////////////////////////////
//Promise is a class that allows to invoke a function asynchronously in a more cleaner manner with better readability. 

/*let pObject = new Promise((success, rejection)=>{
	//call for the success operation
	var data = ["Apple", "Mango", "Orange"];//data from a database...
	for (var i = 0; i < data.length; i++) {
		if(data[i] == "Banana")
			success("Banana was found in the basket");
	}
	rejection("Banana was not found in the basket");
	//rejection operation if the success is not happening...
})
console.log(pObject);
pObject.then((sucessRes)=>{
	console.log(sucessRes);
}).catch((rejRes)=>{
	console.log("Reason behind the failure: " + rejRes);
}).finally(()=>console.log("Clean up which happens on all conditions"));
console.log("Is this the last statement?");*/
/////////////////////////ES7 has new way: async and await/////
function toDoSomeThing(){
	for (var i = 0; i < 10; i++) {
		console.log("doing something big....")
	}
}

let func = async(callMe)=>{
	await callMe();
	return "Completed Successfully"
};
func(doOperations).then((res)=>console.log(res));
//func itself is a promise object which will be invoked asynchronously.....
console.log("End of the program");
//await cannot be used on top level functions. await can be be placed in async functions. It cannot be used on normal methods. When U have placed await in the async function, U dont need then block in the callfunction as it await would anyhow wait for the function to return...
//When U need to wait for multiple promises, we can wrap all the objects into Promise.all and then call await for the promise to complete all the tasks.
/*let allResults = await Promise.all([
	fetch(url1),fetch(url2),fetch(url3)
]);
The main advantage of async operation is: It returns a promise object and allows await inside to to wait for its completion.
There is a library called RxJS which uses a similar object called Observables that behaves similar to Promise object. Instead of then, we have resolve function called SUBSCRIBE that is used to resolve the Observable object.  
*/