function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr)
  let max = Math.max.apply(null, arr)
  let initialValue = 0
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  )
  let avg = Number((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0
  let initialValue = 0
  if (arr.length > 0) {
    sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    )
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  let differenceMaxMin = 0
  if (arr.length > 0) {
    let min = Math.min.apply(null, arr)
    let max = Math.max.apply(null, arr)
    differenceMaxMin = max - min
  }
  return differenceMaxMin
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0
  let sumOddElement = 0
  let differenceEvenOdd = 0
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]
      } else {
        sumOddElement += arr[i]
      }
    }
    differenceEvenOdd = sumEvenElement - sumOddElement
  }
  return differenceEvenOdd
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0
  let countEvenElement = 0
  let avg = 0
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]
        countEvenElement++
      }
    }
    avg = Number((sumEvenElement /countEvenElement).toFixed(2))
  }
  return avg
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = func.apply(null, arr[i])
    maxWorkerResult = (result > maxWorkerResult) ? result : maxWorkerResult
  }
  return maxWorkerResult
}
