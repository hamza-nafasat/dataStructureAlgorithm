// ADDING NUMBER IN ARRAY
// ++++++++++++++++++++++

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr);
arr.splice(2, 0, 4);
console.log(arr);

// TEACHER WAY manually add number in Array
// ++++++++++++++++++++++++++++++++++++++++

let arr1 = [0, 1, 2, 3, 4, 5, 6];

let el = 4;
let p = 2;

for (let i = arr1.length - 1; i >= 0; i--) {
    if (i >= p) {
        arr1[i + 1] = arr1[i];
        if (i == p) {
            arr1[p] = el;
        }
    }
}

console.log(arr1);

// MY WAY manually add number in Array
// +++++++++++++++++++++++++++++++++++

let arr2 = [0, 1, 2, 3, 4, 5, 6];

function addNumber(p, el) {
    for (let i = arr2.length - 1; i >= p; i--) {
        arr2[i + 1] = arr2[i];
    }
    arr2[p] = el;
}
addNumber(2, 4);

console.log(arr2);
