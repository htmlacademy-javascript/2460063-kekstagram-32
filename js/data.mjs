import {getIdPost, getIdComments, getUrlPhotos, getRandomInteger, getElemenyFromArray, getNumberFromArray} from './util.mjs';

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


const postPhoto = () => {
  const getComments = () => {
    const getMessage = () => {
      if (getRandomInteger(1,2) > 1){
        return getElemenyFromArray(MESSAGE) + getElemenyFromArray(MESSAGE);
      }
      return getElemenyFromArray(MESSAGE);
    };
    return {
      id: getIdComments(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getMessage(),
      name: NAME[getNumberFromArray(0, NAME.length - 1)]
    };
  };
  const arrayOfComments = Array.from({length:getRandomInteger(0, 30)}, getComments);
  return {
    id: getIdPost(),
    url: `photo/${getUrlPhotos()}.jpg`,
    description: getElemenyFromArray(DESCRIPTION_PHOTO),
    likes: getRandomInteger(15, 200),
    comments:  arrayOfComments
  };
};

const arrayOfPhotographs = Array.from({length:COUNT_PHOTO}, postPhoto);

export {arrayOfPhotographs};
