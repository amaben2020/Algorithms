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
	//divide the array into 2 parts
	let left = 0;
	let right = array.length - 1;
	//while the left is lesser than the right, recall that this is a sorted array
	while (left < right) {
		//initialize a sum variable to be able to perform the operations
		let sum = array[left] + array[right];

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
