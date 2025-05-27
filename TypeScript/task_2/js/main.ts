
//Task 5: Advances types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

interface createEmployeeFunction {
  (salary: number | string): Director | Teacher
}

export const createEmployee: createEmployeeFunction = (salary) => {
  if (typeof salary === 'number' && salary < 500) return new Teacher;
  return new Director;
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500')); // All strings are 'false' and return Director


// Task 6: Creating functions specific to employees
export const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
}
// const teacher1 = new Teacher();
// const director1 = new Director();
// console.log(isDirector(teacher1));
// console.log(isDirector(director1));

export const executeWork = (employee: Director | Teacher): string => {
  return isDirector(employee) ? (employee.workDirectorTasks()) : (employee.workTeacherTasks())
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
