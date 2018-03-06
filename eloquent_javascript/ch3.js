// function power(base, exponent) {
//   if (exponent == 0 ) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(4, 4));
//I think this keeps going through until exponent = 0 and returns 1
//(4,3) would do 4*(4,2)
//____________________________________________________

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(72));
//
// The inner function find does the actual recursing. It takes two arguments, the current number and a string that records how we reached this number. If it finds a solution, it returns a string that shows how to get to the target. If no solution can be found starting from this number, it returns null.
// find(1, "1")
//   find(6, "(1 + 5)")
//     find(11, "((1 + 5) + 5)")
//       find(16, "(((1 + 5) + 5) + 5)")
//         too big
//       find(33, "(((1 + 5) + 5) * 3)")
//         too big
//     find(18, "((1 + 5) * 3)")
//       too big
//   find(3, "(1 * 3)")
//     find(8, "((1 * 3) + 5)")
//       find(13, "(((1 * 3) + 5) + 5)")
//         found!

//____________________________________________________

// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(6)); 
// console.log(power(4, 8));
//____________________________________________________


//IGI

//let x= 10;
//if (true) {
//  let y = 20;
//  var z = 30;
//  console.log(x + y + z);
//  // → 60
//}
// y is not visible here
//console.log(x + z);
// → 40
//
//____________________________________________________
//
 // const hummus = function(factor) {
 //   const ingredient = function(amount, unit, name) {
 //     let ingredientAmount = amount * factor;
 //     if (ingredientAmount > 1) {
 //        unit += "s"; 
 //     };
 //     console.log(`${ingredientAmount} ${unit} ${name}`);
 //   };
 //     ingredient(1, "can", "chickpeas");
 //     ingredient(0.25, "cup", "tahini"); 
 //     ingredient(0.25, "cup", "lemon juice");
 //     ingredient(1, "clove", "garlic");
 //     ingredient(2, "tablespoon", "olive oil");
 //     ingredient(0.5, "teaspoon", "cumin");
// };
// console.log(hummus(1));
//____________________________________________________

// const power = (base, exponent) => {
//    let result = 1;
//    for (let count = 0; count < exponent; count++) {
//      result *= base;
//    }
//    return result;
//   console.log(result);
//  };

// power();
//____________________________________________________

// function square(x) {return x * x; }
// console.log(square("hellooo", 4, true));
