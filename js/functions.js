// 1 задача. Функция для проверки длины строки
const checksStringLength = (string, length) =>{
  return string.length <= length ? true : false;
}

// 2 задача.Функция для проверки, является ли строка палиндромом.
const checkingForPalindrome = (string) =>{
  let convertedString = string.replaceAll(' ','').toLowerCase();
  let resultString = '';

  for (let i = convertedString.length-1; i >= 0; i--){
    resultString += convertedString.at(i);
  }
  return convertedString === resultString ? true : false;
}

// 3 задача.Функция принимает строку, извлекает содержащиеся в ней цифры
const getNumbers = (string) => {
   let convertedString = string.toString();
    let resultString = '';

    for (let i = 0; i <= convertedString.length-1; i++){
      if(convertedString.at(i) >=0 || convertedString.at(i) <=9){
        resultString += convertedString.at(i);
      }
    }
 return parseInt(resultString);
}
