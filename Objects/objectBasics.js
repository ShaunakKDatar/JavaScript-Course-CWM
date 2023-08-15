
// Object-Oriented Programming(OOP)
let radius = 1;
let x = 1;
let y = 1;

const circle = {
    raduis: 1,
    location : {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    },
    move: function() {
        console.log('move');
    }
};
circle.draw(); // Method