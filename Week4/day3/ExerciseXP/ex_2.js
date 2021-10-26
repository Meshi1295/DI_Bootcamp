//Exercise 2 : Employees

//1. Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
             console.log(users);

             let sayHello = users.map(e => console.log(`Hello ${e["firstName"]}`));


  // 2. Using the filter() method, congratulate only the Full Stack Residents.
let CongratulateOnlyRole = users.filter(e => {
    if (e.role ===  'Full Stack Resident') {
        console.log("only the Full Stack users:",`Hello ${e.firstName}`);
    }
})