let seconds =0;
function calculateSeconds(hours){
    const minute = hours*60; 
    seconds = minute*60; 
    return seconds;
}
 const hours = 9;
 const result = calculateSeconds(hours);
 console.log(hours," o'clock convert to seconds is ", result);

