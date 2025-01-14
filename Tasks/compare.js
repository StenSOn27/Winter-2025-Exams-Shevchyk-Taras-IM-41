"use strict";

// Compare two dictionaries
let compareDictionaries = (firstDict, secondDict) => {
  
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  
  if (firstKeys.length !== secondKeys.length) return false;
  for (let i = 0; i < firstKeys.length; i++) {
    if (firstDict[firstKeys[i]] !== secondDict[secondKeys[i]]) return false;
  }
  return true;
};

module.exports = compareDictionaries;
