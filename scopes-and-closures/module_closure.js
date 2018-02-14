function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( " ! " ) );
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
    // these allow you to call these functions on foo later
    // they give access to the functions but not the variables declared on 2 & 3
  };
}

var foo = CoolModule();
//need to invoke this function to create the module instance
//without it the inner scope and closures wouldn't exist
// ***EACH TIME CoolModule is invoked a module is created***

foo.doSomething();
foo.doAnother(); 

//You can turn it into a 'singleton' module by making it an IIFE

var foo = (function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( " ! " ) );
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3


//modules are functions and can be passed params

var foo = (function CoolModule(id) {
  function change() {
    // modifying the public API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log( id );
  }

  function identify2() {
    console.log( id.toUpperCase() );
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
