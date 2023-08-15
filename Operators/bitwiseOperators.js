
// 1 = 00000001
// 2 = 00000010
// OR = 00000011 = 3
// AND = 00000000 = 0

console.log( 1 | 2); // | is Bitwise OR
console.log( 1 & 2 ); // & is Bitwise AND

// For example Read, Write, Execute permissions
// 00000 1    1      1
//      Read Write Execute
// Read - 00000100
// Write - 00000010
// Execute - 00000001

let readPermission = 4;
let writePermission = 2;
let exceutePermission = 1;

let myPermissions = 0;
myPermissions = myPermissions | readPermission | writePermission; 
// used OR to grant permissions to myself
console.log(myPermissions); 

//using AND to check which permissions I have
let message = (myPermissions & readPermission) ? 'yes' : 'no';
console.log(message);