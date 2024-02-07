function parseCount(value) {
    let result = Number.parseFloat(value)
    if (result !== NaN) {
        return result
    } else {
        throw new Error("Невалидное значение")
    }
}

function validateCount(value) {
    try {
        parseCount(value)
      } catch (error) {
        return error
      }
}