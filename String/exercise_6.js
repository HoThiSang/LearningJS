function convertSeconds(seconds){
    let hours = seconds/3600;
    let minutes = (seconds%3600)/60;
    let second = seconds%60;

    if(hours<10) {hours = "0"+ hours};
    if(minutes<10) {minutes = "0"+ minutes};
    if(second<10) {second = "0"+ second};
    return hours +' : '+ minutes+' : '+second;
   
}

console.log(convertSeconds(3600));