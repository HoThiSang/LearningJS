// console.log(0.3 === 0.1 + 0.2);
// random number in [0,n]
function randomNumber (number){
    if(number<=0) return -1;
    const ramdom = Math.random()*number ;
    return Math.round(ramdom);
}
console.log(randomNumber(3));  



// Random number in range [a,b] , a<b
function randomNumbeInRange (a,b){
    if(a>=b) return -1;
    const random = Math.random()*(b-a);
    return Math.round(random);
}
console.log(randomNumbeInRange(30,100));  // Randon  out any number 
