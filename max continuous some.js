const maxSequence =
    (a, sum = 0) =>
        a.reduce(
         (max, v) =>
            Math.max(sum = Math.max(sum + v, 0), max), 0);
console.log(maxSequence([1,2,3,4])); // Result: 10
console.log(maxSequence([1,2,3,4,-8])); // Result: 10
console.log(maxSequence([1,-2,3,-2,5,-1,3,-9,1,6]));