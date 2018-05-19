var input = [2,8,8,5,4,2,3,1,5,5,1,2,15,13,5,14]
//445 is too low

function dispersify(array){
  let dispersions = [];

  function lilDispersify(arr){
  let highestNumber = Math.max(...array);

  function findHighestNumber(element) {
  return element == highestNumber;
  }
  let highestNumberIndex = array.findIndex(findHighestNumber);
  array[highestNumberIndex] = 0;

  let index = highestNumberIndex++;
    if (index == array.length){
      index = 0; }

  let counter = highestNumber
  let dispersedArray = array

  while(counter > 0){
       if (index == dispersedArray.length - 1){
      index = 0;
    }

    else {index++};
    dispersedArray[index]++;


    counter --;
  }

  let stringified = dispersedArray.toString()

  if(dispersions.includes(stringified)){
    console.log(dispersions.length);
    return;
  }

  else {dispersions.push(stringified);}
    console.log("else stringified", stringified);

    lilDispersify(dispersedArray);
  }
  lilDispersify(array);
}

console.log(dispersify(input));

