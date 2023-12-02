function printEvenNumbers(arr){
    let tempArr = [];   
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
                tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

const arr = [1,4,2,5,6];
console.log(printEvenNumbers(arr));