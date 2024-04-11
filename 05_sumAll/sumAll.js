const sumAll = function(startInt, endInt) {
    if (
      startInt < 0 ||
      endInt < 0 ||
      typeof startInt !== "number" ||
      typeof endInt !== "number" ||
      startInt === endInt
    ) {
      return "ERROR";
    }
    if (startInt > endInt)[startInt, endInt] = [endInt, startInt];

    let sumResult = 0;
    for (let i= startInt; i <= endInt; i++){
        sumResult += i;
    }
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
