import './miniatures.js';
import {createCommentList,deleteCommentList} from './comments.js';
import {arrayOfPhotographs} from './data.js';
const listPhotos = arrayOfPhotographs;

const miniatures = document.querySelectorAll('.picture');
const fullImage = document.querySelector('.big-picture');
const fullImageUrl = fullImage.querySelector('.big-picture__img');
const showMoreButton = fullImage.querySelector('.social__comments-loader');
const theInitialValueOfComments = 5;
const bodyScroll = document.querySelector('body');
const buttonCancel = fullImage.querySelector('.big-picture__cancel');

miniatures.forEach((miniature,index) => {
  miniature.addEventListener('click', () => {
    bodyScroll.classList.add('modal-open');
    fullImage.classList.remove('hidden');
    showMoreButton.classList.add('hidden');
    const getTheInitialValueOfComments = () => {
      if(miniature.querySelector('.picture__comments').textContent >= 5){
        return theInitialValueOfComments;
      }else {
        return miniature.querySelector('.picture__comments').textContent;
      }
    };
    fullImageUrl.querySelector('img').src = miniature.querySelector('.picture__img').src;
    fullImageUrl.querySelector('img').alt = miniature.querySelector('.picture__img').alt;
    fullImage.querySelector('.likes-count').textContent = miniature.querySelector('.picture__likes').textContent;
    fullImage.querySelector('.social__caption').textContent = miniature.querySelector('.picture__img').alt;
    fullImage.querySelector('.social__comment-shown-count').textContent = getTheInitialValueOfComments();
    fullImage.querySelector('.social__comment-total-count').textContent = miniature.querySelector('.picture__comments').textContent;
    const comments = listPhotos[index].comments;
    if (comments.length <= 5){
      createCommentList(comments);
    } else {
      showMoreButton.classList.remove('hidden');
      createCommentList(comments.splice(0,5));
      showMoreButton.addEventListener('click', () => {
        if (comments.length <= 5){
          createCommentList(comments);
          showMoreButton.classList.add('hidden');
        }else{
          createCommentList(comments.splice(0,5));
        }
      });
    }
  });
});

const closeUserModal = () => {
  const listCurrentComment = document.querySelectorAll('.social__comment');
  deleteCommentList(listCurrentComment);
  fullImage.classList.add('hidden');
  bodyScroll.classList.remove('modal-open');
  document.removeEventListener('keydown', closeUserModal);
};

buttonCancel.addEventListener('click',() => {
  closeUserModal();
});

document.addEventListener('keydown',(evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
});
