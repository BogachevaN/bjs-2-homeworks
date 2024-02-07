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
            this._perimeter = Number((this.a + this.b + this.c).toFixed(3))
            return this._perimeter
        } else {
            return  'Ошибка! Треугольник не существует'
        }
    }

    get area() {
        if ( this.a !== undefined) {
            let p = this.perimeter / 2
            return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
        } else {
            return  'Ошибка! Треугольник не существует'
        }
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch {
        return this
    }
}