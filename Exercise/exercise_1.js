function sumOfNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;

    }
    return sum;
}

const number = 9;
console.log(sumOfNumber(number));