const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');

const buttonCloseEditProfilePopup = document.querySelector('#popup__close-button');
const buttonCloseAddCardPopup = document.querySelector('#popup-add__close-button');
const buttonCloseImagePopup = document.querySelector('#popup-image__close-button');

const popupEditProfile = document.querySelector('#popup-info');
const popupAddCard = document.querySelector('#popup-add');
const popupImage = document.querySelector('#popup-image');

const inputTitle = document.querySelector('#input-title');
const inputAddTitle = document.querySelector('#input-title-add');
const inputSubtitle = document.querySelector('#input-subtitle');
const inputAddSubtitle = document.querySelector('#input-subtitle-add');

const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

const formEditProfile = document.querySelector('#form');
const formAddCard = document.querySelector('#form-add');

const template = document.querySelector('.template');
const templateContent = template.content;
const templateContentInside = templateContent.querySelector('.element');
const templateContentEl = document.querySelector('.elements');
const popupImageEl = popupImage.querySelector('.popup__image-content');
const popupTitle = popupImage.querySelector('.popup__image-title');

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
    const newCards = createCards(item.name, item.link);
    templateContentEl.prepend(newCards);
});

function createCards(name, link){
    const cardsEl = templateContentInside.cloneNode(true);
    const imageCards = cardsEl.querySelector('.element__image');
    const textCards = cardsEl.querySelector('.element__title');
    imageCards.src = link;
    textCards.textContent = name;
    const deleteButton = cardsEl.querySelector('.element__trash');
    deleteButton.addEventListener('click', function (){
        templateContentEl.removeChild(cardsEl);
    });
    const likeButton = cardsEl.querySelector('.element__like');
    likeButton.addEventListener('click', function(event){
        event.target.classList.toggle('element__like_active');
    });
    imageCards.addEventListener('click', function(){
        openPopup(popupImage);
        popupImageEl.src = imageCards.src;
        popupImageEl.alt = imageCards.alt;
        popupTitle.textContent = textCards.textContent;
    });
    return cardsEl;
};

buttonOpenEditProfilePopup.addEventListener('click', function(){
    openPopup(popupEditProfile);
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
    
});

buttonOpenAddCardPopup.addEventListener('click', function(){
    openPopup(popupAddCard);
});

buttonCloseImagePopup.addEventListener('click', function(){
    closePopup(popupImage);
});

buttonCloseAddCardPopup.addEventListener('click', function(){
    closePopup(popupAddCard);
});

buttonCloseEditProfilePopup.addEventListener('click', function(){
    closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', function(text){
    text.preventDefault();
    closePopup(popupEditProfile);
    profileTitle.textContent = inputTitle.value;
    profileSubtitle.textContent = inputSubtitle.value;
});

formAddCard.addEventListener('submit', function(text){
    text.preventDefault();
    closePopup(popupAddCard);
    const newCard = createCards(inputAddTitle.value, inputAddSubtitle.value);
    templateContentEl.prepend(newCard);
    inputAddSubtitle.value = '';
    inputAddTitle.value = '';
});

function closePopup(element){
    element.classList.remove('popup_opened');
};

function openPopup(element){
    element.classList.add('popup_opened');
};
/////////////////////////////////////////////////
enableValidation = {
    formSelector: '.popup__form',//formElement
    inputSelector: '.popup__input',//formInput
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}; 


  