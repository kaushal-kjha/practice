function rec(n) {
    if (n < 2) return n;
    return rec(n - 2) + rec(n - 1);
}
console.log(rec(6))