"use strict";

// Compare two dictionaries
let compareDictionaries = (firstDict, secondDict) => {
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let isEqual = true;
  for (key of firstKeys) {
    if (firstDict[key] === secondDict[key]) isEqual = isEqual && true;
    else {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = compareDictionaries;
