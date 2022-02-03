//Fibonacci Series

// let first = 0;
// let second = 1;
// console.log(first);
// console.log(second);
// for (let i = 2; i <= 10; i++) {
//     let sum = first + second;
//     console.log(sum);
//     first = second;
//     second = sum;
// }

//Fibonacci Series Another Way

// [0,1]
/*
3rd = 1st +2nd
4th = 2nd + 3rd
nth = (n-2)th + (n-1)th
ith = (i-2)th + (i-1)th
*/

var array = [0, 1];
for (let i = 2; i <= 10; i++) {
    array[i] = array[i - 2] + array[i - 1];
}
console.log(array);


