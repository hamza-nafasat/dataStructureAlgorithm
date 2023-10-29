let array = [49, 6, 17, 28, 64, 3, 12, 1, 65, 0];

// SORTING ARRAY WITH OWN WAY ORIGNAL APPROCH
// +++++++++++++++++++++++++++++++++++++++++

let arr = array.sort((a, b) => a - b);
console.log(arr);

// SORTING ARRAY WITH OWN WAY NORMAL APPROCH
// +++++++++++++++++++++++++++++++++++++++++

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

// GOOD APPROCH FOR SORTING ARRAY WITH ANOTHER WAY
// ++++++++++++++++++++++++++++++++++++++++++++++++

function sortArray(array) {
    let arr = [...array];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    return arr;
}
console.log(sortArray(array));

//  APPROCH FOR SORTING ARRAY WITHOUT USING splice METHOD
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
