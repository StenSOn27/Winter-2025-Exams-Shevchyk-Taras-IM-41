"use strict";

// Return an array without duplicates
distinct = (data) => {
  uniqueElements = new Set();
  index = 0;
  data.forEach((element) => {
    if (uniqueElements.has(element)) {
      delete data[index];
    } else {
      uniqueElements.add(element);
    }
    index++;
  });
  return data.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
