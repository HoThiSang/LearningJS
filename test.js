const mySet = new Set([1,2,3,4,5]); // Khởi tạo Set 
console.log(mySet.size);
                                              mySet.add(4) // add new value 
console.log(mySet.has(4));
mySet.delete(4);
console.log(mySet.has(4));
mySet.add(4) // add new value 

mySet.clear();
console.log(mySet.size);

mySet.forEach((value)=>{
    console.log(2*value);
});
console.log(mySet.clear());
console.log(mySet.has(4));
console.log(mySet.delete(4));
console.log(mySet.clear());
console.log(mySet.keys());
console.log(mySet.values());
console.log(mySet.entries());
console.log(mySet.keys());
console.log(mySet.keys());

const set1 = new Set([4,3,5,6,8]);
set1.forEach((value)=>{
    console.log(value);
});

let item;
for(item of set1){
    console.log(item);
}

const set2 = new Set();
// Remove duplicated number :
function uniqueNumber(numberlist){
    if(!Array.isArray(set2) || set2.length===0) returm
}