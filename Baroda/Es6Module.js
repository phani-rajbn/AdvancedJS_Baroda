export function factorial(num) {
	var fact = 1;
	for(var i = 1; i <= num; i++)
		fact *= i;
	return fact;
}

export function isPrime(num){
	var limit = num /2;
	for(var i = 2; i<= limit;i++){
		if(num % i === 0) return false;
	}
	return true;
}

//export { factorial, isPrime };