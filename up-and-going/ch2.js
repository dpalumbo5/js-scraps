// js has a typeof operator to examine any VALUE
// there are seven types: string, number, boolean, null, undefined, object, symbol
var a;
typeof a;// "undefined"

a = "hello world";
typeof a;// "string"

a = 42;
typeof a;// "number"

a = true;
typeof a;// "boolean"

a = null;
typeof a;// "object" -- weird, bug

a = undefined;
typeof a;// "undefined"

a = { b: "c" };
typeof a;// "object"

var obj = {
a: "hello world",
b: 42
};

var b = "a";

obj[b];// "hello world"
obj["b"];// 42

//scoping
function foo() {
  var a = 1;

  if (a >= 1) {
    let b = 2;

    while (b < 5) {
      let c = b * 2;
      b++;

      console.log( a + c );
    }
  }
}

foo();
// 5 7 9

var a = 42;

var b = (a > 41) ? "hello" : "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }


//closure
function makeAdder(x) {
  // parameter `x` is an inner variable

  // inner function `add()` uses `x`, so
  // it has a "closure" over it
  function add(y) {
    return y + x;
  };

  return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
//you're essentially setting y when you pass in the variable to either function plus one or plus ten
//you have set the x with make adder(value)**
var plusTen = makeAdder( 10 );

plusOne( 3 );    // 4  <-- 1 + 3
plusOne( 41 );    // 42 <-- 1 + 41

plusTen( 13 );    // 23 <-- 10 + 13

