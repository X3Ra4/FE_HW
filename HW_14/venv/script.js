function Student(NS, birthDate, grades) {
  const [name, surname] = NS.split(' ');
  this.name = name;
  this.surname = surname;
  this.birthDate = birthDate;
  this.grades = grades;
  this.visitStat = Array(25).fill(null);

  this.present = function () {
    const index = this.visitStat.indexOf(null);
    if (index === -1) {
      console.log('Список полный');
      return;
    }
    this.visitStat[index] = true;
  };

  this.absent = function () {
    const index = this.visitStat.indexOf(null);
    if (index === -1) {
      console.log('Список полный');
      return;
    }
    this.visitStat[index] = false;
  };

  this.getVisitStat = function () {
    return [...this.visitStat];
  };

  this.summary = function () {
    const avgGrade = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;

    const validVisits = this.visitStat.filter(v => v !== null);
    const attendance =
      validVisits.filter(v => v === true).length / validVisits.length;

    if (avgGrade >= 90 && attendance >= 0.9) {
      console.log("Молодець!");
    } else if (avgGrade >= 90 || attendance >= 0.9) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  };
}

// Student1
const student1 = new Student(
  "Ivan Petrov",
  2004,
  [100, 95, 90, 92, 88]
);

student1.present();
student1.present();
student1.absent();
student1.present();

console.log("Студент 1 посещаемость:", student1.getVisitStat());
student1.summary();


// Student2
const student2 = new Student(
  "Anna Ivanova",
  2003,
  [85, 78, 90, 87]
);

student2.absent();
student2.present();
student2.absent();

console.log("Студент 2 посещаемость:", student2.getVisitStat());
student2.summary();


// Student3
const student3 = new Student(
  "Oleh Bondarenko",
  2005,
  [60, 70, 65, 55, 58]
);

student3.absent();
student3.absent();
student3.absent();

console.log("Студент 3 посещаемость:", student3.getVisitStat());
student3.summary();
