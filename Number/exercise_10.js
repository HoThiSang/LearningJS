
function getHundress(n){
    let a = 0;
    if(n>=100 && n <=999){
       a = n/100;
       return parseInt(a);
    }
    return false;
}
const b = 780;
console.log(getHundress(b));