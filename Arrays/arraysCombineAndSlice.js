
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// // When objects are combined the new array will have the reference of the object
// first[0].id = 10;  

// const slice = combined.slice(2, 4);

// console.log(combined);
// console.log(slice);

let combined = [...first, 'a', ...second, 'b'];
console.log(combined) 