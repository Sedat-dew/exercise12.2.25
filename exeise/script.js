// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method
// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

function Student(firstName, lastName, age, academyName, studentId) {
  Object.setPrototypeOf(this, new Person(firstName, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;

  this.study = function () {
    console.log(
      `The student ${this.firstName} is studying in the ${this.academyName} academy`
    );
  };
}

let student1 = new Student("Milan", "Ognjanoski", 30, "Web Development", 22);
let student2 = new Student("Clifford", "Smith", 22, "QA Testing", 23);

console.log(student1);
student1.study();
student1.getFullName();

console.log(student2);

function DesignStudent(
  firstName,
  lastName,
  age,
  studentId,
  isStudentOfTheMonth = false
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Design Academy", studentId)
  );
  this.isStudentOfTheMonth = isStudentOfTheMonth;
  this.attendAdobeExam = function () {
    console.log(`The student ${this.firstName} is doing an adoble exam`);
  };
}

function CodeStudent(
  firstName,
  lastName,
  age,
  studentId,
  hasIndividualProject = false,
  hasGroupProject = false
) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Code Academy", studentId)
  );
  this.hasIndividualProject = hasIndividualProject;
  this.hasGroupProject = hasGroupProject;

  this.doProject = function (string) {
    if (string === "individual") {
      console.log(
        `${this.firstName} ${this.lastName} is working on an individual project`
      );
      this.hasIndividualProject = true;
    } else if (string === "group") {
      console.log(
        `${this.firstName} ${this.lastName} is working on a group project`
      );
      this.hasGroupProject = true;
    }
  };
}

function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, age, "Network Academy", studentId)
  );
  this.academyPart = academyPart;
  this.attendCiscoExam = function () {
    console.log(`${this.firstName} ${this.lastName} is doing a cisco exam`);
  };
}

Person.prototype.getAcademy = function (studentObj) {
  console.log(`${this.firstName} ${this.lastName} is in ${this.academyName}`);
};

let code = new CodeStudent("Milan", "Ognjanoski", 30, 1, true, false);
let design = new DesignStudent("Sedat", "Mustafa", 23, 2, true);
let network = new NetworkStudent("Martin", "Zekoski", 29, 3, 3);

console.log("--- Code Student ---");
console.log(code);
code.doProject("group");

console.log("--- Design Student ---");
console.log(design);
design.attendAdobeExam();

console.log("--- Network Student ---");
console.log(network);
network.attendCiscoExam();

code.getAcademy(code);
