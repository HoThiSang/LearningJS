function findMax(arr){
    let max;
    for(let i=0; i<arr.length; i++){
        max =arr[i];
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]< arr[i+1]){
                max = arr[i+1];
            }
        }
    }
    return max;
}
const arr = [2,10,8,15];
console.log(findMax(arr));