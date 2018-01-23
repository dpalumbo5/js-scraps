function foo(a) {

  var b = a * 2;

  function bar(c) {
    console.log( a, b, c );
  }

  bar(b * 3);
}

foo( 2 ); // 2 4 12
//there are three scopes here
//Scope 1 encompasses the global scope, and has just one identifier in it: foo.
//Scope 2 encompasses the scope of foo, which includes the three identifiers: a, bar and b.
//Scope 3 encompasses the scope of bar, and it includes just one identifier: c.
