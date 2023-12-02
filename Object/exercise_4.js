function compareObject (obj1, obj2){
    const keyObj1 = Object.keys(obj1);
    const keyObj2 = Object.keys(obj2);
    // So sánh key
    if(keyObj1.length!==keyObj2.length){
        return false;
    }
    // So sánh value : 
    for(let i=0; i<keyObj1.length; i++){
        let value = keyObj1[i];  
        if(obj1[value] !==obj2[value]){
            return false;   
       }

    }
    return true;  

}


const student1 = {
    name: "Sang", 
    class : "PNV25A",
    age : 19
}
const student2 = {
    name: "Sang", 
    class : "PNV25A",
    isHero : true
}
// const student2 = student1;
console.log(compareObject(student1, student2));

//---------------------------------Another ----------------------------------------------
/* Object thì không thể so sánh như chúng ta so sánh bình thường được --> CHÚ Ý HƠN PHẦN NÀY
- if you create a new object 
for example : 
const s1 = {}
const s2 = {} => 2 object is difference because it created different : both object is not equals

if you clone object from another pobject 
for exemple : 
const s1 = {};
const s2 = s1; ==> s2 will be reference from s1 

*/