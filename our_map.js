function ourToUpperCase(str) {
  return str.toUpperCase()
}

function replaceWith(index, array 2){
//loop through array, and set index = to array[i]
}


// Given an array of elements, and a function,
// return new array, with each given element from
// the old array passed through the given function.
function ourMap(ary, func) {
  var newArray = []
  for (let i = 0; i < ary.length; i++){
    var result = func(ary[i]);
    newArray.push(result);
  }
  return newArray;
}

originalArray = ['hi', 'there', 'dan']
capitalized = ourMap(originalArray, ourToUpperCase);
console.log('capitalized:', capitalized)

expectedOutput = ['HI', 'THERE', 'DAN']
console.log('expectedOutput:', expectedOutput);
