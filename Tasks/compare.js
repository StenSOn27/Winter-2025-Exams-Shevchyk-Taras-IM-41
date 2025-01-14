"use strict";

// Compare two dictionaries
let compareDictionaries = (firstDict, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(second_values);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let isEqual = true;
  for (key of firstKeys) {
    if (firstDict[key] === second_values[key]) isEqual = isEqual && true;
    else {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = compareDictionaries;
