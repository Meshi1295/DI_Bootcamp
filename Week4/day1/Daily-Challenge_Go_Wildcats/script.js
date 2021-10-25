//Daily Challenge : Go Wildcats

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// 3. Find and display the total score of the users.

let names = [];
let scoreKey = [];
let totalScore = 0;

const gameInfo = [
	{
	  username: "john",
	  team: "red",
	  score: 5,
	  items: ["ball", "book", "pen"]
	},
	{
	  username: "becky",
	  team: "blue",
	  score: 10,
	  items: ["tape", "backpack", "pen"]
	},
	{
	  username: "susy",
	  team: "red",
	  score: 55,
	  items: ["ball", "eraser", "pen"]
	},
	{
	  username: "tyson",
	  team: "green",
	  score: 1,
	  items: ["book", "pen"]
	},
];



gameInfo.forEach(user => names.push(user.username + "!"));
console.log(names);

gameInfo.forEach(user => user.score > 5 ? scoreKey.push(user.username) : scoreKey);
console.log(scoreKey);

gameInfo.forEach (user => totalScore += user.score);
console.log("the total score is: ",totalScore);