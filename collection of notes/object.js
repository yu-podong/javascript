'use strict';
// Objects
// one of JavaScript data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };
const obj1 = {} // 'object literal' syntax
const obj12 = new Object(); // 'object constructor' syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const hyeonjin = { name : 'hyeonjin', age : 21};
print(hyeonjin);

// with JavaScript magic(dynamically typed language)
// can add property later
hyeonjin.hasjob = false;
console.log(hyeonjin.hasjob);

// can delete property later
delete hyeonjin.hasjob;
console.log(hyeonjin.hasjob);

// 2. Computed properties
// key should be always string
console.log(hyeonjin.name);
console.log(hyeonjin['name']);
hyeonjin['hasjob'] = false;
console.log(hyeonjin['hasjob']);

function printValue(obj, key){
  console.log(obj[key]);
}
printValue(hyeonjin, 'name');
printValue(hyeonjin, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 19};
const person2 = {name: 'steve', age : 21};
const person3 = {name: 'Julia', age: 20};
const person4 = new Person('hyeonjin', 21);
console.log(person4);

/*
const person4 = makePerson('hyeonjin', 21);

function makePerson(name, age){
  return {
    name, age,
  };
}
*/

// 4. Constructor function
function Person (name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in hyeonjin);
console.log('age' in hyeonjin);
console.log('random' in hyeonjin);
console.log(hyeonjin.random);

// 6. for..in vs for..of
// for (key in obj)
for(let key in hyeonjin){
  console.log(`${key} : ${hyeonjin[key]}`);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for(let value of array){
  console.log(value);
}

// 7. Cloning
const user = {name : 'steve', age : 21};
const user2 = user;
user2.name = 'bob';
console.clear();
console.log(user.name);

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
  console.log(user3[key]);
}

// Object.assign(dest, [obj1, obj2, ...])
const user4 = {}
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size : 'big'};
const fruit3 = {color: 'black', num : 5};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed.num);