function createCloneObject(obj){
    const clonedObject ={};
    let key; 
    for(key in obj){
        clonedObject[key]=obj[key];
    }
    return clonedObject;
}

const student = {
    name : "Sang",
    class : "PNV25A",
    isHero : true // Yes, I am a person hero 😂
}
console.log(createCloneObject(student));

//--------------------------------------Another way-----------------------------------------------------------------------
