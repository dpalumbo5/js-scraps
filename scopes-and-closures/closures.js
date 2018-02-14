// var fn;

// function foo() {
//   var a = 2;

//   function baz() {
//     console.log( a );
//   }

//   fn = baz; // assign `baz` to global variable
// }

// function bar() {
//   fn();
// }

// foo();

// bar();

for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );
   }, i*1000);
}

for (var i=1; i<=5; i++) {
  (function(){
    setTimeout( function timer(){
      console.log( i );
    }, i*1000 );
  })();
}

for (var i=1; i<=5; i++) {
  (function(j){
    setTimeout( function timer(){
      console.log( j );
    }, j*1000 );
  })( i );
}
