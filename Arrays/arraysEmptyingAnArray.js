
let numbers = [1, 2, 3, 4];
// we cannot empty a const declared array so we must change it to 'let'(make variable)
let another = numbers;

// Solution 1
// Works if there are no other references to the array
numbers =[]; // Dirctly reassign numbers to an new empty array

// Solution 2
// makes the length zero and removes all elements from the array
numbers.length = 0;

// Solution 3
// splice
numbers.splice(0,numbers.length);

// Soultion 4
while(numbers.length > 0)
numbers.pop();