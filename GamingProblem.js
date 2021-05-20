// Andy loves playing games. He wants to play a game with his little brother, Bob, using an array, A of distinct integers. The rules are as follows:
// 1. Bob always plays first and the two players move in alternating turns.
// 2. In a single move, a player chooses the maximum element currently present in the array and removes it as well as all the other elements to its right. For example, if A = [2, 3, 5, 4, 1], then it becomes A = [2, 3] after the first move because we remove the maximum element (i.e., 5) and all elements to its right (i.e., 4 and 1).
// 3. The modifications made to the array during each turn are permanent, so the next player continues the game with the remaining array. The first player who is unable to make a move loses the game.
// Given the initial array can you find and return the name of the winner? If Andy wins, return ANDY; if Bob wins, return BOB.

// For that we need four things:
// Array.splice() => removes items from an array. We use splice instead of slice because it changes the original array.
// Array.indexOf() => searches the array for the specified item, and returns its position.
// Math.max() => returns the number with the highest value.
// 4. The spread syntax => allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables (for destructuring assignment) are expected. Read more about it on MDN.
// By using the spread syntax in the Math.max() method we get the maximum value from the array very easily without needing to loop through all the numbers. This will do that for us.

// function gamingArray(array) {
// 	let turns = 0;
// 	while (array.length) {
// 		array.splice(array.indexOf(Math.max(...array)));
// 		turns++;
// 	}
// 	return turns % 2 === 0 ? "ANDY" : "BOB";
// }

// function solve(meal_cost, tip_percent, tax_percent) {
// 	meal_cost = 12.0;

// 	tip_percent = (meal_cost / 100) * 20;

// 	tax_percent = (meal_cost / 100) * 8;

// 	const total_cost = meal_cost + tip_percent + tax_percent;

// 	return Math.round(total_cost);
// }
// console.log(solve(12, 20, 8));
