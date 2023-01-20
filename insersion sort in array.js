const array = [3, -40, 5, 1, 6, 9];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let nti = array[i];
        let se = i - 1;
        while (se >= 0 && array[se] > nti) {
            array[se + 1] = array[se];
            se = se - 1;
        }
        array[se + 1] = nti;
    }
}
insertionSort(array);
console.log(array);