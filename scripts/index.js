const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');

const buttonCloseEditProfilePopup = document.querySelector('#popup__close-button');
const buttonCloseAddCardPopup = document.querySelector('#popup-add__close-button');
const buttonCloseImagePopup = document.querySelector('#popup-image__close-button');

const popupEditProfile = document.querySelector('#popup-info');
const popupAddCard = document.querySelector('#popup-add');
const popupImage = document.querySelector('#popup-image');
const popupButton = document.querySelector('#popup__button-add')

const inputTitle = document.querySelector('#name');
const inputAddTitle = document.querySelector('#name-card');
const inputSubtitle = document.querySelector('#information');
const inputAddSubtitle = document.querySelector('#url');

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

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        closeWithEsc(popupEditProfile);
        closeWithEsc(popupAddCard);
        closeWithEsc(popupImage);
    }
})

popupEditProfile.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupEditProfile)});

popupImage.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupImage)});

popupAddCard.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupAddCard)});

buttonOpenAddCardPopup.addEventListener('click', function(){openPopup(popupAddCard)});

buttonCloseImagePopup.addEventListener('click', function(){closePopup(popupImage)});

buttonCloseAddCardPopup.addEventListener('click', function(){closePopup(popupAddCard)});

buttonCloseEditProfilePopup.addEventListener('click', function(){closePopup(popupEditProfile)});

formEditProfile.addEventListener('submit', function(text){
    text.preventDefault();
    profileTitle.textContent = inputTitle.value;
    profileSubtitle.textContent = inputSubtitle.value;
    closePopup(popupEditProfile);
    
});

formAddCard.addEventListener('submit', function(text){
    text.preventDefault();
    const newCard = createCards(inputAddTitle.value, inputAddSubtitle.value);
    templateContentEl.prepend(newCard);
    inputAddSubtitle.value = '';
    inputAddTitle.value = '';
    disableButton();
    closePopup(popupAddCard);
});

function closePopup(element){
    element.classList.remove('popup_opened');
};

function openPopup(element){
    element.classList.add('popup_opened');
};

function closePopupOverlay(e, element){
    if(e.currentTarget === e.target){
        closePopup(element);
    }
}

function closeWithEsc(element){
    if(element.classList.contains('popup_opened')){
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
} 

function disableButton() {
    popupButton.setAttribute('disabled', true);
    popupButton.classList.add('popup__button_disabled');
}
  