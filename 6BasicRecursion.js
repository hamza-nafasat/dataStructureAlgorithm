// WHAT IS RECURSION
// =================

function apple(x) {
    if (x > 10) return;

    console.log(x);
    apple(++x);
}

let item = 1;
// apple(item);

// FACTORIAL WITH THE HELP OF RECURSION
// ====================================

function factorial(num) {
    if (num == 0) return 1;
    return num * factorial(num - 1);
}
let number = 5;
console.log(factorial(number));
