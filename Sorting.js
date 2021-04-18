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

console.log(bubbleSort([4, 14, 21, 3, 44]));
