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

//----------------Bài Anh Thành sửa ----------------------------------
// using indexOf()
function isSecureUrlV1(url){
     if(url.indexOf("s", 4)===4) return true;
     if(url.indexOf("s", 2)===2) return true;
      return false;
}
// using startWith()
function isSecureUrlV2(url){
     if(url.startsWith("https")) return true;
     if(url.startsWith("wss")) return true;
     return false;
}
const url= "https://github.com/HoThiSang/LearningJS";
console.log(isSecureUrlV1(url))
console.log(isSecureUrlV2(url))




