function demonstrateWith(propertyName, objectToAddToScope) {
  with (objectToAddToScope) {
    console.log(propertyName);
  }
}

// The with statement extends the scope chain for a statement TO INCLUDE
// THE PROPERTIES OF THE OBJECT PASSED AS AN ARGUMENT

var objectToAddToScope = {
  name: 'Dan'
}

// This is how we usually do it:
console.log(objectToAddToScope.name)

// This is so we can avoid typing 'objectToAddToScope' saving some bytes!
with (objectToAddToScope) {
  console.log(name)
}

// Here is where we get into trouble:
demonstrateWith('name', objectToAddToScope)
