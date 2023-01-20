function fibo(n) {
    fibArr = [0, 1];
    for (let i = 1; i < n; i++) {
        fibArr.push(fibArr[i] + fibArr[i - 1])
    }
    return fibArr;
}
console.log(fibo(8));