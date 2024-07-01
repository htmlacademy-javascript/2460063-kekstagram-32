// Функция для проверки длины строки
const checksStringLength = (string, length) => string.length <= length;


// Функция для проверки, является ли строка палиндромом.
const checkingForPalindrome = (string) =>{
  const convertedString = string.replaceAll(' ','').toLowerCase();
  let resultString = '';

  for (let i = convertedString.length - 1; i >= 0; i--){
    resultString += convertedString.at(i);
  }
  return convertedString === resultString;
};

//Функция принимает строку, извлекает содержащиеся в ней цифры
const getNumbers = (string) => {
  const convertedString = string.toString().replaceAll(' ','');
  let resultString = '';

  for (let i = 0; i <= convertedString.length - 1; i++){
    if(!Number.isNaN(parseInt(convertedString.at(i), 10))){
      resultString += convertedString.at(i);
    }
  }return parseInt(resultString, 10);
};

checksStringLength();
checkingForPalindrome();
getNumbers();
