
// For....in loop
// used to iterate through the properties of an object or elements of an array

const person =  {
    name:'Shaunak',
    age: 17
};

for (let key in person){
    console.log(key); // will print on the console: name age
    console.log(key, person[key]); // this is the bracket notation of referencing the properties of a object
}
//the second statement will print the attribute and its value side by side on the console

// REMAINDER: the methods of referencing the attributes of an object:
// 1) dot notation =  person.age;
// 2) bracket notation = person['name'];

// array

const colors = ['red', 'blue', 'green'];

for(let index in colors){
console.log(index); // will print: 0 1 2
console.log(index, colors[index]); // o/p-> 0 red   1 blue  2 green
}


// For----of
// from ECMAScript6 for-of is the new way to iterate over the items in an array

for (let color of colors){
    console.log(color);// 'color' stores directly the item in the array instead of its index
}

//Output
// name
// name Shaunak
// age
// age 17
// 0
// 0 red
// 1
// 1 blue
// 2
// 2 green
//  red
//  blue
//  green