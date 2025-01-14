"use strict";
// Sum all number values in dict

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let value = obj[keys[i]];
    if (typeof value === 'number') sum += value;
  };
  return sum;
};

module.exports = count;
