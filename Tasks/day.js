"use strict"

// Get day number
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (inputString.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
