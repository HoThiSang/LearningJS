function truncateString(str, maxlength){
   if(str.length>maxlength){
      const q = str.slice(0,maxlength-1);
      const result = q.padEnd(maxlength,'\u2026');  
       return result;
   }
}

const a ="Learning Javascript very easy";
console.log(truncateString(a,4));



