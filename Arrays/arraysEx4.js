
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 1);

console.log(output);

function move(array, index, offset){
    // find element at index
    // put it in a temporary variable
    // splicing index- current index + offset(after checking if offset + current is <arrray.length-1) 
    let moveIndex = index + offset;
    if(moveIndex < 0 || moveIndex > array.length - 1){
    console.error('INALID OFFSET');
    return ;
}
   const output = [...array];
    const moveValue = output.splice(index,1)[0];
    output.splice(moveIndex, 0, moveValue);
    return output;
}

