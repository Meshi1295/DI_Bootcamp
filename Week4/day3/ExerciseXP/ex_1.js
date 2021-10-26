// Exercise 1 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// result = ['bread', "carrot", "potato", 'chicken',"apple", "orange"]
console.log(result);
// (6) ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']



// ------2------
const country = "USA";
// result: country = ["U","S","A']
console.log([...country]);
// (3) ['U', 'S', 'A']



// ------Bonus------
// newArray = [null]
let newArray = [...[,,]];
console.log(newArray);
// (2) [undefined, undefined]