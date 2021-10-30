// Exercise 2 : Remove Duplicates

// Write a JavaScript program to remove duplicate items in an array.

let arr = [1,2,3,2,3];

function getUnique (arr){

    let uniqueArr = [];

    for (let num of arr){
        if(uniqueArr.indexOf(num) === -1){
            uniqueArr.push(num)
        }
    }
    console.log(uniqueArr);
}

getUnique(arr)