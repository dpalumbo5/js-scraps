//can also break out of loops with break statments
//don't even need to add a false param
for (let current = 22; ; current = current +1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
