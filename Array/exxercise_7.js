function findSeriesOfNumber2 (arr){
    const tempArr=[];
    if(arr[0]>= arr[1]) return -1;
    for(let i=0; arr[0]<= arr[1]; i++){
        tempArr[i] = arr[0];
        arr[0]++;
    }
    return tempArr;
}

const a = [2,5];
console.log(findSeriesOfNumber2(a));