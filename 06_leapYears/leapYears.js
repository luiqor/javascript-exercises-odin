const leapYears = function(yearToExamine) {
    if (
      yearToExamine % 4 == 0 &&
      yearToExamine % 100 != 0 ||
      yearToExamine % 400 == 0
    )
      return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
