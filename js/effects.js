const sliderElement = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__item');
const image = document.querySelector(' .img-upload__preview img');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const applyAnEffect = (id, index) => {
  switch(id){
    case 'effect-chrome':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
        connect: 'lower',
      });
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `grayscale(${fieldValue.value})`;
      });
      break;
    case 'effect-sepia':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
        connect: 'lower',
      });
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `sepia(${fieldValue.value})`;
      });
      break;
    case 'effect-marvin':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
        connect: 'lower',
      });
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `invert(${fieldValue.value}%)`;
      });
      break;
    case 'effect-heat':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
        connect: 'lower',
      });
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `brightness(${fieldValue.value})`;
      });
      break;
    case 'effect-phobos':
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0,
        step: 0.1,
        connect: 'lower',

      });
      sliderElement.noUiSlider.on('update', () => {
        const fieldValue = effects[index].querySelector('.effects__radio');
        fieldValue.value = sliderElement.noUiSlider.get();
        image.style.filter = `blur(${fieldValue.value}px)`;
      });
      break;
    case 'effect-none':
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
      break;
  }
};

export {applyAnEffect};
