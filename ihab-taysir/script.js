// Student Constructor Function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  // private variable (encapsulation with closure)
  let _grade;

  // validate initial grade
  if (grade === "A" || grade === "F") {
    _grade = grade;
  } else {
    _grade = "F"; // default fallback value
    console.log("⚠ Invalid initial grade, set to 'F' by default.");
  }

  // Getter: getGrade
  this.getGrade = function () {
    return _grade;
  };

  // Setter: setGrade (only A or F allowed)
  this.setGrade = function (newGrade) {
    if (newGrade === "A" || newGrade === "F") {
      _grade = newGrade;
    } else {
      console.log("❌ Invalid grade! Grade must be 'A' or 'F'.");
    }
  };
}

// Method: introduce (shared across all instances via prototype)
Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};

//___________________testing_____________________________

// const student1 = new Student("Ali", 20, "A");

// student1.introduce();
// // Output: Hi, my name is Ali, I’m 20 years old, and I’m in grade A.

// console.log(student1.getGrade()); // A

// student1.setGrade("F");
// console.log(student1.getGrade()); // F

// student1.setGrade("B"); // ❌ Invalid grade
// console.log(student1.getGrade()); // still F
