function removeVowelSounds(str){
    const arr = ["a","e","u","i","o"];
    const temp = str.split("");
    for(let i =0; i< temp.length; i++ ){
        for(let j=0; j<arr.length; j++){
            if(temp[i]==arr[j]){
                temp[i]="";
            }
        }    
    }
    return temp.join(" ");
}

const str = "Learning Javascript is easy";
console.log(removeVowelSounds(str));