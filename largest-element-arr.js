function getLargestElement(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
var num1 = [223, 12, 56, 103, 32];
var num2 = [-223, -122, -56, -10, -32];
var largestElement1 = getLargestElement(num1);
var largestElement2 = getLargestElement(num2);
console.log('Largest number from this array: ', largestElement1);
console.log('Largest number from this array: ', largestElement2);