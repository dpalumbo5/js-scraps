const a = (arg) => arg/2;
const b = (blarg) => { return blarg();}

// console.log(b());
// not sure, type error - blarg is not a function, blarg isn't a function so you can't call it

// const d = 'hello'
// console.log(d());
// type error because hello is not a function; type error, d is not a function, you're calling d not hello.

//come up with a random name, and type it into the console, calling it as a function. WWW

// console.log(suppy());
//suppy is not a function; suppy is not defined; it is a ref error instead because you are referencing something you've never defined

// console.log(a(b));
//b is not an integer?; NaN; b is not a number, that's what happens when you divide by 2

// console.log(a(b()));
//b is not a function; b is not a function; b is not a function

// console.log(a('hi'));
//NaN;NaN; hi is not a number

// console.log(a(54));
//27;27, 54 / 2 = 27

const j = (thingy) => {return thingy}
// console.log(j(console.log()));
//not sure what happens when you console log nothing; undefined
// console.log(j(console.log()('like this?')));
console.log(j(console.log())('or this?'));
//not sure