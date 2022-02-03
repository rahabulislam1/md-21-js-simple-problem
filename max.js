function getMaxNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

function getMinNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

function getMaxNumberUsingFunc(first, second, third) {
    var result = Math.max(first, second, third);
    return result;
}

var first = 745, second = 12344, third = 234;
var maxNumber = getMaxNumber(first, second, third);
var minNumber = getMinNumber(first, second, third);
console.log('Max number is: ', maxNumber);
console.log('Min number is: ', minNumber);
console.log('Find Max number using function: ', getMaxNumberUsingFunc(first, second, third));