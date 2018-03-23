// export { checkIt }

function checkIt(ary1, ary2){

  for (let i = 0; i <= ary1.length; i++){

    if (ary1.length !== ary2.length){
    console.log(`Arrays aren't the same length ary1: ${ary1.length}, ary2: ${ary2.length}`);

     break;
    }

    if(ary1[i] !== ary2[i]){
    console.log(`ary1 index ${i} is ${ary1[i]}, ary2 index ${i} is ${ary2[i]}`);
      break;
    }
  }
  console.log(`ary1: ${ary1}, ary2: ${ary2}`)
}

checkIt([4,0,2,7],[4,5,2,7])
