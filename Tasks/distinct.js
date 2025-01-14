"use strict";

// Return an array without duplicates
const distinct = (data) => {
  const uniqueElements = new Set(data);
  const result = [];
  
  for (let value of uniqueElements) {
    result.push(value);
  }
  return result;
};

module.exports = distinct;

