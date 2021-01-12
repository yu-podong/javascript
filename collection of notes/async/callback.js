'use strict'

// JavaScript is synchronous.
// Execute the code block order after hoisting
// hoisting : move top for var, function declaration 
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'podong' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id);
      }
      else {
        onError(new Error('not Found!'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'podong'){
        onSuccess({name:'podong', role: 'admin'});
      }
      else {
        onError(new Error('not Found!'));
      }
    })
  }
}

/* 
      <Logic of code below>
first. input id, password 
second. Login using entered id & password
thrid. get id & request user's role
fourth. if successly responsing user's role, print user's object(name, role)
*/

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error)
  }
);