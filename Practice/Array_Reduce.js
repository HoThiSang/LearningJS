const numberList = [2,4,6];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
   }
   console.log(sum); // 12
   // the same with above but using reduce()
  
   console.log(numberList.reduce((sum, number) => sum + number)); // 12 �-> sum -> accumulator


//----------------------------------Reduce--------------------------------------------------
const    arr =[2,3,5,10,15]; //2+3+5+10+15 = 35 

const res= arr.reduce((total,number)=> {return total+number });
console.log(res);
/**
 * reduce() tham số là một hàm với 2 tham số total và currentValue
 * Hàm reduce() quay vòng qua từng giá trị trong mảng giống như trong vòng lặp for.
 * ta muốn thêm currentValue vào total.
 *Phép tính được lặp lại liên tục cho mỗi giá trị trong một mảng, nhưng mỗi khi giá trị currentValue thay đổi thành giá trị tiếp theo trong mảng thì sẽ di chuyển sang phải.
 *Khi không còn giá trị nào nữa trong mảng, phương thức reduce() trả về tổng giá trị.
 */