function findTheLongestWord(wordList){
    if(!Array.isArray(wordList)) return false;
    let wordMax = wordList[0];
    for(let i=1; i<wordList.length; i++){
       let word = wordList[i]; 
       if (word.length > wordMax.length){
            wordMax = word;
        }
   } 
   return wordMax;
}

const wordList = ["easy", "javascript","to","learn","hothisangsdfg"];
console.log(findTheLongestWord(wordList));