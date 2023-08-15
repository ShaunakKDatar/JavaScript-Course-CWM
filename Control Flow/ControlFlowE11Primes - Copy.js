
showPrime(10);

function showPrime(limit) {
    for (let number = 2; number <= limit; number++) {
        if (primeChecker(number))
            console.log(number);
    }
}

function primeChecker(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}