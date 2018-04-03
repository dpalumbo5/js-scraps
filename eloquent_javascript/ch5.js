//how do we abstract doing something N times?
//easy to write a function that console.logs N times:
function repeatLog(n){
  for (let i = 0; i < n; i++){
    console.log(i);
  }
}

//but what if we want to do different things N times?
//"Since “doing something” can be represented as a function
//and functions are just values, we can pass our action as a function value."
function repeat(n, action){
  for (let i i = 0; i < n; i++){
    action(i);
  }
}

repeat(3,console.log);

//let's say you want to create a function value on the spot
let labels = [];
repeat(5, i => {labels.push(`Unit ${i + 1}`);} );
console.log(labels);
//-> ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
//
//examples of higher order functions
//function that creates new functions
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
//
// functions that change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
//
// functions that provide new types of control flow
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]



function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
//
//charcterCount reduces the ranges assigned to a script by summing their sizes
//the second call to reduce finds the largest script by comparing two scripts and returning the larger
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}

