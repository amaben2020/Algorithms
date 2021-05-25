function sumRange(number) {
	if (number === 1) return 1;
	return number + sumRange(number - 1);
}

console.log(sumRange(4));

//FACTORIAL
//Iterative
const factorialIte = (value) => {
	let total = 1;
	for (let i = value; i > 1; i--) {
		total *= i;
		//console.log(total);
	}
	return total;
};

console.log(factorialIte(5));

//Recursive version
const factorial = (num) => {
	if (num === 1) return 1;

	return (num *= factorial(num - 1));
};

console.log(factorial(4));

//Pure Recursion
const filterOddNos = (array) => {
	let hash = [];

	if (array.length === 0) {
		return;
	}
	if (array[0] % 2 !== 0) {
		hash.push(array[0]);
	}

	hash = hash.concat(filterOddNos(array.slice(1)));
	return hash;
};

console.log(filterOddNos([12, 3, 6, 7, 9, 11]));
