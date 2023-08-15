
let person = {
    name: 'Shanunak',
    age: 17
};

// Dot Notation of referencing the properties of an object
// Ease of use is found in the dot notation 
person.name = 'Mosh';

// Bracket Notation of referencing
let selection = 'name';
person[selection] = 'Mary';
// Bracket notation acheives dynamicity

console.log(person.name);