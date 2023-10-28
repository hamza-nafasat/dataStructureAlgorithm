// MERGING TWO ARRAYS WITH ORIGNAL METHOD
// ++++++++++++++++++++++++++++++++++++++

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// MERGING TWO ARRAYS WITH OWN WAY
// ++++++++++++++++++++++++++++++

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

function mergeArray(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        newArray[array1.length + i] = array2[i];
    }
    return newArray;
}

let array3 = mergeArray(array1, array2);
console.log(array3);
