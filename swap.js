var first = 5;
var second = 8;

console.log(first, second);

//First way 

// var temp = second;
// second = first;
// first = temp;
// console.log(first, second);

//Second Way
[first, second] = [second, first];
console.log(first, second);