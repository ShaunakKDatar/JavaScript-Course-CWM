
// Method to have default values for arguments
// After ES6 we can directly initialise the default arguments in the declaration of the fn
// If i give rate a def val and not dont years then I get NaN( Not a Number)
// as a best practice if you want to give a parameter a default value make it last parameter or after it give 
// every param a def value
function intrest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5;
    // years = years || 5;
    return principal * rate / 100 * years;
}

console.log(intrest(10000));