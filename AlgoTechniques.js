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

//write a program that adds 2 values in an array and returns zero
//USING MULTIPLE POINTER TECHNIQUE
const sumZero = (array) => {
	//divide the array into 2 parts
	let left = 0;
	let right = array.length - 1;
	//while the left is lesser than the right, recall that this is a sorted array
	while (left < right) {
		//initialize a sum variable to be able to perform the operations
		let sum = array[left] + array[right];

		//if the sum is equal to zero, you've gotten the desired result
		if (sum === 0) {
			return [array[left], array[right]];
		} else if (sum > 0) {
			//if the sum is less than zero, move towards the left
			right--;
		} else {
			//if sum is greater, move towards the rights
			left++;
		}
	}
};

console.log(sumZero([-1, 2, 3, 4, 5, 12, 1, 13]));

//Multiple Pointers : countUnique values
//lets say you have an array [1,1,2,3,4,4] //4

const countUniqueVal = (array) => {
	//initialize the first idx
	let i = 0;

	//initializing the second idx
	for (let j = 1; j < array.length; j++) {
		if (array[i] !== array[j]) {
			i++;
			array[i] = array[j];
		}
	}
	return i + 1;
};
console.log(countUniqueVal([1, 1, 2, 3, 4, 5]));
