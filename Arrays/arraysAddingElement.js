
const numbers = [3, 4];

// Array is an object
// We will add elements to the:
// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(1, 0, 'a', 'b');
console.log(numbers);
