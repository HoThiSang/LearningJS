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
const email = "sang@gmail.com";
console.log(extractDomainName(email));