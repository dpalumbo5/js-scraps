//bar.js file
function hello(who) {
  return "Let me introduce: " + who;
}

export hello;

//foo.js file
// import only `hello()` from the "bar" module
import hello from "bar";

var hungry = "hippo";

function awesome() {
  console.log(
    hello( hungry ).toUpperCase()
  );
}

export awesome;

//third.js file
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";

console.log(
  bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO
