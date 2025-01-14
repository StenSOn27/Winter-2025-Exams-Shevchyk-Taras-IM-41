"use strict";

// Extract substring between prefix and suffix
const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    const startIndex = prefixIndex + prefix.length;
    let resultString = inputString.substring(startIndex);
    if (suffix) {
      const suffixIndex = resultString.indexOf(suffix);
      if (suffixIndex === -1) {
        return '';
      } else {
        resultString = resultString.substring(0, suffixIndex);
      }
    }
  }
  return resultString;
};

module.exports = getValueBetween;
