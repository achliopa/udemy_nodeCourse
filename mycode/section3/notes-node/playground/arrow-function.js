// var square = (x) => {
// 	var result = x*x;
// 	return result;
// };

// var square = (x) => x*x;

var square = x => x*x;
console.log(square(9));

var user = {
	name: 'Andrew',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi! I am ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi! I am ${this.name}`);	
	},
	//ES5
	sayHiES5: function() {
		console.log(arguments);
		console.log(`Hi! I am ${this.name}`);
	}
};
user.sayHi(100,200,300);
user.sayHiAlt(100,200,300);
user.sayHiES5(100,200,300);
