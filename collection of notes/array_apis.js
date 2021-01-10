
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const str = fruits.toString();
  const solution = fruits.join();
  console.log(str, solution);
}

// Q2. make an array out of a string
{
  /* Solution */
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const solution = fruits.split(',');
  console.log(solution);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reverseArray = array.reverse();
  console.log(reverseArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.slice(2);
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const findStudent = students.filter((student) => student.score == 90);
  for(let value of findStudent) {
    console.log(value.name);
  }

  /* Solution */
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const findStudent2 = students.filter((student) => student.enrolled === true);
  console.log(findStudent2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreOnly = [];
  for (let value of students){
    scoreOnly.push(value.score);
  }
  console.log(scoreOnly);

  /* Solution */
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.every((value) => value.score < 50));
}

// Q9. compute students' average score
{
  const totalScore = students.reduce((accumulator, currentValue) => {
    if(accumulator == students[0])
      return students[0].score + currentValue.score;
    else
      return accumulator + currentValue.score;
  });
  console.log(totalScore);
  const averageScore = totalScore / students.length;
  console.log(averageScore);

  /* Solution */
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const array3 = [];
  for(let student of students) {
    array3.push(student.score);
  }
  const arrayToString = array3.toString();
  console.log(arrayToString);

  /* Solution */
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const array4 = [];
  for(let student of students) {
    array4.push(student.score);
  }
  array4.sort();
  console.log(array4.toString());
}