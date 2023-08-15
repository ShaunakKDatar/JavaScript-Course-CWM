
const numbers = [1, -1, 2, 3];

// Filter will traverse the array and execute the fn on them and add it to new array(if true)
const allPositiveNumbers = numbers.filter(value => value>=0);
console.log(allPositiveNumbers);

const items = numbers.
filter(value => value>=0)
.map(n => ({ value: n}))
.filter(obj => obj.value > 1);

console.log(items);

