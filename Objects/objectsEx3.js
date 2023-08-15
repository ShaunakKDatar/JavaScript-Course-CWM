
// Object Equality
// Constructor Function
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
const address1 = new Address('a','b','c');
const address2 = new Address('a','b','c');
let address3 = address1;

console.log(isEqual(address1, address2));
console.log(isAreSame(address1, address2));
console.log(isAreSame(address1, address3));

function isEqual(address1, address2){
    return(address1.street === address2.street && 
        address1.city === address2.city && 
        address1.zipcode === address2.zipcode);
}

function isAreSame(address1, address2){
    return(address1 === address2);
}