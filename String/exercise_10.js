function removeUpperCase(str){
  let b = str.split("");
    for(let i=0; i<b.length ;i++){
        if(b[i]===b[i].toUpperCase()){
            b[i]="";  
        }
    }
    return b.join("");
}

const b= "SangTDTss";
console.log(removeUpperCase(b));