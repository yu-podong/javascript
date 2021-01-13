// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'podong' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not Found!'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'podong') {
          resolve({ name: 'podong', role: 'admin' });
        } else {
          reject(new Error('not Found!'));
        }
      }, 1000);
    });
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

userStorage //
  .loginUser(id, password)
  .then(id => userStorage.getRoles(id))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
