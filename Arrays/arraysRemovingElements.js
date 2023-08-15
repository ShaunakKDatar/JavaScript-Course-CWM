
const numbers = [1,2, 3, 4];

// Array is an object
// We will remove elements to the:
// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);

// Middle
numbers.splice(2, 2);
console.log(numbers);
