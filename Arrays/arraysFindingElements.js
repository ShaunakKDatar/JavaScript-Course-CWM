
// Primitive Type elements
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));
// If the number is present in the array the index is returned 
// but if it is not in the array -1 returned

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// Reference Type elements

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

// We use 'find' 
// It takes in a function as the argument and passes individual array elements as arguments to the fucntion
const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);

const courses2 = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const course2 = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course2);

// Arrow Function
const courseArrow = courses.find(lambda =>  lambda.name === 'a');
console.log(courseArrow);