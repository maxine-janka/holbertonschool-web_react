interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsofExperience?: number
  location: string;
  [key: string]: any;
}

// Task 1:  Let's build a Teacher interface
// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };
// console.log(teacher3);

// Task 2: Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
//console.log(director1);

// Task 3: Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => 
    `${firstName[0]}. ${lastName}`

console.log(printTeacher("John", "Doe"));

//Task 4:  Writing a class
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements Student {
  firstName: string;
  lastName: string;
constructor(firstName: string, lastName: string) {
  this.firstName = firstName;
  this.lastName = lastName;
}
workOnHomework(): string {
  return "Currently working";
}
displayName(): string {
  return this.firstName
  }
}
const student1 = new StudentClass("Jane", "Doe");
console.log(student1);
console.log(student1.workOnHomework());
console.log(student1.displayName());