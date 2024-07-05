
const NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Картошка',
  'Марина',
  'Илья',
  'Андрей',
  'Кристина',
  'Игнат',
  'Анна',
  'Егор',
  'Игорь',
  'Борька',
  'Петя',
  'Саня',
  'Виталий',
  'Рудольф',
  'Лючия',
  'Вячеслав',
  'Лена'
];

const DESCRIPTION_PHOTO = [
  'Ночной город',
  'Закат',
  'Поездка за грибами',
  'Охота на медведя',
  'Юбилей свадьбы',
  'День рождение сына',
  'Покупка автомобиля',
  'Новый наряд',
  'Путешествую по миру',
  'Дождь',
  'Первый снег',
  'Новый год',
  'Первое блюдо',
  'Любимый ресторан',
  'Любимый десерт',
  'Авария на кухне',
  'Огромная пробка',
  'Банька в деревне',
  'Родной дом',
  'Любимый муж',
  'Огород',
  'Поездка в деревню',
  'Развлечения на коньках',
  'День рождение мамы',
  'Папа на рыбалке',
  'Новые игрушки'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COUNT_PHOTO = 25;


function makeCounter() {
  let currentCount = 1;

  function counter() {
    return currentCount++;
  }

  return counter;
}

const idPost = makeCounter();
const idComments = makeCounter();


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function postPhoto() {
  function getComments() {
    function getMessage() {
      const quantityOfMessage = getRandomInteger(1,2);
      if (quantityOfMessage > 1){
        return MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] + MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
      }else {
        return MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
      }
    }
    return {
      id: idComments(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getMessage(),
      name: NAME[getRandomInteger(0, NAME.length - 1)]
    };
  }
  const arrayComments = Array.from({length:getRandomInteger(0, 30)}, getComments);
  return {
    id: idPost(),
    url: `photo/${getRandomInteger(1, 25)}.jpg`,
    description: DESCRIPTION_PHOTO[getRandomInteger(0, DESCRIPTION_PHOTO.length - 1)],
    likes: getRandomInteger(15, 200),
    comments:  arrayComments
  };
}

const arrayPhoto = Array.from({length:COUNT_PHOTO}, postPhoto);

console.log(arrayPhoto);

