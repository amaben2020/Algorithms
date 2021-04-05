const a = [0, 1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const mergedArray = (array1, array2) => {
	const data = [];
	let firstArrayIdx = array1[0];
	let secondArrayIdx = array2[0];
	let i = 1;
	let j = 1;

	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (firstArrayIdx || secondArrayIdx) {
		if (firstArrayIdx < secondArrayIdx) {
			data.push(firstArrayIdx);
			firstArrayIdx = array1[i];
			i++;
		} else {
			data.push(secondArrayIdx);
			secondArrayIdx = array2[j];
			j++;
		}
	}
	return data;
};
console.log(mergedArray(a, b));
