function gcd(p, q) {
    if (p == 0)
        return q;
    if (q == 0)
        return p;
    if (p == q)
        return p;
    if (p > q)
        return gcd(p - q, q);
    else
        return gcd(p, q - p);
}
console.log(gcd(98, 56));