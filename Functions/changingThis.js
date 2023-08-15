
// to change this we have 3 methods:
// 1) create new variable that refers to this(object) outside forEach and pass that as 'this'
// 2) use .binds (alterante to call and apply) and set forEach's this to the object
// 3) use arrow fn - arrow fn inherits the 'this' from the calling scope
const  video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(tag => console.log(this.title, tag));
    },
    play() {
        console.log(this);
    }
};

video.showTags();