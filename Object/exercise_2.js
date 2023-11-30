function getAverageMark (obj){
    const keyList=  Object.keys(obj);
    keyList.forEach(key => {
        if(key=="average"){
          console.log(obj[key]);

        }  
    });
}

const student = {
    id : 1,
    name : "TDT",
    average : 8.0
}

getAverageMark(student);