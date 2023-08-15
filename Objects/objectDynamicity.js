
const circle ={
    radius: 1
}; // const does not mean that the attributes are fixed
// const means that 'circle' name cannot be used to reference to any new variable/object


circle.color = 'yellow';
circle.draw = function() {
    console.log('draw');
};

delete circle.color;
delete circle.draw;

console.log(circle);