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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
