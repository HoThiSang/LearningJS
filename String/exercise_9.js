function extractDomainName(str){
    let b ="";
    for(let i =0; i<str.length; i++){
        
        if(str[i]=="@"){
            const a = i+1;   
            b = str.slice(a);
        }
    }
    return b;
}
// const email = "sang@gmail.com";
console.log(extractDomainName(email));
// ------------------Bài Anh Thành sửa ---------------------
// using split
function extractDomainV1(email){
    if(email=="") return "";
    return email.split("@")[1]
}

//Using indexOf() and slice()
function extractDomainV2(email){
    if(email=="") return "";
    const a = email.indexOf("@");
    const b = email.slice(a+1);
    return b;
}
const email = "sang@gmail.com";
console.log(extractDomainV1(email));
console.log(extractDomainV2(email));

