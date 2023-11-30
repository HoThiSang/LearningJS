const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
    'avg mark': 9,
   }


// console.log(student['name']);
// console.log(student.name);  // lấy được 
console.log(student['avg mark']);

// console.log(student.avg mark) // Syntax error 

// add new key 

student.name = "Van B"; // Thay cho giá trị của a 

student.age= 19;

student['mark']=10;
// console.log(student.name);
// console.log(student.age);

// Remove a key in object 
delete student.age;
console.log(student.age);

// Value type: 
const b1= 4;
const b2 = b1;
console.log(b1);  // thực chất b2 chỉ đang lấy giá trị của b1 và không hề thay đổi giá trị của b1 cả



// Ví dụ 2:
let a = { name: "cat" }
//Tạo ra biến a, lưu giá trị của a vào ô nhớ và gán lại địa chỉ ô nhớ cho biến a (a = #a001)

let b = a
//Tạo ra biến b và gán giá trị của biến a cho b, ở đây chính là địa chỉ địa chỉ ô nhớ của a (b =#a001)

a.name = "dog"
//Sửa giá trị của biến a thì giá trị trong ô nhớ được cập nhật

console.log(b) // { name: "dog" }



// reference type

const s1 = {
    name : "TDT",
    age : 19,
    class : "PNV25A",
};
const s2=s1;
s2.age = 20;
console.log(s1.age); // Vì chúng được tham chiếu chung 1 địa chỉ nên khi update lại giá trị của age thông qua s2 thì giá trị của s1 cũng thay đổi
 
const student = {
    name : "TDT",
    age : 19,
    class : "PNV25A",
};

const keyList = Object.keys(student); // key is an array
for (let i=0; i<keyList.length; i++){
    const key = keyList[i];
    console.log("key : ", key);
    console.log("Value : ", student[key]);
} 


Object.keys(student).forEach(key =>{
    console.log("Key : ",key);
    console.log("Value : ",student[key]);
})
