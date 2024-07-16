import {arrayOfPhotographs} from './data.js';

const similarListPhotos = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotos = arrayOfPhotographs;
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, description, comments, likes}) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  similarListPhotos.appendChild(photoElement);
});
similarListPhotos.appendChild(similarListFragment);
