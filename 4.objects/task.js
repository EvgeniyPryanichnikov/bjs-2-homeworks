function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = []; 
}

let student1 = new Student('Антон', 'мужской', 29 )
let student2 = new Student('Евгений', 'мужской', 31 );

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') === false) {
       return;
    } else {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') === false || !this.marks.length) {
        return 0;
    } else {
        console.log(this.marks)
        let sum = 0;
        
        this.marks.forEach(element => {
            sum += element;
            console.log(sum);
        });
        return sum / this.marks.length
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
