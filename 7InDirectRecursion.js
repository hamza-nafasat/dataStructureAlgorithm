// SIMPLE EXAMPLE OF IN DIRECT RECURSION
// =====================================

let amount = 200;
let totalApples = 0;

function buyApple(money) {
    if (money) {
        totalApples++;
        // console.log(totalApples);
        money -= 10;
        buyMoreApples(money);
    } else {
        console.log(
            `you have bought ${totalApples} apples with RS ${amount} and now you have RS ${money}.`
        );
    }
}

function buyMoreApples(money) {
    totalApples++;
    // console.log(totalApples);
    money -= 10;
    buyApple(money);
}

buyApple(amount);
