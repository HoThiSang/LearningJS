function compareObject (obj1, obj2){
    let isCheck= false;
    // if(obj1==)
    obj1==obj2 ? isCheck = true : isCheck = false;
    return isCheck;
}
const student1 = {
    name: "Sang", 
    class : "PNV25A",
    age : 19
}
const student2 = {
    name: "Sang", 
    class : "PNV25A",
    age : 19
}
// const student2 = student1;
console.log(compareObject(student1, student2));

//---------------------------------Another ----------------------------------------------
/*
- if you create a new object 
for example : 
const s1 = {}
const s2 = {} => 2 object is difference because it created different : both object is not equals

if you clone object from another pobject 
for exemple : 
const s1 = {};
const s2 = s1; ==> s2 will be reference from s1 

*/