
// A function is also an object

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
            console.log('draw');
    }
}
Circle.call({},1); // Same as the code on line 14
// call takes the new empty object we created and the arguments of the constructor
Circle.apply({},[1,2,3,4]); // Same as call but arguments can be passed as a SINGLE ARRAY

const another =  new Circle(1);  