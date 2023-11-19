// type coersion 
const number = 1+ "2"; // tự động chuyển số 1 thành chuỗi 1 khi mà thực hiện cộng số với chuỗi
console.log(number); // 12 --> chuỗi

const b = 1- "2"; // khi thực hiện phép trừ giữa giữa số và chuỗi thì chuỗi sẽ tự động chuyển thành số 
// chuỗi 2 auto --> số 2 
console.log(b); 
const s = 1- "aaaa"; // khi mà chúng ta trừ số với chuỗi thì kết quả là NaN --> Tìm hiểu 
const c = 1+ "aaaa"; // thực hiện nối chuỗi --> 1aaaa
console.log(s);

const message = "JS isn't easy, but I can learn it (●'◡'●)";
if(message){ // message ở đây sẽ được chuyển thành kiểu boolean , check message có true (tồn tại)-- > 
    console.log("Readly!? --> Tất nhiên gòiiiiiii ! ")
}
// Explicit conversion 
const error = "Sonmehting wrong ";
const hasError = Boolean(error);// chuyển string error thành kiểu boolean --> chúng ta viết thẳng kiểu mà chúng ta chuyển 
