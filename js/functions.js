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


//Функция проверяет не выходит ли встреча за рамки рабочего дня
const checkMeetingDuration = (starDay, endingDay, startMeeting, durationOfTheMeeting) => {
  const convertedStarDay = starDay.split(':');
  const convertEdendingDay = endingDay.split(':');
  const convertedStartMeeting = startMeeting.split(':');
  const minutesStarDay = (parseInt(convertedStarDay[0]*60)) + parseInt(convertedStarDay[1]);
  const minutesEndingDay = (parseInt(convertEdendingDay[0]*60)) + parseInt(convertEdendingDay[1]);
  const minutesStartMeeting = (parseInt(convertedStartMeeting[0]*60)) + parseInt(convertedStartMeeting[1]);
  const meetingInMinutes = minutesStartMeeting + parseInt(durationOfTheMeeting);
  let result = meetingInMinutes >= minutesStarDay && meetingInMinutes <= minutesEndingDay
  console.log(result)
}



checkMeetingDuration('08:00', '17:30', '14:00', 90),
checkMeetingDuration('8:0', '10:0', '8:0', 120)
checkMeetingDuration('08:00', '14:30', '14:00', 90),
checkMeetingDuration('14:00', '17:30', '08:0', 90),
checkMeetingDuration('8:00', '17:30', '08:00', 900)

checksStringLength();
checkingForPalindrome();
getNumbers();
