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

const anagrams = (str1, str2) => {
	const firstWord = {};
	const secondWord = {};

	for (let i = 0; i < str1.length; i++) {
		if (firstWord[str1[i]] > 0) {
			firstWord[str1[i]]++;
			console.log(firstWord[str1[i]]);
		} else {
			firstWord[str1[i]] = 0;
		}
	}

	for (let j = 0; j < str2.length; j++) {
		if (secondWord[str2[j]] > 0) {
			secondWord[str2[j]]++;
		} else {
			secondWord[str2[j]] = 0;
		}
	}
	console.log(secondWord);
	console.log(firstWord);
	if (firstWord == secondWord) {
		return true;
	} else {
		return false;
	}
};

console.log(anagrams("a", "a"));
