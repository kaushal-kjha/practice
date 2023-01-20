const arr = [1, 2, 3, 4, 5, 6];
function binarySearch(n) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = parseInt((left + right) / 2);
        if (arr[middle] === n) {
            return middle
        }
        if (n < middle) {
            right = middle - 1; 
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
console.log(binarySearch(9));
