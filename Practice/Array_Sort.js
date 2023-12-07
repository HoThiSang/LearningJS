const numberList = [2, 5, 3, 1];
numberList.sort(); // [1, 2, 3, 5]
console.log([null, 2, 1, 5, 3, undefined, null].sort()); // [1, 2, 3, 5, null, null,
//undefined]

//--------------------------\
// v1
function compareFn(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
   }
   console.log([2, 1, 3].sort(compareFn)); // 1, 2, 3
   

   