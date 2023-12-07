// check if all numbers is even
console.log([1, 2, 4].every((x) => x % 2 === 0));
console.log([2, 4, 6].every((x) => x % 2 === 0));
// check if exist one number is even
console.log([1, 2, 4].some((x) => x % 2 === 0));
console.log([1, 3, 5].some((x) => x % 2 === 0));

// 
const numberList = [1,3,5];
console.log(numberList.indexOf(1)) // 0
console.log(numberList.lastIndexOf(5));  // 2

const wordList1  = ['easy', 'javascript', 'easy'];
console.log(wordList1.indexOf("easy")); // 0
console.log(wordList1.lastIndexOf("easy")); // 2
console.log(wordList1.includes("easy")); // true

const wordList2 = ["javascript"];
console.log(wordList2.includes("easy")); // false 

function checkIfAllEven(numberList){
    if(!Array.isArray(numberList)) return false;
    let isValid = true;
    for(let i=0; i< numberList.length; i++){
        let number = numberList[i];
        if(number%2!==0){
            isValid = false;
        }
    }
    return isValid;
}

console.log(checkIfAllEven([1,7,8])); // false
console.log(checkIfAllEven([2,4,6]));// true

function checkIfAllEven(numberList){
    if(!Array.isArray(numberList)) return false;
    for(let i=0; i< numberList.length; i++){
        if(numberList[i]%2!==0){
            return false;
        }
    }
    return true;
}

console.log(checkIfAllEven([1,7,8])); // false
console.log(checkIfAllEven([2,4,6]));// true

