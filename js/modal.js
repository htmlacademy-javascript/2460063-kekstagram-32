import './miniatures.js';
import { createCommentList, deleteCommentList } from './comments.js';
import { arrayOfPhotographs } from './data.js';

const listPhotos = arrayOfPhotographs;
const miniatures = document.querySelectorAll('.picture');
const fullImage = document.querySelector('.big-picture');
const fullImageUrl = fullImage.querySelector('.big-picture__img');
const showMoreButton = fullImage.querySelector('.social__comments-loader');

const INITIAL_QUANTITY_COMMENTS = 5;
const bodyScroll = document.querySelector('body');
const buttonCancel = fullImage.querySelector('.big-picture__cancel');
const commentsList = document.querySelectorAll('.social__comment');

let currentLoadCommentsHandler = null;

miniatures.forEach((miniature, index) => {
  miniature.addEventListener('click', () => {
    bodyScroll.classList.add('modal-open');
    fullImage.classList.remove('hidden');
    deleteCommentList(commentsList);


    const comments = listPhotos[index].comments;
    const copyComments = JSON.parse(JSON.stringify(comments));

    const getTheInitialValueOfComments = () => {
      const numComments = parseInt(miniature.querySelector('.picture__comments').textContent, 10);
      return numComments >= INITIAL_QUANTITY_COMMENTS ? INITIAL_QUANTITY_COMMENTS : numComments;
    };


    fullImageUrl.querySelector('img').src = miniature.querySelector('.picture__img').src;
    fullImageUrl.querySelector('img').alt = miniature.querySelector('.picture__img').alt;
    fullImage.querySelector('.likes-count').textContent = miniature.querySelector('.picture__likes').textContent;
    fullImage.querySelector('.social__caption').textContent = miniature.querySelector('.picture__img').alt;
    fullImage.querySelector('.social__comment-shown-count').textContent = getTheInitialValueOfComments();
    fullImage.querySelector('.social__comment-total-count').textContent = miniature.querySelector('.picture__comments').textContent;


    const loadComments = () => {
      const nextPartComment = copyComments.splice(0, 5);
      createCommentList(nextPartComment);
      let countComments = parseInt(fullImage.querySelector('.social__comment-shown-count').textContent, 10);
      countComments += nextPartComment.length;
      fullImage.querySelector('.social__comment-shown-count').textContent = countComments;
      if (copyComments.length === 0) {
        showMoreButton.classList.add('hidden');
      }
    };

    if (copyComments.length <= INITIAL_QUANTITY_COMMENTS) {
      createCommentList(copyComments);
      showMoreButton.classList.add('hidden');
    } else {
      const firstPartComments = copyComments.splice(0, 5);
      createCommentList(firstPartComments);
      showMoreButton.classList.remove('hidden');
      currentLoadCommentsHandler = loadComments;
      showMoreButton.addEventListener('click', currentLoadCommentsHandler);

    }
  });
});

const closeUserModal = () => {
  const listCurrentComment = document.querySelectorAll('.social__comment');
  deleteCommentList(listCurrentComment);
  fullImage.classList.add('hidden');
  bodyScroll.classList.remove('modal-open');
  showMoreButton.classList.add('hidden');


  if (currentLoadCommentsHandler) {
    showMoreButton.removeEventListener('click', currentLoadCommentsHandler);
  }
};

buttonCancel.addEventListener('click', closeUserModal);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
});
