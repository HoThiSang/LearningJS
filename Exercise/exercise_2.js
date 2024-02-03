function soTangDan(arr) {
    const tempArr = [];
  
    for (let i = 0; i <= arr.length; i++){
          let max = arr[i];
        for (let j = 1; j <= arr.length ; j++){
            if (max > arr[j]) {  
                max = arr[j];
                arr[j] = arr[i];
                tempArr[i] = max;
            }
        }
       
    }
    return tempArr;
}

const a = [2, 5, 1, 3, 6];
console.log(soTangDan(a));