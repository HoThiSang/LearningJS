// const str = "Hello World";

function firstLetterCase(str) {
    const a=  str.toLowerCase();

    const convertString= a.replace(a.charAt(0), a.charAt(0).toUpperCase());
    return convertString;
   
   
}
console.log(firstLetterCase("learning JAvascript IS easy"));
// const u =str.toLowerCase().split();

// const a= u.map(function(i){
//     return u.replace(u.charAt(0), u.charAt(0).toUpperCase());
// });
// console.log(u.join());
