let name = 'Javascript';
// name[0] = 'j'; // không thể gán được vì ban dầu ta đã khai báo không phải là mảng
// name = 'javascript' // name = Javascript
console.log(name);

const str1 = "Hello word";
console.log(str1.charAt(0));

console.log(str1.charAt(str1.length-2)); // lấy từ cuối lên : 

const str2 = "Sang";
console.log(" Hello ".concat(str2)); 
console.log('a'.padStart(5, '*')); // ****a
console.log('ab'.padStart(5, '*')); // ***ab
console.log('abc'.padStart(5, '*')); // **abc
console.log('a'.padEnd(5, '*')); // a****
console.log('ab'.padEnd(5, '*')); // ab***
console.log('abc'.padEnd(5, '...')); // abc**

console.log('*'.repeat(5))

console.log(' Easy Javascript '.trim());

console.log(' Easy Javascript '.trimStart());
console.log(' Easy Javascript '.trimEnd());


console.log("This is my function".replace("my","your"));
console.log("This is my function".replace("This"," "));
console.log("This is my function".replaceAll(" ","-"));
console.log('super 123 cool'.replaceAll(/[0-9]/gi, '')); // Chưa hiểu lắm 🙄????

