import {applyAnEffect} from './effects.js';

const MAX_COUNT_HASHTAGS = 5;
const MAX_COUNT_CHARACTERS = 140;
const CHARACTER_SET = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_COUNT_HASHTAGS} хэштегов`,
  UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_ID: 'Неправильный хэштег',
  STRING_DESCRIPTION: 'длина комментария не может составлять больше 140 символов'
};
const uploadField = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const formSubmit = document.querySelector('.img-upload__form');
const bodyScroll = document.querySelector('body');
const buttonCancel = document.querySelector('.img-upload__cancel');
const fieldHashags = document.querySelector('.text__hashtags');
const fieldDescription = document.querySelector('.text__description');
const effects = document.querySelectorAll('.effects__item');

//Редактирование
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const fieldScale = document.querySelector('.scale__control--value');
const image = document.querySelector(' .img-upload__preview');

const openForm = () => {
  overlay.classList.remove('hidden');
  bodyScroll.classList.add('modal-open');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  effects.forEach((element, index) => {
    element.addEventListener('click',(evt) => {
      const event = evt.currentTarget;
      const currentId = event.querySelector('input').id;
      applyAnEffect(currentId, index);
    });
  });
};

const pristine = new Pristine(formSubmit, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const convertStringToArray = (stringTags) => {
  const arrayTags = stringTags.trim().toLowerCase().split(' ');
  return arrayTags;
};

const checkingTagsForQuantity = (value) => {
  const currentArrayTags = convertStringToArray(value);
  return currentArrayTags.length <= MAX_COUNT_HASHTAGS;
};

const checkingTagsForСorrectness = (value) => {
  const currentArrayTags = convertStringToArray(value);
  return currentArrayTags.every((tag) => CHARACTER_SET.test(tag));
};

const checkMessageLength = (value) => value.length < MAX_COUNT_CHARACTERS;

const checkForDuplicates = (value) => {
  const tags = convertStringToArray(value);
  const tagsUnique = [...new Set(tags)];
  return tags.length === tagsUnique.length;
};

pristine.addValidator(fieldHashags, checkingTagsForQuantity, errorText.INVALID_COUNT);
pristine.addValidator(fieldHashags, checkForDuplicates, errorText.UNIQUE);
pristine.addValidator(fieldHashags, checkingTagsForСorrectness, errorText.INVALID_ID);
pristine.addValidator(fieldDescription, checkMessageLength, errorText.STRING_DESCRIPTION);

const SubmitForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const hasFocusField = () => document.activeElement === fieldDescription || document.activeElement === fieldHashags;

const pressAKey = (evt) => {
  if (evt.key === 'Escape' && !hasFocusField()){
    evt.preventDefault();
    closeForm();
  }else{
    evt.stopPropagation();
  }
};

const closeForm = () => {
  overlay.classList.add('hidden');
  bodyScroll.classList.remove('modal-open');
  formSubmit.reset();
  pristine.reset();
  document.removeEventListener('keydown', pressAKey);
};



uploadField.addEventListener('change', openForm);
buttonCancel.addEventListener('click', closeForm);
document.addEventListener('keydown', pressAKey);
formSubmit.addEventListener('submit', SubmitForm);
buttonSmaller.addEventListener('click', zoomOut);
buttonBigger.addEventListener('click', zoomIn);

