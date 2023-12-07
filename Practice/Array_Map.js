const numberList = [1, 3, 5, 7];
console.log(numberList.map(x => x + 1));
console.log(numberList.map(x => x * 2));


const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);
console.log(numbers);

//---------------------------------
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]

//-------------------Not using map()------------------------
const lengthArr = [1, 4, 3, 6];
let areaArr = [];
for(let i=0; i < lengthArr.length; i++) {
   areaArr.push(lengthArr[i] * lengthArr[i]);
}
console.log(areaArr);//[1, 16, 9, 36]

//------------------Using map()---------------
const lengthArray = [1, 4, 3, 6];
let areaArray = lengthArray.map(length => length * length);
console.log(areaArray);//[1, 16, 9, 36]
