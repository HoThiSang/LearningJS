const arr = [1,2,3];

// isArray(): 
console.log(Array.isArray(arr));
// 

// Instance methods : 
// every 
const ischeck = currentValue => currentValue > 10 ;// false 
console.log(arr.every(ischeck)); // mảng arr sẽ được kiểm tra với biến ischeck nếu , currentValue sẽ là lần lượt giá trị của các phần tử trong mảng
                                // nếu chỉ có 1 phần tử không thỏa mản điều kiện được đưa ra thì kết quả cuối cùng sẽ là false , But if  the values  thỏa mãn conditional --> will be return True 

// some : Kt liệu ít nhất 1 elements vượt qua bài kiểm tra do hàm được cung cấp thực hiện hay không. 
const even = elements => elements %2===0;
console.log(arr.some(even)) ; // true because the array has a element devide by 2 :

// indexOf(): 
console.log(arr.indexOf(1)); // đưa giá trị cần tìm vào và nó return về 1 số là vị trí cúa giá trị được đưa vào 

// ------------lastIndexOf()-------------------: Tìm kiếm phần tử ở ví trí cuối mảngm
const arr1 = Array(1,2,3,4,1);

console.log(arr1.lastIndexOf(1)); // 4 return position of value is 1 has index in the last in array 

// includes: Tìm kiếm phần từ có chứa element được tìm kiếm hay không : 
console.log(arr1.includes(1)); // return true or false 
// true if 1 has into arr1 , false if 1 not has into arr1 


// -------------------find()------------------
console.log(arr1.find(elements=> elements< 10)); // tìm phần tử đầu tiên thảo mản điều kiện trả về là index vị trí của số đó 

//-------------------findIndexOf()-----------------
console.log(arr1.findIndex(elements => elements %2===0)); // tìm phần tử có index cuối cuối cùng  .. / : ]

//--------------Nhóm hàm thêm sửa xóa phần tử 
// push(): 

//------------------------reduce--------------------------------
/**
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * function : Yêu cầu. Một hàm được chạy cho từng phần tử trong mảng.
 * total :  Yêu cầu. Giá trị ban đầu hoặc giá trị được trả về trước đó của hàm.
 * currentValue : Yêu cầu. Giá trị của phần tử hiện tại.
 * currentIndex : Không bắt buộc. Chỉ số của phần tử hiện tại
 * arr : Không bắt buộc. Mảng chứa phần tử hiện tại.
 * intialValue : Không bắt buộc. Một giá trị được truyền cho hàm làm giá trị ban đầu.
 */

