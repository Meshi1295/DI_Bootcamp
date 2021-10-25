const db = [
    {
        userName: "Meshi",
        password: "123456"

    },
    {
        userName: "amir",
        password: "123456"

    },
    {
        userName: "dalia",
        password: "123456"

    }  
];

const newFeed = [
    {
        userName: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        userName: "Sally",
        timeline: "Javascript is soo coooll!!"
    }
];

let userNamePrompt = prompt("What is your user name?");
let userPasswordPrompt = prompt("what is your password?");

function isUserValid (userName, password){
    for(let i = 0; i < db.length; i++){
        if(db[i]["userName"] === userName &&  db[i]["password"] === password){
            return true
        } 
    }
    return false
}

function singIn (userName, password) {
    if( isUserValid (userName,password )){
        console.log(newFeed);
    } else {
        alert("you are not sing in")
    }
 

}
singIn(userNamePrompt, userPasswordPrompt);


// the difrent of var let and const
function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    // console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
}

listFruits();
// function func() {
//     // x is known here but not defined.
//     console.log('value of x here: ', x)
//     {
//       var x = 10;
//       x = x + 5;
//     }
//     // x is still known here and has a value.
//     console.log('value of x after for block: ', x)
//   }
//   // x is NOT known here.
//   func()

//   function func() {
//     // x is NOT known here. Try uncommenting the line below.
//     // console.log('value of x here: ', x)
//     {
//       let x = 10;
//       x = x + 5;
//       console.log(x);
//     }
//     // x is NOT known here. Try uncommenting the line below.
//     console.log('value of x after for block: ', x)
//   }
//   // x is NOT known here.
//   func()

// let mango = "yellow"

// if (mango === "yellow"){
//   let mango = "blue"
//   console.log(mango)
// }
// console.log(mango)

// var mango = "yellow"

// if (mango === "yellow"){
//   var mango = "blue"
//   console.log(mango)
// }
// console.log(mango)