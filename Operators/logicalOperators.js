
// Logical AND (&&)
// Returns true when both the operands are true


// let eligibilityForLoan = highIncome && goodCreditScore;

let highIncome = true;
let goodCreditScore = true;

// Logical OR(||)
// Returns true if one of the  operands are true
let eligibilityForLoan = highIncome || goodCreditScore;
console.log(eligibilityForLoan);

// Logical NOT(!)
// Returns the opposite of the input 
let applicationRefused = !eligibilityForLoan;
console.log(applicationRefused);

// Falsy (false) treated like boolean false:
// undefined
// null
// 0
// false
// ''
// NaN(not a number)

// Anything that is not falsy -> Truthy

// eg. false || 1 || true returns 1  
// when the program sees that the falsy is followed by a truthy
// it returns that value and ignores the next value
// This is called short circuiting
// Example

let userColor = undefined;
let defaultColor = 'red';
let currentColor = userColor || defaultColor;
console.log(currentColor);
