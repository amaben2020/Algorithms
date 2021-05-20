const linearSearch = (array, value) => {
	for (let i = 0; i < array.length; i++) {
		if (value === array[i]) {
			return value;
		}
	}
	return "Not found";
};

//array[i] 4, 14, 21, 3, 44
console.log(linearSearch([4, 14, 21, 3, 44], 3));

const binarySearch = (array, value) => {
	let rightPointer = array.length - 1;
	let starterPointer = 0;
	let middlePointer = Math.floor((rightPointer + starterPointer) / 2);

	while (value !== array[middlePointer]) {
		if (value < array[middlePointer]) {
			rightPointer = middlePointer - 1;
		} else {
			starterPointer = middlePointer + 1;
		}
		middlePointer = Math.floor((rightPointer + starterPointer) / 2);
	}
	return middlePointer;
};

console.log(binarySearch([4, 14, 21, 66, 73, 84, 90], 90));
