"use strict"
function solveEquation(a, b, c) {

  let arr = [];
  let d = b**2 - 4 * a * c;
  

  if (d < 0) {
    arr = []
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    arr [0] = (-b + Math.sqrt(d) )/(2 * a);
    arr [1] = (-b - Math.sqrt(d) )/(2 * a)
  }

  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  console.log('Входные значения', percent, contribution, amount, countMonths);

  percent = +percent / 100 / 12;        // процентная ставка
  contribution = +contribution; 	      // начальный взнос
  amount = +amount;  			              // общая стоимость
  let sum = amount - contribution;      // тело кредита

  if (isNaN(percent) || percent < 0) {             // проверка NaN
    return false; 
  } else if (isNaN(contribution) || contribution < 0) {
    return false;
  } else if (isNaN(amount) || amount < 0) {
    return false;
  } 
   
  let pay = sum * (percent + (percent / (((1 + percent) ** countMonths) - 1)));    // ежемесячный платёж
  let total = pay * countMonths;                 // Общая сумма
  let totalResult = total === 0 ? 0 : total.toFixed(2);

  console.log('Итого', totalResult);

  return +totalResult
}

// calculateTotalMortgage(10, 0, 50000, 12);

