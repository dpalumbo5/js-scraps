//write a loop to print
//#
//##
//###
//####
//#####
//######
//#######
//for (let number = 0; number <= 12; number = number + 2)

for (let i = '#'; i.length < '8'; i += '#'){
  console.log(i);
}

// //console.log numbers from 1 to 100, for numbers divisible by 3 print fizz, for numbers divisible by 5 print buzz, for numbers divisible by both print fizzbuzz

for (let i = 1; i < 101; i ++) {
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

//create a program that creates a string that reps an 8 x 8 grid using new line characters
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
//when you have that, define a binding size = 8, and change the program so that it works for any size outputting a grid of the given width and height

function dansRepeat(str,mult){
  let thingy = ` `
  if(!(typeof(str) === `string`)){
    console.log("no");
  }else{
    let i=1;
     while (i < mult + 1){ 
       i++
      (thingy += str);
    }
    console.log(thingy);
  }
}

var x = 10
for (let row = 1; row < x+1; row ++) {
  if (row % 2 == 0){
    //console.log(`# `.repeat(.5*x));
    dansRepeat(`# `,(.5*x));
  }
  else {
    // console.log(` #`.repeat(.5*x));
    dansRepeat(` #`,(.5*x));
  }
}
