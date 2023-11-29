function convertSeconds(seconds){
    const b = parseInt(seconds,10);

    console.log(b)
    let hours = Math.floor(b/3600);
    let minutes =Math.floor((b -(hours*3600))/60);
    let second = Math.floor((b-(hours*3600)-(minutes*60)));

    if(hours>10) {hours = "0"+ hours};
    if(minutes<10) {minutes = "0"+ minutes};
    if(second<10) {second = "0"+ second};
    return hours +' : '+ minutes+' : '+second;

}

console.log(convertSeconds(700));