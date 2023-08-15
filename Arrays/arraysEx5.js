
const numbers = [1, 1, 1, 4];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement){
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0; 
        return accumulator + occurence;
},0);
}