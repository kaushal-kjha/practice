const arr = [3, 4, 2, 5, 8, 9];
function linearSearch(n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(7));