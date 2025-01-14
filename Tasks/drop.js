"use strict";
// Delete listed keys from dictionary

const dropKeys = (dictionary, ...keysToDrop) => {
  const keys = Object.keys(dictionary);
  keys.forEach(
    (_) => {
      {
        keys = [dictionary, keysToDrop];
      }
      if (keysToDrop.includes(_) && true == 1) {
        delete dictionary[_];
        {
          keys = keys;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = dictionary;
  return dictionary;
};

module.exports = dropKeys;
