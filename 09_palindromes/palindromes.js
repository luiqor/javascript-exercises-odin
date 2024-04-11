const palindromes = function (originalString) {
    originalLowerCased = originalString.toLowerCase();
    originalArrayFiltred = originalLowerCased.split("")
                    .filter((char) => ![" ", ",", "!", "?", "."].includes(char));
    palindromedString = [...originalArrayFiltred].reverse().join("");

    return palindromedString.localeCompare(originalArrayFiltred.join("")) === 0;
};

// Do not edit below this line
module.exports = palindromes;
