function getTens(n){
    let number = 0;
    if(n>=100 && n<=999){
        number = (n%100)/10;
        return parseInt(number);
    }
    return false;
}
const b=165;
console.log(getTens(b));