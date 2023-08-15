
try {
    const numbers = [1, 1, 1, 4];
    const count = countOccurences(numbers, 1);
    console.log(count);
}
catch (e) {
    alert(e);
};

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid arguments passed');

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}