
const array = [0,1,'',3,NaN,5,6,null];
console.log(countTruthy(array));

function countTruthy(array){
    let truthy = 0;
    for (let value in array){
        if(value) truthy++ ;
    }
    return truthy;
}