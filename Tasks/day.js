"use strict"

// Get day number
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  let i = 0;
  for (const day of days) {
    if (inputString.startsWith(day.toLowerCase())) {
      return i + 1;
    }
    i++;
  }
  return -1;
};

module.exports = parseDay;
