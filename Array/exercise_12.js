function isArrayIsPrime(arr) {
    if (arr == []) return false;
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        for (let j = 2; j < arr[i] / 2; i++){
            // console.log(arr[i]);
            if(arr[i] % j === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

const a = [2, 4, 7, 14];
console.log(isArrayIsPrime(a));

