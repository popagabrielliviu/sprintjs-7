let myArray = [8, 10, 3, 1, 100, 37, 49, 56, 98]
let sum = myArray.reduce (function (a, b) {
    return a + b;
}, 0)

console.log(sum);