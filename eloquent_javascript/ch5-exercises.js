//Use the reduce method in combination with the concat method to “flatten” an array of arrays 
//into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
//=> [1,2,3,4,5,6]

console.log(arrays.reduce((acc,currv) => {
  return acc.concat(currv);
}))


//Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. And finally, it calls the update function to create a new value and starts from the beginning.
const loop = (val, testFun, updateFun, bodyFun) => {
  for (let i = val; testFun(i); i = updateFun(i)){
    bodyFun(i);}
}

loop(3, n => n > 0, n => n - 1, console.log);
// => 3
// => 2
// => 1

//Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
// loop every
// function every(array, test) {
//   for (let i = 0; i < array.length; i++){
//     if (!(test(array[i]))) {return false;}
//   }
//   return true;
// }

//some every
const every = (array, test) => {
  return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
//→ true
console.log(every([2, 4, 16], n => n < 10));
//→ false
console.log(every([], n => n < 10));
//→ true
