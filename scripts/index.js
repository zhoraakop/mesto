const openPopup = document.querySelector('.profile-info__button');
const openAddPopup = document.querySelector('.profile__add-button');

const closeButtonPopup = document.querySelector('#popup__close-button');
const closeButtonAddPopup = document.querySelector('#popup-add__close-button');

const editPopup = document.querySelector('#popup-info');
const editAddPopup = document.querySelector('#popup-add');

const inputTitle = document.querySelector('#input-title');
const inputAddTitle = document.querySelector('#input-title-add');
const inputSubtitle = document.querySelector('#input-subtitle');
const inputAddSubtitle = document.querySelector('#input-subtitle-add');

const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

const popupForm = document.querySelector('#form');
const popupAddForm = document.querySelector('#form-add');



const template = document.querySelector('.template');
const templateContent = template.content;
const templateContentEl = document.querySelector('.elements');


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
    const cards = templateContent.cloneNode(true);
    const image = cards.querySelector('.element__image');
    const text = cards.querySelector('.element__title');
    image.src = link;
    text.textContent = name;
    const deleteButton = cards.querySelector('.element__trash');
    deleteButton.addEventListener('click', function (){
        templateContentEl.removeChild(cards);
    });
    const like = cards.querySelector('.element__like');
    like.addEventListener('click', function(event){
        event.target.classList.toggle('element__like_active');
    });
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

closeButtonAddPopup.addEventListener('click', function(){
    closePopup(editAddPopup)
});

closeButtonPopup.addEventListener('click', function(){
    closePopup(editPopup)
});

popupForm.addEventListener('submit', function(text){
    text.preventDefault();
    closePopup(editPopup);
    profileTitle.textContent = inputTitle.value
    profileSubtitle.textContent = inputSubtitle.value;
});

popupAddForm.addEventListener('submit', function(text){
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

