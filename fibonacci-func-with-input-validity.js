function getFibonacci(number) {
    if (typeof number != 'number') {
        return 'Please give a number.';
    }
    if (number < 2) {
        return 'Please enter a positive number greater than 1.'
    }

    var array = [0, 1];
    for (let i = 2; i < number; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;

}

var Fibonacci = getFibonacci(-23);
console.log(Fibonacci);