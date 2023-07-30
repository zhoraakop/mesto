
import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/InitialCard.js";
import { FormValidator } from "../components/FormValidator.js";
import { validators } from "../utils/validators.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { 
    buttonOpenAddCardPopup,
    buttonOpenEditProfilePopup,
    formAddCard,
    formEditProfile,
    inputsValue,
    buttonAvatar,
    formAvatar
 } from '../utils/constants.js';

const userInfo = new UserInfo('.profile-info__title', '.profile-info__subtitle');
const profilePopup = new Popup('#popup-info');
const addPopup = new Popup('#popup-add');
const avatarPopup = new Popup('#popup-avatar');
export const trashPopup = new Popup('#popup-trash');
const imagePopup = new PopupWithImage('#popup-image');
const profileFormValidator  = new FormValidator(validators, formEditProfile);
export const addFormValidator = new FormValidator(validators, formAddCard);
const avatarFormValidator = new FormValidator(validators, formAvatar);

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
avatarPopup.setEventListeners();

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const editForm = new PopupWithForm('#popup-info', (list) => {
    userInfo.setUserInfo(list)
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
    const card = (list);
    const newCard = createCard(card);
    section.addItem(newCard);
    addFormValidator.disableButton();
    addForm.close();
})
buttonOpenAddCardPopup.addEventListener('click', function(){
    addForm.open();
    addFormValidator.disableButton();
});
addForm.setEventListeners();

const avatarForm = new PopupWithForm('#popup-avatar', (list) => {
    const link = document.querySelector('.profile__avatar');
    link.src = list.src;
    avatarForm.close();
})

buttonAvatar.addEventListener('click', function(){
    avatarForm.open();
    avatarFormValidator.resetValidation();
})
avatarForm.setEventListeners();

function handleCardClick(name, link){
    imagePopup.open({name, link});
}

function createCard(card){
    return new Card(card, '.template', handleCardClick).createCards();
}
