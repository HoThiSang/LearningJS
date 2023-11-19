const number1 = 15,
      number2 = 16,
      number3 =  20;

const array1=[];
array1.push(number1, number2,number3);
let maxNumber =0;
const array2=[]; 
for(let i = 0; i < array1.length; i++){
    if(array1[i] % 2 ==0){
        array2.push(array1[i]);
    }
}
console.log(array2);
maxNumber = array2[0];
for(let i = 1; i< array2.length; i++){
    if(maxNumber < array2[i]){
        maxNumber=array2[i];
    }
    console.log(maxNumber);
}
console.log(maxNumber," is the largest number");
