import { Card } from "./Card.js";
import { initialCards } from "./InitialCard.js";
import { FormValidator } from "./FormValidator.js";
import { validators } from "./validators.js";

const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');

const buttonCloseEditProfilePopup = document.querySelector('#popup__close-button');
const buttonCloseAddCardPopup = document.querySelector('#popup-add__close-button');
const buttonCloseImagePopup = document.querySelector('#popup-image__close-button');

const popupEditProfile = document.querySelector('#popup-info');
export const popupAddCard = document.querySelector('#popup-add');
export const popupImage = document.querySelector('#popup-image');
const popupButton = document.querySelector('#popup__button-add')

const inputTitle = document.querySelector('#name');
const inputAddTitle = document.querySelector('#name-card');
const inputSubtitle = document.querySelector('#information');
const inputAddSubtitle = document.querySelector('#url');

const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

const formEditProfile = document.querySelector('#form');
const formAddCard = document.querySelector('#form-add');

const templateContentEl = document.querySelector('.elements');

const profileForm = new FormValidator(validators, formEditProfile);
const addForm = new FormValidator(validators, formAddCard);

buttonOpenEditProfilePopup.addEventListener('click', function(){
    openPopup(popupEditProfile);
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;  
});


popupEditProfile.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupEditProfile)});

popupImage.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupImage)});

popupAddCard.addEventListener('mousedown', (e) => {closePopupOverlay(e, popupAddCard)});

buttonOpenAddCardPopup.addEventListener('click', function(){
    openPopup(popupAddCard)
});
buttonCloseImagePopup.addEventListener('click', function(){closePopup(popupImage)});

buttonCloseAddCardPopup.addEventListener('click', function(){closePopup(popupAddCard)});

buttonCloseEditProfilePopup.addEventListener('click', function(){
    closePopup(popupEditProfile);
    profileForm.resetValidation();
});

profileForm.enableValidation();
addForm.enableValidation();

formEditProfile.addEventListener('submit', function(text){
    text.preventDefault();
    profileTitle.textContent = inputTitle.value;
    profileSubtitle.textContent = inputSubtitle.value;
    closePopup(popupEditProfile);
    
});


initialCards.forEach(function(item){
    const newCards = createCard(item.name, item.link, '.template');
    templateContentEl.prepend(newCards);
});

formAddCard.addEventListener('submit', function(text){
    text.preventDefault();
    const newCard = createCard(inputAddTitle.value, inputAddSubtitle.value, '.template');
    templateContentEl.prepend(newCard);
    inputAddSubtitle.value = '';
    inputAddTitle.value = '';
    addForm.disableButton();
    closePopup(popupAddCard);
});

function closeWithEsc(evt){
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    };
} 

export function closePopup(element){
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeWithEsc);
};

export function openPopup(element){
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeWithEsc);
};

function closePopupOverlay(e, element){
    if(e.currentTarget === e.target){
        closePopup(element);
    }
}

function createCard(name, link, template){
    return new Card(name, link, template).createCards();
}
