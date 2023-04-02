function getArrayParams(...arr) {
	let min, max, sum, avg;

	sum = 0;
	min = arr[0];
	max = arr[0];

	arr.forEach(element => {
		sum += element;
		if (element >= max) {
			max = element;
		} else if (element <= min) {
			min = element;
		}
	})
	avg = Number((sum / arr.length).toFixed(2));
	console.log(min, max, avg);
	return {
		min: min,
		max: max,
		avg: avg
	};
}




// Задача 2

function summElementsWorker(...arr) {
	if (!arr.length) return 0;
	let sum = 0;

	arr.forEach(element => {
		sum += element;
	});
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) return 0;
	let max = arr[0];
	let min = arr[0];
	let dif = 0;

	max = Math.max(...arr);
	min = Math.min(...arr);

	dif = max - min;
	return dif;
}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let dif = 0;

	arr.forEach(element => {
		if (element % 2 === 0) {
			sumEvenElement += element;
		} else if (element % 2 !== 0) {
			sumOddElement += element;
		}
	})

	dif = sumEvenElement - sumOddElement;
	return dif;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg = 0;

	arr.forEach(element => {
		if (element % 2 === 0) {
			sumEvenElement += element;
			countEvenElement += 1;
		}
	})

	avg = sumEvenElement / countEvenElement;
	return avg;
}







function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;


	arrOfArr.forEach(element => {
		const result = func(...element);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	})
	return maxWorkerResult;
}


const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));