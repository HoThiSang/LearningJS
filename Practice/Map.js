const cityList = [
    {id:1, name :"Tp. Hồ Chí Minh"},
    {id:2, name :"Tp.Phan Thiết"},
];

const studentList = [
    {id:1, name : "Sang",cityId:1},
    {id:2, name : "Đang", cityId :2},
];


const cityMap = cityList.reduce((map, city)=>{
    map[city.id]= city;
    return map;
}, {});

console.log(cityMap[1].name);
console.log(cityMap[2].name);

const Products = new Map();
Products.set("productName", "Áo dài");
Products.set("quantity", 1);
Products.set("size", "S");

Products.forEach((element, key) => {
    console.log(key + " : ",  element)
});


// console.log(Products.entries());
// // console.log(Products.get("productName"))
// console.log(Products.has("productName"));
// console.log(Products.size);
// console.log(Products);
// console.log(Products.get("productName"));
// console.log(Products.get("quantity"));
// console.log(Products.get("size"));

