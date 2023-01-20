function revNum(num) {
    let temp = 0;
    while (num > 0) {
        temp = Math.floor((temp * 10) + num % 10);
        num = Math.floor(num / 10);
    }
    return temp;
}
console.log(revNum(123456789));