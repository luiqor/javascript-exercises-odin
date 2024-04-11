const fibonacci = function (givenNumber) {
    if (isNaN(givenNumber) || givenNumber < 0) return "OOPS";
    let fibonnaciArray = [0, 1];
    for (let i = 2; i <= givenNumber; i++) {
    fibonnaciArray[i] = fibonnaciArray[i - 2] + fibonnaciArray[i - 1];
    }
    return fibonnaciArray[givenNumber];
};

// Do not edit below this line
module.exports = fibonacci;
