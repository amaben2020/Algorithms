const linearSearch = (array, value) => {
	for (let i = 0; i < array.length; i++) {
		if (value === array[i]) return i++;
	}
	return "Not found";
};

console.log(linearSearch([4, 14, 21, 3, 44], 21));

const binarySearch = (array, value) => {
	let rightPointer = array.length - 1;

	let leftPointer = 0;

	let middlePointer = Math.floor((rightPointer + leftPointer) / 2);

	while (value !== array[middlePointer]) {
		if (value < array[middlePointer]) {
			rightPointer = middlePointer - 1;
			console.log(rightPointer);
		}
		middlePointer = Math.floor((rightPointer + leftPointer) / 2);
	}
	return middlePointer;
};

console.log(binarySearch([4, 14, 21, 66, 3, 44], 21));
