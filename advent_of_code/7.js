input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

var arrayedInput = input.split('\n');

var answer = arrayedInput.reduce((accumulator, currentValue) => {
  let key = currentValue.match(/^[a-z]*/);
  // let weight = currentValue.match((\d{1,}));
  //
  const realDiscsFunction = (currentValue) =>{
    if(currentValue.match(/-> {1}(.*)/) === null) {
      return [];
    }
    else {let discs = currentValue.match(/-> {1}(.*)/g)
      let sliced = discs[0].slice(2);
      let split = sliced.split(',');
      return split;
    }
  }
  let discs = realDiscsFunction(currentValue);

  accumulator[key] = discs;
  return accumulator;

},{}
);
console.log(answer);
