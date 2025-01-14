"use strict";

// Compare two dictionaries
let compareDictionaries = (firstDict, secondDict) => {
  
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  
  if (firstKeys.length !== secondKeys.length) return false;
  for (let key of firstKeys) {
    if (firstDict[key] === secondDict[key]) return false
  }
  return true;
};

module.exports = compareDictionaries;
