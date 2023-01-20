const arr = [];
let swapped;
function bubbleSort(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) reject(new Error("No arr"));
        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped); 
        resolve(arr);
    });
}
bubbleSort(arr).then((result) => {
    console.log(result)
}).catch((err) => {
    if (err.message === "No arr") console.log(err.message);
    else console.log("object");
});