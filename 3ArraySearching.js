// SEARCHING A ELEMENT FROM ARRAY
// ++++++++++++++++++++++++++++++

let arr = [1, 2, 3, 4, 5, 6];
let ele = 2;

let i = arr.indexOf(ele);
if (i != "-1") {
    console.log(`Hey, ${arr[i]} was found in this array on index ${i}.`);
} else {
    console.log(`Sorry, ${ele} is not in this array`);
}

// MANUALLY SEARCINGA SAME THING
// +++++++++++++++++++++++++++++

let arr1 = [1, 2, 3, 4, 5, 6];
let el = 2;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == el) {
        console.log(`Hey, ${arr1[i]} was found in this array on index ${i}.`);
        break;
    } else if (i == arr1.length - 1 && arr1[i] != el) {
        console.log(`Sorry, ${el} is not in this array`);
    }
}
