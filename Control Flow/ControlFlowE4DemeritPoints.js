
// Speed Limit --> 70
// 5 --> 1 point
// if points< 
// Math.floor(float)
// 12 points --> License Suspended

const speedLimit = 70;
const kmPerPoint = 5;
const pointLimit = 12
checkSpeed(71);

function checkSpeed(speed){
    speedDelta = speed - speedLimit;
    if(speedDelta < kmPerPoint){
        console.log('Ok');
        return;
    }
    const points = Math.floor(speedDelta/kmPerPoint);
    if(points >= pointLimit)
    console.log('License Suspended');
    else
    console.log('Points: ', points);
    return 0;
}