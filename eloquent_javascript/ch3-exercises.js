function minimum(a,b) {
  if (a < b){
    return a;
  }
  else {
    return b;
  }
}
console.log(minimum(3,19))

// _____________________________________

// function isEven(n){
//   // n needs to be a whole, positive number
//   // zero is even, one is odd, for any other number N, its evenness is the same as N-2
//   // return a boolean
//   if (n % 1 !== 0) {
//     //whole number
//    console.log("input needs to be a whole number")
//    }
//   else if (!(n>=0)) {
//     //positive number
//    console.log("input cannot be negative") 
//   }
//   else {
//     function isIt(n){
//       //keep subtracting 2 until it gets to 1 or 0?
//       l
// }
//   console.log(isEven(-2));
//   console.log(isEven(2.6));

function isEven(n){

  if (n === 0) {
   console.log("Truuuuuu");
   }
  else if (n === 1) {
   console.log("naahhhhhh");
   }
  else {
    return isEven(n-2)
  }
}
isEven(50);
// → true
isEven(75);
// → false
isEven(-1);
// → ??

//______________________________________

function countBs(str){
  let counter = 0;
  for (let i = 0; i<str.length; i++){
    if (str[i] === 'B') {
      counter++;
    }
  }
    console.log(`there are ${counter} B's!`);
}

function countChar(str, char){
  let counter = 0;
  if (!(typeof(str) === "string")){
    console.log("what's yo string?")
  };

  if (!(typeof(char) === "string")){
    console.log("what's yo string?")
  };

  for (let i = 0; i<str.length; i++){
    if (str[i] === char) {
      counter++;
    }
  }
    console.log(`there are ${counter} ${char}'s!`);
}

countBs("BBBBBBabaBlackSheep");
countChar("sup suppy sup sup", "p");
