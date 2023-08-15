
const movie = {
    title: 'a',
    releaseYear: 2023,
    rating:7.3,
    director: 'b'
};


showProperties(movie);

function showProperties(obj){

    for(let index in obj){
        if(typeof obj[index] === 'string')
        console.log(index, obj[index]);
    }

}