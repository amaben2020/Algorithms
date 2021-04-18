const linearSearch = (array, value) => {
	for (let i = 0; i < array.length; i++) {
		if (value === array[i]) return i++;
	}
	return "Not found";
};

console.log(linearSearch([4, 14, 21, 3, 44], 21));
