const openInfoPopup = document.querySelector('.profile-info__button');
const openAddPopup = document.querySelector('.profile__add-button');

const closeButtonPopup = document.querySelector('#popup__close-button');
const closeButtonAddPopup = document.querySelector('#popup-add__close-button');
const closeImageButtonPopup = document.querySelector('#popup-image__close-button');

const editPopup = document.querySelector('#popup-info');
const editAddPopup = document.querySelector('#popup-add');
const editImagePopup = document.querySelector('#popup-image');

const inputTitle = document.querySelector('#input-title');
const inputAddTitle = document.querySelector('#input-title-add');
const inputSubtitle = document.querySelector('#input-subtitle');
const inputAddSubtitle = document.querySelector('#input-subtitle-add');

const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

const popupEditForm = document.querySelector('#form');
const popupEditAddForm = document.querySelector('#form-add');

const template = document.querySelector('.template');
const templateContent = template.content;
const templateContentInside = templateContent.querySelector('.element');
const templateContentEl = document.querySelector('.elements');
const popupImage = editImagePopup.querySelector('.popup__image-content');
const popupTitle = editImagePopup.querySelector('.popup__image-title');

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
        openPopup(editImagePopup);
        popupImage.src = imageCards.src;
        popupImage.alt = imageCards.alt;
        popupTitle.textContent = textCards.textContent;
    });
    return cardsEl;
};

openInfoPopup.addEventListener('click', function(){
    openPopup(editPopup);
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
    
});

openAddPopup.addEventListener('click', function(){
    openPopup(editAddPopup);
});

closeImageButtonPopup.addEventListener('click', function(){
    closePopup(editImagePopup);
});

closeButtonAddPopup.addEventListener('click', function(){
    closePopup(editAddPopup);
});

closeButtonPopup.addEventListener('click', function(){
    closePopup(editPopup);
});

popupEditForm.addEventListener('submit', function(text){
    text.preventDefault();
    closePopup(editPopup);
    profileTitle.textContent = inputTitle.value;
    profileSubtitle.textContent = inputSubtitle.value;
});

popupEditAddForm.addEventListener('submit', function(text){
    text.preventDefault();
    closePopup(editAddPopup);
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

