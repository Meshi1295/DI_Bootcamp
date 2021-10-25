//Exercise 6 : Bank Details

// In this exercise, you have to decide which type of variables you have to use:

// 1. Create a global variable called bankAmount which value is the amount of money currently in your account.
// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// 3. Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// 4. Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// 5. Display your current bankAccount standing at the end of the month.


let bankAmount = 2000;
let vat = 0.17;
let details = ["+400", "-100", "+160", "+187", "-3600"]
let sum = 0;
let vatSum = 0;

details.forEach(e => {
    sum += parseInt(e)

    if (e.includes('-')) {
        vatSum += e * vat
        return vatSum
    }
    return sum
})

console.log(`Current amount : ${sum += vatSum += bankAmount}`)