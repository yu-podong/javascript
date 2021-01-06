// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello!');
}
printHello();

function log(message){
  console.log(message);
}
log('Hello!');
log(1234);

// 2. Parameters
// primitive parameters : passed by vaule
// object parameters : passed by reference
function changeName(obj){
  obj.name = 'coder';
}
const hyeonjin = {name:'hyeonjin'};
changeName(hyeonjin);
console.log(hyeonjin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
  console.log(`${message} by ${from}`);
}
showMessage('Hello hyeonjin');

// 4. Rest parameters (added in ES6)
function printAll(...args){
  console.log('way 1');
  for(let i = 0; i < args.length; i++){
        console.log(args[i]);
  }

  console.log('way 2');
  for(const arg of args){
    console.log(arg);
  }
  
  console.log('way 3');
  args.forEach((arg) => console.log(arg));
}
printAll('Learning', 'javascript');

// 5. Local scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'vscode';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1,3);
console.log(`sum: ${sum(1,3)}`);

// 7.Early return, early exit
// bad case
function upgradeUser(user) {
  if(user.point > 10){
    // long logic..
  }
}

//good case
function upgradeUser(user) {
  if(user.point <= 10)
    return;
  // long logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to value.
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.
const print = function (){
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') 
    printYes();
  else
    printNo();
}
//anonymous function
const printYes = function () {
  console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('No!');
}
randomQuiz('love you', printYes, printNo);
randomQuiz('lovetwo', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a ,b) => {
  //do something...
  return a + b;
}

//IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log('Hello World!');
})();

// Fun quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      console.log('wrong command!');
  }
}
console.log(calculate('remainder', 4, 2));
console.log(calculate('aad', 4, 2));