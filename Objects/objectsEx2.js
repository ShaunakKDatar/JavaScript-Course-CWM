
// Factory Function
function objectFactory(street, city, zipCode){
    return{
        street,
        city,
        zipCode,
    };
}
const addressFromFacotry = objectFactory('a','b','c');
console.log(addressFromFacotry);

// Constructor Function
function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
const addressFromConstructor = new Address('a','b','c');
console.log(addressFromConstructor);