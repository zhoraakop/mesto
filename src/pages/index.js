
import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/InitialCard.js";
import { FormValidator } from "../components/FormValidator.js";
import { validators } from "../utils/validators.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');

const inputsValue = {
    name: document.querySelector('#name'),
    information: document.querySelector('#information')
};

const formEditProfile = document.querySelector('#form');
const formAddCard = document.querySelector('#form-add');

const userInfo = new UserInfo('.profile-info__title', '.profile-info__subtitle');
const profilePopup = new Popup('#popup-info');
const addPopup = new Popup('#popup-add');
const imagePopup = new PopupWithImage('#popup-image');
const profileFormValidator  = new FormValidator(validators, formEditProfile);
export const addFormValidator = new FormValidator(validators, formAddCard);

const section = new Section({items: initialCards,
    renderer: item => {
        section.addItem(createCard(item));
    }
    },
    '.elements');
section.renderItems();



profilePopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();
buttonOpenAddCardPopup.addEventListener('click', function(){
    addForm.open();
});

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

const editForm = new PopupWithForm('#popup-info', (list) => {
    userInfo.setUserInfo({
        name: list.name,
        information: list.information,
    })
    editForm.close();
    
})

buttonOpenEditProfilePopup.addEventListener('click', function(){
    editForm.open();
    const profileData = userInfo.getUserInfo();
    inputsValue.name.value = profileData.name;
    inputsValue.information.value = profileData.information;
    profileFormValidator.resetValidation(); 
});
editForm.setEventListeners();

const addForm = new PopupWithForm('#popup-add', (list) => {
    const card = {
        name: list.cardName,
        link: list.link,
    };
    const newCard = createCard(card);
    section.addItem(newCard);
    addFormValidator.disableButton();
    addForm.close();
})
addForm.setEventListeners();

function handleCardClick(name, link){
    imagePopup.open({name, link});
}

function createCard(card){
    return new Card(card, '.template', handleCardClick).createCards();
}
