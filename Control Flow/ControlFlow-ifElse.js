
// Hour
// If the hour is between 6am and 12 noon : Good morning!
// If the hour is between 12 noon and 6m : Good afternoon!
// Otherwise : Good evening!

// if(considtion){
//     statement;
// }
// else if(anotherCondition){
//     statement2;
// }
// else if(yetAnotherCondition){
//     statement3;
// }
// else {
//     statement4;
// }

let hour = 15;
if(hour >= 6 && hour <= 12)
    console.log(' Good morning !');
else if( 12 <= hour && hour <= 18)
    console.log('Good afternoon!');
else 
    console.log('Good evening!');

