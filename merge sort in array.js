const arr = [2, 3, 1, -5, 7, 4, 9];
function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const mid = parseInt(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const sort = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sort.push(left.shift());
        } else {
            sort.push(right.shift())
        }
    }
    return [...sort, ...left, ...right];
}
console.log(mergeSort(arr));