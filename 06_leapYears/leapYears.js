const leapYears = function(yearToExamine) {
    return yearToExamine % 4 == 0 &&
      yearToExamine % 100 != 0 ||
      yearToExamine % 400 == 0
};

// Do not edit below this line
module.exports = leapYears;
