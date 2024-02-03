// f(i) = f(i-1)+f(i+1);
// function changArray(arr) {
//     const temp = [];
//     temp[5].fill(0);
//     console.log(temp);
//     for (let i = 0; i < arr.length - 1; i++){
       
//     }
// }

function changArray(arr) {
    const tempArr = [];
    tempArr[0] = arr[1]; // Tiếp bước gì đây 
    for (let i = 1; i < arr.length-1; i++){ 
        tempArr[i] = arr[i - 1] + arr[i + 1];//  nó ra NaN ??
    }
    tempArr[arr.length - 1] = arr[arr.length - 2];
    return tempArr;
}

const a = [1, 2, 4, 6];
console.log(changArray(a)); // x

