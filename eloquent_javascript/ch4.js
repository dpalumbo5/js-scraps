//concat and slice
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));


//more arrayology
let todoList = [];
function remember(task) {
  todoList.push(task);
  //add item to array
}
function getTask() {
  return todoList.shift();
  //will remove the item from the array
}
function rememberUrgently(task) {
  todoList.unshift(task);
  //add item to the front of the list
}

remember("call mom");
remember("eat a bagel");
remember("drink coffee");
console.log(todoList);
//["call mom", "eat a bagel", "drink coffee"]
getTask("drink coffee");
console.log(todoList);
//["eat a bagel", "drink coffee"]
rememberUrgently("drink coffee");
console.log(todoList);
//["drink coffee", "eat a bagel", "drink coffee"]

//**since getTask doesn't take a task, it just removes the first one**



//creating journal for squirrel guy
//journal is an array of objects
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


// object 2 and 1 refer to the same object, object 3 has the same value but refers to a different object, so line:9
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


//you can change the properties of an object with assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


//deleting and checking for presence in an object
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


//creating an object with curly braces
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false


// Array propery examples
let arr = [1,3,5]
arr.push(2);
arr.push(4);
console.log(arr)
  // [1,2,3,4,5]
console.log(arr.pop());
  // 5
console.log(arr);
  //[1,2,3,4]

