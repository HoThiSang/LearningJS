// khai báo mảng rỗng
// const numberList = [];
const numberList = [1, 2, 3]; // a list of numbers
console.log(numberList);
const wordList = ['Easy', 'Javascript']; // a list of strings
const flagList = [true, false, false]; // a list of boolean
// a list of students
const studentList = [
    { id: 1, name: 'Van A' },
    { id: 2, name: 'Thi B' },
    { id: 3, name: 'Van C' },
   ]

for(let i =0; studentList.length; i++){    
    
}
// a list of list , it wil have many data type in an array 
const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, false]
   ]
   // a list of mixed data type
   const mixedList = [
    1, 
    2, 
    'word', 
    true, 
    null, 
    undefined, 
    { id: 1, name: 'Easy' }, 
    [1, 2, 3]
   ];

 //   How to query elements in of an array : 
 // For instant : 
 const numberList1 = [1, 2, 3];
 console.log(numberList1[0]) // 1
 console.log(numberList1[1])  // 2
 console.log(numberList1[2]) // 3 
 // Use for statement to query elements in an array 
 for(let i=0; i< numberList1.length ; i++){ // i wil must less then length for length of array 
    console.log(numberList1[i]);
 }

 //------------Mảng 2 chiều-----------------------------------------
 const board1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
   ]
  console.log(board1[0]); // [1, 2, 3]
  console.log(board1[1]); 
  console.log(board1[2]); 
  console.log(board1[0][0]); 
  console.log(board1[0][1]); 
  console.log(board1[1][1]); 

  // Use for statement : nested for statement 
  for (let i =0; i< board1.length; i++){
    for(let j =0; j< board1[i].length; j++){
        console.log(board1[i][j])
    }
  }

// --------------Have a lot of type array ----------------------------
/**
 * list rỗng : numberList = [] -> no have any value 
 *list with namy type data in an array : 
 How to query elements in of an array : 
 Mảng 2 chiều : 
 */
