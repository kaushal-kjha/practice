const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const names1 = names.reduce((a, b) => {
    if (a[b] >= 1) a[b]++
    else a[b] = 1
    return a
},{})
console.log(names1);