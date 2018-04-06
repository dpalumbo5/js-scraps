//if you console.log(this); in the global scope, you'll get the window object
//if you log it in an object you get the object
//
let ello = {
  greeting: 'suppy?',
  test: function(){
    console.log(this);
  }
};
ello.test()

//arrow functions don't bind this, what does that mean?
