function checkUrl (url){
     if(url=="") return -1;    
     let isCheck = url.includes("https");
     if(isCheck) {
          isCheck = true;
     } else {
          isCheck= false;
     }
     return isCheck;

}

const b = "https://github.com/HoThiSang/LearningJS";
console.log(checkUrl(b))
// if(checkUrl(b)){
//      console.log("url that contains the security method")
// }else{
//      console.log("url does not contain a security method")
// }

