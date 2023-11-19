function findMaxNumber(number1, number2, number3){
    if (number1>number2 && number1> number3 ){
        console.log(number1," is the largest number");

    }else if(number2> number1 && number2 > number3){
        console.log(number2," is the largest number");

    }else if(number3 > number1 && number3 > number2){
        console.log(number3," is the largest number");
    }else {
        console.log("There is no largest number");
    }
}
const number1 = 8,
      number2 = 5,
      number3 =  10;
findMaxNumber(number1, number2, number3);
