function checkObjectIsEmpty (obj){
    const keys=  Object.keys(obj);
    let check = false;
    keys.forEach(key => {
        check = key in obj;
        check ==true ? check = true : check = false;
    
    });
    return check;
}

const student = {
    name : "TDT",
    age : 19,
    class : "PNV25A",
};
// const student = {}
if(checkObjectIsEmpty(student)){
    console.log("Object has key ")
}else {
    console.log("Has no key ");
}
