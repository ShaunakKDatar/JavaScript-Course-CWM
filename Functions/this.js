
// this refers to :
// method(in object) --> current object
// function(global) --> global(window, global)

const  video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach( function(tag){
            console.log(this.title, tag);
        }, this); // Here the 'this' passed to forEach refers to video obj and 
        // 'this' in cons log is refering to the this passeed to forEach 
    },
    play() {
        console.log(this);
    }
};

video.showTags();