// Exercise 4 : Employees #2

// Use the filter() method to congratulate the students that passed the course.
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


               let studentsThatPassed = students.filter(e => {
                   e.isPassed === true
                   console.log(`Hi ${e.name} Congratulations on completing the course`);
               })


// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let studentsPassedCourse = students.filter(e => e.isPassed).map(e => `Good job ${e.name}, you passed the course in ${e.course}`)

console.log(studentsThatPassed);