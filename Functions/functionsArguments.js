
// Every function has an 'arguments' object associated with it
// if i pass less than wanted arguments still fn works
// if i pass more then the fn works as i want but the extra will b ignored
// the object argument has an iterator- and stores all the args passed to fn
// Example:

function sum() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum2(0.1, 20, 30, 1));

// Here this ... is known as rest operator
// the ... rest operator will take all the arguments and put them in an array

// function sum2(... args){
//     console.log(args);
//     return args.reduce((a,b) => a+b );
// }

// The rest Parameter must be the last formal parameter
// We have discount and the the 'REST' of the parameters passed to this function
function sum2(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}