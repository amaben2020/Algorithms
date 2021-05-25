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

const mergedArray2 = (arr1, arr2) => {
	const hash = [];

	let firstArrIdx = arr1[0];
	let secondArrIdx = arr2[0];
	let i = 1;
	let j = 1;

	if (!arr1.length) {
		return arr2;
	}
	if (!arr2.length) {
		return arr1;
	}

	while (firstArrIdx || secondArrIdx) {
		if (firstArrIdx < secondArrIdx) {
			hash.push(firstArrIdx);
			firstArrIdx = arr1[i];
			i++;
			console.log(hash);
		} else {
			hash.push(secondArrIdx);
			secondArrIdx = arr2[j];
			j++;
		}
	}
	return hash;
};
console.log(mergedArray2(a, b));

const appointment = [
	{
		id: 0,
		name: "amara",
	},
	{
		id: 1,
		name: "ben",
	},
];

const filtered = (appointmentId) => {
	return appointment.filter((a) => a.id !== appointmentId);
};
console.log(filtered(0));
