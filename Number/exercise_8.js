function getOnes(n){
    let a =0;
    if(n>=100 && n <= 999){
        a  = (n%100)%10;
        // a = n%10;
    }
   
    return a;
}
const b=140;
console.log(getOnes(b));
