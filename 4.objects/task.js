function Student(name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
  this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty('marks')) {
        this.marks.push(...marks)
        /*for (let i = 0; i < marks.length; i++) {
            this.marks.push(marks[i])
        }*/    
    }
}

Student.prototype.getAverage = function () {
    if(this.hasOwnProperty('marks') && this.marks.length !== 0) {
        let initialValue = 0
        let sum = this.marks.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
          )
          return sum / this.marks.length
    } else {
        return 0
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject
    delete this.marks
    this.excluded = reason
}
