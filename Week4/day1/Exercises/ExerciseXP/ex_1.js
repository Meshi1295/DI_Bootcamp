// Exercise 1 : Scope
// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file.

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// popup 5


//#2
var a = 0;
function q2() {
    a = 5;
} 

function q22() {
    alert(a);
} 
// 0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
} // undifind



//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
} // alert test



//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 2