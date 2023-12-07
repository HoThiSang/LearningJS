const numberList =  [1,2,3,4,5,6,7,8];
let temp = numberList.filter(x => x%2);
console.log(temp);

let num = numberList.filter(x=> x>6);
console.log(num);

let n = numberList.filter(x => x<=2);
console.log(n);
/**
 * filter(), hàm này được dùng để tạo ra 1 tập con của tập truyền vào, chỉ những phần tử thỏa mãn điều kiện mới được đưa vào tập con.
 * Cũng như .map, .filter nhận vào 1 callback function để lọc các phần tử từ mảng ban đầu, phần tử nào thỏa điều kiện sẽ được đưa vào mảng kết quả.
 */

