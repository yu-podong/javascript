'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript class
//  - introduced in ES6
//  - syntactival suger over prototype-based inheritance

// 1. Class declarations
class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const hyeonjin = new Person('hyeonjin', 21);
console.log(hyeonjin.name);
console.log(hyeonjin.age);
hyeonjin.speak();

// Getter and Setter
class User {
  constructor(fristName, lastName, age){
    this.fristName = fristName;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    /* 
    if (value < 0 )
      throw Error('age can not be negative');
    */
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('hyeon', 'jin', -1);
console.log(user1.age);

// 3. Fields(public, private)
class Experiment {
  publicField = 2;
  #privateField = 3;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = 'hyeonjin';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color!`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //Shape의 draw method call
    console.log('🔺');
  }

  getArea(){
    return this.width * this.height / 2;
  }

  //js의 모든 object들이 상속받는 Object class의 method
  toString(){
    return `Triangle color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20,10, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,10, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


