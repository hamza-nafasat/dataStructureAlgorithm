let array = [1, 2, 3, 4, 5, 6];
console.log(array);

// REVERSING ARRAY WITH THE HELP OF RECURSION
// ==========================================

function reverseArray(arr, i, j) {
    if (i >= j) {
        return;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(array);
    reverseArray(arr, ++i, --j);
}
reverseArray(array, 0, array.length - 1);

console.log(array);
