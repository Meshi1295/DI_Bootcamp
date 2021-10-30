// Exercise 2: Display Student Info

// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// output : 'Your full name is Elie Schoppik'`


 
 const displayStudentInfo = ({first, last}) => {
console.log(`Your full name is ${first} ${last}`);
 }
 displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
