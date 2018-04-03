var checkIt = require ('../checkIt.js')

checkIt([3,4,5,6],[3,4,5,7])

//Exercise 1 The Sum of a Range
//write a function that takes two arguments, start and end
//returns an array containing the numbers from start up to and including end
  //loop needs to go to end and return the array
  function rangeFunk(x,y,z){
    ary =[];
    if (z == undefined){
    for (let i = x; i <= y; i++){
      ary.push(i);
      }
    }

    else if(!(z == undefined)){
    for (let i = x; i <= y; i = i + z){
      ary.push(i);
      }
    }
    return (ary);
  }
  
 console.log(rangeFunk(4,10));
 console.log(rangeFunk(1,10,2));

  function sumFunk(ary){
    let sum = 0;
    for (let i = 0; i < ary.length; i++){
    sum += ary[i];
    }
    console.log(sum);
  }

  sumFunk([10,40,300]);
  sumFunk(rangeFunk(1,10));

//Exercise 2 Reversing an Array
// write two functions that reverse an array
// the first(reverseArray) takes an array and returns a NEW array with the same elements in reverse order

  function reverseArray(ary){
    newary = []
    for(let i = (ary.length - 1); i >= 0; i--){
      newary.push(ary[i]);
      //start at the end of the array and go down
      //push to new array
    }
    console.log(newary);
  }
  reverseArray([4,6,8,10]);

// the second(reverseArrayInPlace) does what the reverse method does, modifies an array by reversing it's elements
//    i.e. this will return the same array you put in
//
//    apparently this was cheating another cheat is using array.slice(0) revisit this later
// function reverseArrayInPlace(ary){
//   var ary = reverseArray(ary);
// }

  function ReverseArrayInPlace(ary){
  //swap i with array.length-1-i
    for (let i = 0; i < Math.floor((ary.length)/2); i++){
      //You can use a local binding to briefly hold on to one of the elements
      let x = ary[i]
      ary[i] = (ary[ary.length - 1 - i]);
      (ary[ary.length - 1 - i]) = x;
    }
    console.log(ary);
  }

   ReverseArrayInPlace([4,5,6,7,8]);

//Exercise 3 A list
// write an array to list function that spits out an object chain
// let list = {
  // value: 1,
  // rest: {
  //   value: 2,
  //   rest: {
  //     value: 3,
  //     rest: null
  //   }
  // }
// };
//
// Building up a list is easier when done back to front. So arrayToList could iterate over the array backwards (see previous exercise) and, for each element, add an object to the list. You can use a local binding to hold the part of the list that was built so far and use an assignment like list = {value: X, rest: list} to add an element.

//let object = {prop: value, prop, value}
//
// function arrayToList(array){
// for each iteration of array create an object
// first prop is value: i
// second prop is rest: <new object>
//  value: i + 1
//  rest: next object
//    value i + 1
//    rest: null

function arrayToList(ary){
  let list = null;
  for (let i = ary.length - 1; i >= 0; i--){
    list = {value: ary[i], rest: list};
  }
  return list
}

console.log(arrayToList([5,7,9]))

function listToArray(list){
  let array = [];
  for (let boop = list; boop; boop = boop.rest){
  array.push(boop.value);
  }
  return array
}

console.log(listToArray({ value: 5, rest: { value: 7, rest: { value: 9, rest: null } } }))

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  //if n is greater than list, eventually hits null and returns undefined
  else if (n == 0) return list.value;
  //list is the first value rest set
  else return nth(list.rest, n - 1);
  //this is where it loops through each list further on
}
console.log(nth(({ value: 5, rest: { value: 7, rest: { value: 9, rest: null } } }), 0))
