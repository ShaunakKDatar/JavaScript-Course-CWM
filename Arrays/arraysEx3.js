
const numbers = [1, 2, 3, 2, 4, 1, 1, 1];

const output = exclude(numbers, [1, 2]);
console.log(output);

function exclude(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}