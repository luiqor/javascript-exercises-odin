const findTheOldest = function (originalArray) {
  return originalArray
    .filter((element) => typeof element === "object")
    .reduce((oldest, current) => {
      const oldestAge = oldest.death
        ? oldest.death - oldest.birth
        : new Date().getFullYear() - oldest.birth;
      const currentAge = current.death
        ? current.death - current.birth
        : new Date().getFullYear() - current.birth;
      return oldestAge < currentAge ? current : oldest;
    });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;
