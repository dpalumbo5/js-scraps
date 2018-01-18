// var answer = prompt("odds or evens?");
// prompt is not included in node

var randomNumber = Math.floor(Math.random() * 20);

   if (randomNumber % 2 === 0) {
         randomNumber = "evens";}

   else {
     randomNumber = "odds";}

   console.log(randomNumber);


// var compare = function(answer,randomNumber){
// why does this say unexpected character and reference a line number not in this file?

//this won't work until line 15 does
//   if (answer === randomNumber){
//     console.log("you win!");}

//   else {
//     console.log("you're the odd one out, byyyyeee");}
