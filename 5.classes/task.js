 class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }

    fix() {
        this.state *= 1.5
    }

    set state(state) {
       if (state < 0) {
            this._state = 0
       } else if (state > 100) {
            this._state = 100
       } else {
            this._state = state
       }
    }

    get state() {
        return this._state
    }
 }

 class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine'
    }
 }

 class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book'
        this.author = author
    }
 }

 class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel'
    }
 }

 class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic'
    }
 }

 class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective'
    }
 }

 class Library {
    constructor (name) {
        this.name = name
        this.books = []
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        /*for(let i=0; i < this.books.length; i++ ) {
            if (this.books[i].hasOwnProperty(type) && this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null*/
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }

    giveBookByName(bookName) {
        /*let book = this.findBookBy('name', bookName)
        if (book !== null) {
            let index = this.books.indexOf(book)
            this.books.splice(index, 1)
            return book
        } else {
            return null
        }*/
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
 }

 class Student {
    constructor(fullName) {
        this.name = fullName
        this.marks = {}
    }

    addMark(mark, subject) {
        if (mark >=2 && mark<=5) {
            if (this.marks.hasOwnProperty(subject)) {
                this.marks[subject].push(mark)
            } else {
                this.marks[subject] = [mark]
            }
        }
    }

    getAverageBySubject (subject) {
        if (this.marks.hasOwnProperty(subject)) {
            let initialValue = 0
            let sum = this.marks[subject].reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue,
            )
          return sum / this.marks[subject].length
        } else {
            return 0
        }
    }

    getAverage() {
        if (Object.keys(this.marks).length !== 0) {
            let sum = 0
            let count = 0
            for (let subject in this.marks) {
                sum += this.getAverageBySubject(subject)
                count++
            }
            return sum / count
        } else {
            return 0
        }
    }

    /*getAverage() {
        const subjectsArr = Object.keys(this.marks);
        const subjectsCount = subjectsArr.length;
        let averageMarksArr = [];
        for (let i = 0; i < subjectsCount; i++) {
            averageMarksArr.push(this.getAverageBySubject(subjectsArr[i]));
        }
        const allAverageMarksSum = averageMarksArr.reduce(
            (accumulator, currentAverageMark) => accumulator + currentAverageMark,
            0);
        return (allAverageMarksSum / subjectsCount) || 0;
    }*/

  }

