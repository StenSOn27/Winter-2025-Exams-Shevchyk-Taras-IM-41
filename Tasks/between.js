"use strict";

// Extract substring between prefix and suffix
const getValueBetween = (inputString, prefix, suffix) => {
  
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
    
  const startIndex = prefixIndex + prefix.length;
  let resultString = inputString.substring(startIndex);
  
  if (!suffix) return resultString;
  const suffixIndex = resultString.indexOf(suffix);
  
  if (suffixIndex === -1) return '';
  resultString = resultString.substring(0, suffixIndex);
  
  return resultString;

};

module.exports = getValueBetween;
