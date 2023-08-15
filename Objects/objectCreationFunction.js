
// Factory Function - just like a actual factory this function creates objects
// Camel Notation: oneTwoThreeFour
function createCircle(radius) {
    return {
        // key : value,
        radius,
        draw (){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle);

// Constructor Function - Constructs a object
// Pascal Notation: OneTwoThreeFour
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
// new:
// Creates an empty js object
// sets 'this' to the new empty object it just created
// Return implicitely the new object from the constructor function


// Every Object has a constructor property and that references the function that was used to create it
