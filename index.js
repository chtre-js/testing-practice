function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const calc = {
  add(x, y) {
    return x + y;
  },
  substract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  } 
}

function caesarCipher(string, shift) {
  const stringArray = string.split("");
  const normShift = (shift % 26 + 26) % 26;
  
  const crypted = stringArray.map((char) => {
    const charCode = char.charCodeAt(0);
    
    if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + normShift) % 26) + 97);
      } else if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + normShift) % 26) + 65);
      } else return char
  })
  return crypted.join("");
}

function analyzeArray(arr) {
  const average = arr.reduce((pr, cr) => pr + cr) / arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const length = arr.length;
  
  const result = {
    average,
    max,
    min,
    length,
  }
  return result;
}

console.log(analyzeArray([1,8,3,4,2,6]))

export {capitalize, calc, caesarCipher, analyzeArray}