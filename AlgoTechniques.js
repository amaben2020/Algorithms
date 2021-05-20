//ANAGRAMS: Frequency counter technique
const anagrams = (str1, str2) => {
	const wordBank = {};

	for (let i = 0; i < str1.length; i++) {
		let string1 = str1[i];
		if (wordBank[string1]) {
			wordBank[string1]++;
		} else {
			wordBank[string1] = 1;
		}
	}

	for (let j = 0; j < str2.length; j++) {
		const string2 = str2[j];
		if (!wordBank[string2]) {
			return false;
		} else {
			wordBank[string2]--;
		}
	}
	console.log(wordBank);
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

const anagram2 = (inputA, inputB) => {
	const counter = {};

	for (let i = 0; i < inputA.length; i++) {
		if (counter[inputA[i]]) {
			counter[inputA[i]]++;
		} else {
			counter[inputA[i]] = 1;
		}
	}
	for (let j = 0; j < inputB.length; j++) {
		if (!counter[inputB[j]]) {
			return false;
		} else {
			counter[inputB[j]]--;
		}
	}

	return counter;
};

console.log(anagram2("bok", "okb"));

///anagrams 3
const anagram3 = (a, b) => {
	const counter = {};

	for (let i = 0; i < a.length; i++) {
		if (counter[a[i]]) {
			counter[a[i]]++;
		} else {
			counter[a[i]] = 1;
		}
	}

	for (let j = 0; j < b.length; j++) {
		console.log(counter);
		if (!counter[b[j]]) {
			return false;
		} else {
			counter[b[j]]--;
		}
	}
	return counter;
};
console.log(anagram3("anambra", "branaam"));

const anagram4 = (anagramA, anagramB) => {
	let anaHome = {};

	for (let i = 0; i < anagramA.length; i++) {
		if (anaHome[anagramA[i]]) {
			anaHome[anagramA[i]]++;
		}
	}
};

//Binary search 3
const binaryArray = [11, 22, 33, 44, 55];
const binarySearch3 = (array, value) => {
	let rightPointer = array.length - 1;
	let leftPointer = 0;
	let middlePointer = Math.floor((rightPointer + leftPointer) / 2);

	while (value !== array[middlePointer]) {
		if (value < array[middlePointer]) {
			rightPointer = middlePointer - 1;
		} else {
			leftPointer = middlePointer + 1;
		}
		middlePointer = Math.floor((rightPointer + leftPointer) / 2);
	}

	return middlePointer;
};

console.log(binarySearch3(binaryArray, 44));

const binarySearch4 = (array, value) => {
	let rightPointer = array.length - 1;
	let leftPointer = 0;
	let middlePointer = Math.floor(rightPointer + leftPointer / 2);

	while (value !== array[middlePointer]) {
		if (value < middlePointer) {
			rightPointer = middlePointer - 1;
		} else {
			leftPointer = middlePointer + 1;
		}
		middlePointer = Math.floor((rightPointer + leftPointer) / 2);
	}
	return middlePointer;
};
console.log(binarySearch4([1, 2, 3, 4, 5], 5));

const binarySearch5 = (array, value) => {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

	while (value !== array[middlePointer]) {
		if (value < middlePointer) {
			rightPointer = middlePointer - 1;
		} else {
			leftPointer = middlePointer + 1;
		}
		//remember that you've reinitialized the right and left pointers
		middlePointer = Math.floor((rightPointer + leftPointer) / 2);
	}

	return middlePointer;
};
console.log(binarySearch5([12, 31, 45, 76, 99], 76));
