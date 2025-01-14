"use strict";

// Return an array without duplicates
const distinct = (data) => {
  const uniqueElements = new Set();
  let index = 0;
  
  data.forEach((element) => {
    if (uniqueElements.has(element)) {
      delete data[index];
    } else {
      uniqueElements.add(element);
    }
    index++;
  });
  return data.filter(x => typeof x === 'number');
};

module.exports = distinct;
