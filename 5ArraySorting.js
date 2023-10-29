let array = [9, 6, 7, 8, 4, 3, 12, 1, 5, 0];

// SORTING ARRAY WITH OWN WAY NORMAL APPROCH
// +++++++++++++++++++++++++++++++++++++++++

let newarr = [];
let arr = [...array];
let length = arr.length;

let index;
let sortedElement;
for (let i = 0; i < length; i++) {
    sortedElement = arr.reduce((a, b) => (a < b ? a : b));
    newarr.push(sortedElement);
    index = arr.indexOf(sortedElement);
    arr.splice(index, 1);
}
console.log(newarr);

// GOOD APPROCH FOR SORTING ARRAY WITHOUT USING SORTING
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

let arr1 = [...array];
let length1 = arr1.length;
let newArr = [];
let minIndex;
let newIndex = 0;
while (length1 > 0) {
    minIndex = 0;
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < arr1[minIndex]) minIndex = i;
    }
    newArr[newIndex] = arr1[minIndex];
    arr1.splice(minIndex, 1);
    newIndex++;
    length1--;
}
console.log(newArr);

//  APPROCH FOR SORTING ARRAY WITHOUT USING splice METHOD
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function arraySorting(array) {
    let arr = [...array];
    let length = arr.length;
    let sortedArray = [];
    let pushIndex = 0;
    let minIndex;

    while (length > 0) {
        minIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) minIndex = i;
        }
        sortedArray[pushIndex] = arr[minIndex];

        // Use an IIFE to delete the element
        (function () {
            let deletedArray = [];
            for (let i = 0; i < minIndex; i++) {
                deletedArray.push(arr[i]);
            }
            for (let i = minIndex + 1; i < arr.length; i++) {
                deletedArray.push(arr[i]);
            }
            arr = deletedArray;
        })();
        pushIndex++;
        length--;
    }
    return sortedArray;
}
console.log(arraySorting(array));
