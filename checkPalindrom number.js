function checkPalindrom(n) {
    let m = 0;
    let temp = n;
    while (n > 0) {
        m = parseInt(m * 10);
        m += parseInt(n % 10);
        n = parseInt(n/10);
    }
    if (m === temp) return true;
    return false;
}
console.log(checkPalindrom(1234321)); 
