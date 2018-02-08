var bar = 5
{
  console.log(bar);
  let bar = 2
  console.log(bar);
}
console.log(bar)

let foo = 'bar'


console.log(foo)

try {
  undefined(); // illegal operation to force an exception!
}
catch (err) {
  console.log( err ); // works!
}

console.log( err ); // ReferenceError: `err` not found
