//------------------Use find() method----------------------
function findArray(arr){
    const  even = element => element % 2 ===0;  
    return arr.find(even);  
}

const arr = [1,4,5,6];
console.log(findArray(arr));

//----------------------------Another way (not use find() method) -----------------------------------
/**
 * it will be return index of first element satisfy the condition
 */

function findArrayy (arr){
    let temp ;
    stop: for (let i=0; i< arr.length ; i++){
        if(arr[i]% 2 ===0){
            temp = arr[i];
            break stop;
        }
    }
    return temp;
}

console.log(findArrayy([1,4,5,6]));