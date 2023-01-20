let rev = 0;
let num = 12345612;
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = parseInt(num / 10);
}

console.log("Reverse number : " + rev);

