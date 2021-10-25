// 1. Copy this object using the method that was taught in today’s lesson.

// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }



let groceries = new Object();
groceries.fruits = ["pear", "apple", "banana"]
groceries.vegetables = ["tomatoes", "cucumber", "salad"]
groceries.totalPrice = "20$"


groceries['other'] = new Object();
groceries['other'].payed = true 
groceries['other'].meansOfPayment = ["cash", "creditCard"]


// 2. Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ? yes

let newTotalPrice = groceries.totalPrice = "35$"
console.log(newTotalPrice);
// console.log(groceries);



// 3. Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
// Yes because they have the same address.
let newPayed = groceries['other'].payed = false

console.log(newPayed);
console.log(groceries);


// the short way but above we have created a new object with new object()
groceriesSecond = groceries;

groceries['totalPrice'] = '35$';
groceries['other']['payed'] = false;

// console.log(groceriesCopy)