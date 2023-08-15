
const person = {
    firstName: 'Shaunak',
    lastName: 'Datar',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        
        if(typeof value !== 'string')
        throw new Error('Value is not a String');
        
        const parts = value.split(' ');

        if(parts.length !==2)
        throw new Error('Enter First AND Last Name');
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '' ;
}
catch(e){
    alert(e);
}
console.log(person);