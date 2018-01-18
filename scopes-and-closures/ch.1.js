function foo(a) {
  var b = a;
  return a + b;
}

var c = foo( 2 );

//identify the 3 LHS look ups and the 4 RHS look ups
//
//LHS: foo(2), b = a, c = foo(2)
//RHS: foo, return,
//
//engine: scope, RHS reference foo
//scope: here
//engine: RHS reference for foo(a), does it exist?
//scope: yep compiler created it
//engine: LHS ref for c = ..
//scope: yep it's declared
//engine: LHS ref setting a to 2 foo(2)
//scope: yep foo (a) created earlier
//engine: LHS ref b = a
//engine: RHS ref = a;
//engine: RHS ref a +,
//engine: RHS ref + b
//LHS answers correct!
// RHS answers: foo(2.., = a;, a + .. and .. + b
//nested scope
function foo(a) {
  console.log( a + b );
}

var b = 2;

foo( 2 ); // 4

// Engine: "Hey, Scope of foo, ever heard of b? Got an RHS reference for it."
// Scope: "Nope, never heard of it. Go fish."
// Engine: "Hey, Scope outside of foo, oh you're the global Scope, ok cool. Ever heard of b? Got an RHS reference for it."
// Scope: "Yep, sure have. Here ya go."
