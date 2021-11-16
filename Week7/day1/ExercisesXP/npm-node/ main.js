// Exercise 1 : Hello Node.Js
const yourAge = async() => {
    let a = 5;
    let b = 10;
    try{
       let v = (`Hello you are ${a+b}`)
       return v

    } catch (err) {
        console.log(err);

    }
} 

// Exercise 2 : Hello Node.Js #2
const sentence = async() => {
    try{
        let sen = "'Hi, thanks for running me with npm start!'"
        return sen
    }catch (e){
        console.log(e);
    }
}

// Exercise 3 : Nodemon
const nodemon = async() => {
    let a = 5;
    let b = 10;
    let x;
    let c = 6;
    x = a + b;

    try {
        let sum = a + b
        return sum
    }catch (e) {
        console.log(e)
    } finally {
        return x + c
    }
}





module.exports = {
    age : yourAge,
    sentence,
   mon : nodemon
}