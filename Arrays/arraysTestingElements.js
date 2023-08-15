
const numbers = [1, -1, 2, 3];

// every (checks all elements for a condition and return boolean)
// some (checks if at least one of the elements is true -same as every)

const allPositive =numbers.every(function (value){
    return  value >=0
});// Returns False
console.log(allPositive);

const atLeastOnePositive = numbers.some(function (value){
    return  value >=0
});// Returns True
console.log(atLeastOnePositive);
