function fullName (firstName, lastName){
    if(firstName =="" || lastName == "") return -1;
    return lastName.concat(" ", firstName);
}

const firstName = "Sang";
const lastName = "Thi";
console.log(fullName(firstName, lastName));