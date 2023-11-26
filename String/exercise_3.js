function parameterize(str){
    const convertStr  = str.toLowerCase();

    const result=  convertStr.replaceAll(" ","-");
    return result;

}

const str = "Learning Javascript Is Easy";
console.log(parameterize(str));