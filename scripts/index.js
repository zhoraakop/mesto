const openPopup = document.querySelector('.profile-info__button');
const openAddPopup = document.querySelector('.profile__add-button');

const closePopup = document.querySelector('#popup__close-button');
const closeAddPopup = document.querySelector('#popup-add__close-button');

const editPopup = document.querySelector('#popup-info');
const editAddPopup = document.querySelector('#popup-add');

const inputTitle = document.querySelector('#input-title');
const inputTitleAdd = document.querySelector('#input-title-add');
const inputSubtitle = document.querySelector('#input-subtitle');
const inputSubtitleAdd = document.querySelector('#input-subtitle-add');

const profileTitle = document.querySelector('.profile-info__title');
const elementTitle = document.querySelector('.element__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');
const elementImage = document.querySelector('.element__image');

const popupForm = document.querySelector('#form');
const popupAddForm = document.querySelector('#form-add');

const template = document.querySelector('.template');
const templateContent = template.content;
const templateContentEl = document.querySelector('.elements')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

initialCards.forEach(function(item){
    const newcards = creatCards(item);
    templateContentEl.prepend(newcards);
});

function creatCards(item){
    const cards = templateContent.cloneNode(true);
    const image = cards.querySelector('.element__image');
    const text = cards.querySelector('.element__title');
    image.src = item.link;
    text.textContent = item.name;
    return cards;

};

openPopup.addEventListener('click', function(){
    editPopup.classList.add('popup_opened');
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
    
});

openAddPopup.addEventListener('click', function(){
    editAddPopup.classList.add('popup_opened');
});

closeAddPopup.addEventListener('click', function(){
    closepopup(editAddPopup)
});

closePopup.addEventListener('click', function(){
    closepopup(editPopup)
});

popupForm.addEventListener('submit', function(text){
    text.preventDefault();
    closepopup(editPopup);
    profileTitle.textContent = inputTitle.value
    profileSubtitle.textContent = inputSubtitle.value;
});

popupAddForm.addEventListener('submit', function(text){
    text.preventDefault();
    closepopup(editAddPopup);
    elementTitle.textContent = inputTitleAdd.value;
    elementImage.src = inputSubtitleAdd.value;
    
    const newcards = creatCards(item);
    templateContentEl.prepend(newcards);
});


function closepopup(element){
    element.classList.remove('popup_opened');
};

