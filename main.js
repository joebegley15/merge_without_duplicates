function mergeWithoutDuplicates(arrA,arrB){
	const noDupHash = {};
	arrA.map(function(x){
		noDupHash[x] = true;
	})
	arrB.map(function(x){
		noDupHash[x] = true;
	})
	return Object.keys(noDupHash);
}

arrA = [];
arrB = [];
var start = new Date().getTime();
for (var i = 0; i < 1000000; i++) {
	arrA.push(Math.ceil(Math.random() * 1000));
	arrB.push(Math.ceil(Math.random() * 1000));
}
var mid = new Date().getTime();
console.log(mid - start);
console.log(mergeWithoutDuplicates(arrA,arrB));
var end = new Date().getTime();
console.log(end - mid);
