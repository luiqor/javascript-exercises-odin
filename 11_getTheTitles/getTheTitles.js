const getTheTitles = function (arrayObjects) {
  return arrayObjects
    .filter((element) => typeof element === "object")
    .map((element) => element.title);
};
// Do not edit below this line
module.exports = getTheTitles;
