
// let x = {value : 10};
// let y = x; // x and y are independent variables

// x.value = 20;

let number = {value : 10};
function increase(obj){
    obj.value++;
}

increase(number);
console.log(number.value);