const bubbleSort = (array) => {
	let doNotReSort;

	for (let i = 0; i < array.length; i++) {
		doNotReSort = true;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
		doNotReSort = false;
	}
	return array;
};

//This solution solves the O(n2) time complexity
//It becomes o(n)
console.log(bubbleSort([4, 14, 21, 3, 44]));

const bubbleSortRecap = (array) => {
	let noSort = true;

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				noSort = false;
			}
		}
		noSort = true;
	}
	return array;
};
console.log(bubbleSortRecap([83, 53, 93, 43, 63, 103, 113]));

const charCount = "Your PIN number is 1234";

const charC = (str) => {
	const obj = {};

	//put the str in the obj

	for (let i = 0; i < str.length; i++) {
		const character = str[i].toLowerCase();
		if (/[a-z0-9]/.test(character)) {
			if (obj[character] > 0) {
				obj[character]++;
			} else {
				obj[character] = 1;
			}
		}
	}
	return obj;
};

console.log(charC(charCount));

//ANAGRAMS: Frequency counter technique
const anagrams = (str1, str2) => {
	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		const string1 = str1[i];

		if (lookup[string1]) {
			lookup[string1]++;
		} else {
			lookup[string1] = 1;
		}
	}
	for (let j = 0; j < str2.length; j++) {
		const string2 = str2[j];

		if (!lookup[string2]) {
			return false;
		} else {
			lookup[string2]--;
		}
	}
	console.log(lookup);
	return true;
};

console.log(anagrams("anagram", "angrama"));

//write a program that adds 2 values and gives zero
//USING MULTIPLE POINTER TECHNIQUE
const sumZero = (array) => {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let sum = array[left] + array[right];
		console.log(sum);
		if (sum === 0) {
			return [array[left], array[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

console.log(sumZero([-1, 2, 3, 4, 5, 12, 1, 13]));

function solve(meal_cost, tip_percent, tax_percent) {
	meal_cost = 12.0;

	tip_percent = (meal_cost / 100) * 20;

	tax_percent = (meal_cost / 100) * 8;

	const total_cost = meal_cost + tip_percent + tax_percent;

	return Math.round(total_cost);
}
console.log(solve(12, 20, 8));
