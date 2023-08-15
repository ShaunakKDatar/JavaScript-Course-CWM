
walk(); 
// This is fine
// Because when JS engine executes it pushes all fn declarations to the top
// So we can call a fn(declaration) before it appears in the code
// Which we cannot do for function expression defined fns
// This is called hoisting
// Hoisting - process of moving funcion declaration to the top of the file 
// and this is done automatically by the js engine executing the code

// Function Declaration
function walk() {
    console.log('walk');
}

// Named Function Expression

// run(); // This will give an error
let run = function walk() {
    console.log('run');
};
