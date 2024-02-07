function parseCount(value) {
    let result = Number.parseFloat(value)
    if (isNaN(result)) {
        throw new Error("Невалидное значение")
    } else {
        return result
    }
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if ( a + b > c && a + c > b && c + b > a) {
            this.a = a
            this.b = b
            this.c = c
        } else {
            throw new Error("Треугольник с такими сторонами не существует")
        }    
    }

    get perimeter() {
        if ( this.a !== undefined) {
            return Number(this.a + this.b + this.c) 
        } else {
            return  new Error('Ошибка! Треугольник не существует')
        }
    }

    get area() {
        let p = this.perimeter / 2
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(2))
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch {
        this.perimeter
    }
}