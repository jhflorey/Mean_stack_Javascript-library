// can we make thid into a method of an objects?

function each(arr, callback){
	// loop through the array
	for (var i = 0; i < arr.length; i++){
		callback(arr[i]);	// invoking the callback many times. ... delegation!
	}
}

// to create the Javascript library, you will need to add methods to a JS objects
// let built a few methods of underscore!

var _ = {
	map: function(arr, callback){
		for (var i = 0; i < arr.length; i++){
			arr[i] = callback(arr[i]);
		}
	},
	reduce: function(arr, callback, memo){
		var el = 0;
		if (!memo){
			memo = arr[0];
			el = 1
		}
		for (var i = el; i < arr.length; i ++){
			memo = callback(arr[i], memo);
		}
		return memo;
	},
	find: function(arr, callback){
		for (var i = 0; i < arr.length; i ++){
			if (callback(arr[i])){
				return arr[i];
			}
		}
	},
	// var evens = _.filter([1,2,3,4,5,6], function(num){ return num % 2 == 0; });
	filter: function(arr, callback){
		var tempArr = [];
		for (var i = 0; i < arr.length; i++){
			if (callback(arr[i])){
				tempArr.push(arr[i]);
			}
		}
		return tempArr;
	},
	reject: function(arr, callback){
		var tempArr = [];
		for (var i = 0; i < arr.length; i ++){
			if (!callback(arr[i])){
				tempArr.push(arr[i]);
			}
		}
		return tempArr;
	},
}
// you just created a library with 5 methods!
var arr = [3,4,5];
_.map(arr, function callback(x){return x * 5;});
console.log(arr);
console.log(_.reduce(arr, function callback(x, memo){return x + memo;}));
console.log(_.find(arr, function callback(x){return x == 15;}));
_.filter(arr, function(x){return x > 20;})
console.log(arr);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); 



// [ 15, 20, 25 ]
// 60
// 15
// [ 15, 20, 25 ]
// [ 2, 4, 6 ]












