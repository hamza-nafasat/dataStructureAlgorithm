// SIMPLE EXAMPLE OF IN DIRECT RECURSION
// =====================================

let amount = 200;
let tootalApples = 0;

function buyApple(money) {
    if (money) {
        tootalApples++;
        // console.log(tootalApples);
        money -= 10;
        buyMoreApples(money);
    } else {
        console.log(
            `you have bought ${tootalApples} apples with RS ${amount} and now you have RS ${money}.`
        );
    }
}

function buyMoreApples(money) {
    tootalApples++;
    // console.log(tootalApples);
    money -= 10;
    buyApple(money);
}

buyApple(amount);
