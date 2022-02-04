// function getSecondLargestNumber(array) {
//     let max = array[0];
//     let secondMax = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//         if (array[i] > secondMax && array[i] < max) {
//             secondMax = array[i];
//         }
//     }
//     return max, secondMax;
// }

// var numbers = [23, 56, 4, 76, 26, 51];
// var secondLargestNumber = getSecondLargestNumber(numbers);
// console.log(secondLargestNumber);


var array = [223, 56, 64, 76, 26, 551];
let max = array[0];
let secondMax = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] > secondMax && array[i] < max) {
        secondMax = array[i];
    }
}
console.log(max);
console.log(secondMax);
