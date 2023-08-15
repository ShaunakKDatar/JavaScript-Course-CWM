// sum(1,2,3,4) => 10

function sum(...operands) {
    if(operands.length === 1 && Array.isArray(operands[0]))
    operands = [...operands[0]]
    return operands.reduce((accumulator, current) => accumulator + current);
}

const operands = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(operands));