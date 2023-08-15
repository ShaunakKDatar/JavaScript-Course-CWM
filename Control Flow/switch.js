
let role = 'lambda';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
        
    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unkonwn user');    
}      

// Same code implemented using if and else if
if ( role === 'guest')
console.log('Guest User');
else if(role === 'moderator')
console.log('Moderator User');
else
console.log('Unknown User');
    