const elementHTML = '<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35"><p class="social__text">${message}</p>';
const createCommentList = (value) =>{
  const newListComments = document.querySelector('.social__comments');
  value.forEach((item) =>{
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = elementHTML;
    commentElement.querySelector('.social__picture').src = item.avatar;
    commentElement.querySelector('.social__picture').alt = item.name;
    commentElement.querySelector('.social__text').textContent = item.message;
    newListComments.appendChild(commentElement);
  });
};
const deleteCommentList = (listComments) => {
  for(let i = 0; i <= listComments.length - 1; i++){
    listComments[i].remove();
  }
};

export {createCommentList,deleteCommentList};
