function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}

var b;
doSomething(2); // 15
//this allows access to b and doSomethingElse unnecessarily
--------------------------------------------------------
//this design is properly privatizing b and doSomethingElse within the doSomething function.

function doSomething(a) {
  function doSomethingElse(a) {
    return a-1;
  }
  
  var b;

  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
doSomething(2); //15
_____________________________________________________________
//collision avoidance
function foo() {
  function bar(a) {
    i = 3; // changing the `i` in the enclosing scope's for-loop
    console.log( a + i );
  }

  for (var i=0; i<10; i++) {
    bar( i * 2 ); // oops, infinite loop ahead!
    //this causes an infinite loop b/c bar sets i = 3 everytime, so it's always <10.
    //avoid by renaming i in bar OR setting "var i = 3"
  }
}

foo();

//avoidance in global namespaces can be prevented by adding a single variable definition to a library. 
//If you have a collection of libraries, they can share things in the global scope if you don't
var MyReallyCoolLibrary = {
  awesome: "stuff",
  doSomething: function() {
    // ...
  },
  doAnotherThing: function() {
    // ...
  }
};
_____________________________________________________________
//Functions as Scopes
var a = 2;

function foo() { // <-- insert this

  var a = 3;
  console.log( a ); // 3

} // <-- and this
foo(); // <-- and this

console.log( a ); // 2
//foo is bound in the enclosing scope and we call it directly
--------------------------------------------------------------
//by making the function a function-expression -> (function.. instead of function...
//foo is bound only inside of its own function
//meaning foo is only found in 75-80, it's not polutting the enclosing scope unnecessarily
var a = 2;

(function foo(){ // <-- insert this

  var a = 3;
  console.log( a ); // 3

})(); // <-- and this

console.log( a ); // 2

//example of an inline function
setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
  console.log( "I waited 1 second!" );
}, 1000 );

//IIFE example
var a = 2;

(function IIFE(){

  var a = 3;
  console.log( a ); // 3

})();

console.log( a ); // 2
// can do it two ways 
// (function IIFE(){..}()); -- traditional
// (funciton IIFE(){..})(); -- new new
// stylistic preference ^^


