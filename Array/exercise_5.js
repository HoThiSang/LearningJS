function findMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}
const arr = [2,10,80,7];
console.log(findMax(arr));                                      