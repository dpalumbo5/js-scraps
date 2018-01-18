a = 21;
b = a * 2;
console.log(b);
//log is a function of the object console

age = prompt("please tell me your age");
console.log(age);


var a = 20;

a = a + 1;
a = a * 2;

console.log(a);
//=> 42


//coercion
var a = "42";
var b = Number( a );

console.log(a); //"42"
console.log(b); // 42

//constants
Const TAX_RATE = 0.08;
var amount = 99.99;

amount = amount * 2;
amount = amount + (amount * TAX_RATE);

console.log(amount); //=>215.9784
console.log(amount.toFixed(2)); // => "215.98"


//loops 
while (numOfCustomers > 0) {
console.log( "How may I help you?" );

// help the customer...
numOfCustomers = numOfCustomers - 1;
}

// versus:
do {
console.log( "How may I help you?" );

// help the customer...
numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);


//scope
function one() {
// this `a` only belongs to the `one()` function
var a = 1;
console.log( a );
}

function two() {
// this `a` only belongs to the `two()` function
var a = 2;
console.log( a );
}

one();// 1
two();// 2

function outer() {
var a = 1;

function inner() {
	var b = 2;

	// we can access both `a` and `b` here
	console.log( a + b );	// 3
}

inner();

// we can only access `a` here
console.log( a );			// 1
}

outer();

