interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 24,
  location: "Melbourne"
};
const student2: Student = {
  firstName: "Jim",
  lastName: "Doe",
  age: 24,
  location: "Melbourne"
};

const studentsList: Array<Student> = [student1, student2];

//Create table and main section elememts
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement  = document.createElement('tbody');
table.setAttribute('border', '1');

// Attach row to thead for header titles
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const headFirstName: HTMLTableCellElement = rowHead.insertCell(0);
const headLocation: HTMLTableCellElement = rowHead.insertCell(1);

headFirstName.innerHTML = "First Name";
headLocation.innerHTML = "Location"

// Append header to table.
table.append(thead);


studentsList.forEach((student) => {
  const studentRow: HTMLTableRowElement = tbody.insertRow(0);
  const studentFirstName: HTMLTableCellElement = studentRow.insertCell(0);
  const studentLocation: HTMLTableCellElement = studentRow.insertCell(1);
  //console.log(student.firstName, student.location)
  studentFirstName.innerHTML = student.firstName;
  studentLocation.innerHTML = student.location;
});

// Append body to table after iterating studentList
table.appendChild(tbody);

//Append table for doc body
document.body.appendChild(table);