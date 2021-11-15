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


const sentence = async() => {
    try{
        let sen = "'Hi, thanks for running me with npm start!'"
        return sen
    }catch (e){
        console.log(e);
    }
}


let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b;





module.exports = {
    age : yourAge,
    sentence
}