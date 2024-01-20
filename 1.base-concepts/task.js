"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c
  if (d === 0) {
    arr.push(-b/(2*a))
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a))
    arr.push((-b - Math.sqrt(d) )/(2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInMonth = (percent/100)/12
  let creditBody = amount - contribution
  let payment = creditBody * (percentInMonth + (percentInMonth / ((Math.pow(1 + percentInMonth, countMonths)) - 1)))
  let total = 0
  for (let i = 0; i < countMonths; i++) {
    total += payment
  }
  return Number(total.toFixed(2))
}