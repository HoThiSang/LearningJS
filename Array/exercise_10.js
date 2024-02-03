// số hoàn hảo là số mà có tổng ước số của nó bằng chính nó : 
// ví dụ 6 thì các số từ 0->6 thì các số nằm trong khoảng này mà 6 chia hết và tổng các số phải bằng số 6 => là số hoàn hảo :
function isPerfectNumber(n){
    let sum=0;
    if (n <= 2) return false;
    for (let i = 0; i <= n-1; i++){ // or  for(let i=0; i<=n/2; i++)   
        if(n%i==0){
            sum+=i;
        }
    }
    if(sum==n)return true;
    return false;
}

console.log(isPerfectNumber(6));