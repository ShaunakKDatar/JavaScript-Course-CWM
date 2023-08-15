
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

const another = {};
for(let key in circle)
another[key] = circle[key];
another['radius'] = circle ['radius']
 console.log(another);

const another2 = Object.assign({}, circle); 
// Copies the properties and methods from one or more source objects into a target object 
// and can be used to clone/combine objects

const another3 = { ...circle}; // The three dots are know as the spread operator. 
// It takes properties from 'circle' and puts them in the curly braces in another
console.log(another3);
