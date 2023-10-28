// DELETING A NUMER FROM ARRAY
// +++++++++++++++++++++++++++

let arr = [0, 1, 2, 3, 4, 5, 6];
console.log(arr);
arr.splice(3, 3);
console.log(arr);

// manualy delete number from array
// ++++++++++++++++++++++++++++++++++++++

let arr2 = [0, 1, 2, 3, 4, 5, 6];

function deleteNumberFromArray(p, el) {
    let newArr = [];
    for (let i = 0; i < p; i++) {
        newArr.push(arr2[i]);
    }
    for (let i = p + el; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    arr2 = newArr;
}

deleteNumberFromArray(3, 3);
console.log(arr2);
