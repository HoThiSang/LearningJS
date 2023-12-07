// Ước số của 1 số nguyên dương n 
function findDivisors(a){
    const arr=[];
    if(a<0) return -1;
    for(let i=0; i<=a; i++){      
        if(a%i===0){
           arr.push(i);
        }    
    }                        
    return arr;    
}
console.log(findDivisors(12));

