
const numbers = arrayFromRange (1, 4);

console.log(numbers);

function arrayFromRange(min, max){
    const numbers = [];
    for(let i =min ; i<=max ; i++)
    numbers.push(i);
    return numbers;
}