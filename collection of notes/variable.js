// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'Hyeon Jin';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use!)
// var hoisting (move declaration from bottem to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possitive
// only use let if variable needs to change.

// Immutable data types : primitive types, frozen object(i.e. object.freeze())
// Mutable data types :  all objects by default are mutable in JS
// favor immutable data always for a few reasons 
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first- class function

// number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const neagativeInfinity = -1/ 0;
const NAN = 'not a number' / 2;
console.log(infinity);
console.log(neagativeInfinity);
console.log(NAN);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendon = 'brendon';
const greeting = 'hello' + brendon;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendon}`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;  //or let x = undefined
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('test identifier');
const symbol2 = Symbol('test identifier');
console.log(symbol1 == symbol2);
const gsymbol1 = Symbol.for('iden');
const gsymbol2 = Symbol.for('iden');
console.log(gsymbol1 == gsymbol2);  //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));