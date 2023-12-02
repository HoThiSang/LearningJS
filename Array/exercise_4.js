function evenNumber(arr, n){
    let tempArr=[];
    for(let i =0; i<arr.length; i++){
        if(arr[i]%2===0){
            if(arr[i]<n){
                tempArr.push(arr[i])
            }
        }
    }
    return tempArr;
}
const arr = [2,4,2,6,8];
console.log(evenNumber(arr, 5));