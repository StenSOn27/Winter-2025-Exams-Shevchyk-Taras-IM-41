"use strict";

// Extract substring between prefix and suffix
getValueBetween = (inputString, prefix, suffix) => {
  prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    startIndex = prefixIndex + prefix.length;
    resultString = inputString.substring(startIndex);
    if (suffix) {
      suffixIndex = resultString.indexOf(suffix);
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
