// Andy loves playing games. He wants to play a game with his little brother, Bob, using an array, A of distinct integers. The rules are as follows:
// 1. Bob always plays first and the two players move in alternating turns.
// 2. In a single move, a player chooses the maximum element currently present in the array and removes it as well as all the other elements to its right. For example, if A = [2, 3, 5, 4, 1], then it becomes A = [2, 3] after the first move because we remove the maximum element (i.e., 5) and all elements to its right (i.e., 4 and 1).
// 3. The modifications made to the array during each turn are permanent, so the next player continues the game with the remaining array. The first player who is unable to make a move loses the game.
// Given the initial array can you find and return the name of the winner? If Andy wins, return ANDY; if Bob wins, return BOB.

function gamingArray(A) {
	let turns = 0;
	while (A.length) {
		A.splice(A.indexOf(Math.max(...A)));
		turns++;
	}
	return turns % 2 === 0 ? "Andy" : "Bob";
}
