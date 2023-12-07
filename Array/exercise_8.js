function isPrime(a){
    if(a<2) return false;
    let ischeck= true;
    for(let i=2; i<=a/2; i++){
        a%i===0 ? ischeck =false: ischeck = true;  
    }
    return ischeck;
}
//3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47,99, 211,--> thử các giá trị này 
console.log(isPrime(3));
