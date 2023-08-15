
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n in numbers){
    sum += n;
}
console.log(sum);

// instead we can reduce the numbers in the array to a single value
// accumulator is like sum(accumulates the array elements)
// currentValue is like n in numbers
// we return to the accumulator itself
// If we skip initialising the accumulator then it is set to first element of the array

const summation = numbers.reduce(
    (accumulator, currentValue) =>  accumulator + currentValue 
);
console.log(summation);