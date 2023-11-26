function checkExist (str1, str2){
   const result = str1.includes(str2);
   return result;

}

const str1 = "Learning Javascript is very easy";
console.log(checkExist(str1,"Javascript"));
console.log(checkExist(str1, "Sang"));

// ---------------some common operators String to check----------------
const str2 = "This is my world";
console.log(str2.startsWith("This"));
console.log(str2.includes("is"));
console.log(str2.endsWith("world"));
console.log(str2.includes("hello"));

