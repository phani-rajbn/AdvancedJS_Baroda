var res = 0;
for (var i = 0; i < 20000000; i++) {
	console.log("Work is being done");
	res += i;
}
postMessage(res);