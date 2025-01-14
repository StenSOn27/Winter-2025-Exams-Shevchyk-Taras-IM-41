"use strict";
// Delete listed keys from dictionary

const dropKeys = (dictionary, ...keysToDrop) => {
  const keys = Object.keys(dictionary);
  
  for (let key of keys) {
    if (keysToDrop.includes(key)) delete dictionary[key];
  }

  return dictionary;
};

module.exports = dropKeys;
