
let i = 10;
while(i<=10){
    if(i == 5) break;// break jumps out of the loop
    if(i%2 === 0)
    {
        i++;
        continue; // skips to the next iteration
    }
    console.log(i);
    i++;
}