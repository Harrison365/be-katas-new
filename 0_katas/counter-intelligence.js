// Please do not change the name of this function
const counterIntelligence = (str) => {
  str = str.toUpperCase();
  const shiftVal = 88 - str.charCodeAt(str.length - 1);
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const letterRegEx = /[A-Z]/;
    if (!currentLetter.match(letterRegEx)) {
      decodedStr += currentLetter;
    } else {
      const currentCode = currentLetter.charCodeAt(0);
      let newCode = currentCode + shiftVal;
      if (newCode > 90) {
        newCode = newCode - 26;
      } else if (newCode < 65) {
        // newCode = newCode + 26;
      }
      decodedStr += String.fromCharCode(newCode);
    }
  }
  //Upper limit =90
  //lower limit = 65
  return decodedStr;
};

module.exports = { counterIntelligence };
