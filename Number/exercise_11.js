function sumAllDigits (n){
    let sum= 0;
    if(n>=100 && n<=999){
       const a  = (n%100)%10;
       const b = parseInt((n%100)/10);
       const c = parseInt(n/100);
       sum = a+b+c;
       return sum;
    }
    return false;
}
const d= 142;

console.log(sumAllDigits(d))
