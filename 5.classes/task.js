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
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.type = 'book'
        this.author = author
    }
 }

 class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'novel'
    }
 }

 class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'fantastic'
    }
 }

 class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'detective'
    }
 }