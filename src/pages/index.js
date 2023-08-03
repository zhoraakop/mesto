
import './index.css';
import { Card } from "../components/Card.js";
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
    formAvatar,
    profileInformation,
    profileName,
    profileAvatar
 } from '../utils/constants.js';
import { Api } from '../components/Api.js';

const api = new Api({
    baseUrl:'https://mesto.nomoreparties.co/v1/cohort-72',
    token: 'a81cafc2-2241-4342-a96b-9e7db132c0d1'
});
const profilePopup = new Popup('#popup-info');
const addPopup = new Popup('#popup-add');
const avatarPopup = new Popup('#popup-avatar');
export const trashPopup = new Popup('#popup-trash');
const imagePopup = new PopupWithImage('#popup-image');
const profileFormValidator  = new FormValidator(validators, formEditProfile);
export const addFormValidator = new FormValidator(validators, formAddCard);
const avatarFormValidator = new FormValidator(validators, formAvatar);



profilePopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

let userInfo;
let section;
await Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([user, initialCards]) => {
        userInfo = new UserInfo('.profile-info__title', '.profile-info__subtitle', '.profile__avatar');
        userInfo.setUserInfo({
            nameProfile: user.name,
            information: user.about
        })
        userInfo.changeAvatar(user.avatar);
        userInfo.setUserId(user._id)
        section = new Section({items: initialCards,
            renderer: item => {
                section.addItem(createCard(item));
            }
        },
        '.elements');
        section.renderItems();

    })
    .catch((err) => {
        console.error(err);
    })

const editForm = new PopupWithForm('#popup-info', (list) => {
    const {nameProfile, information} = list;
    api.editProfile(nameProfile, information)
    .then(() => {
        userInfo.setUserInfo({nameProfile, information});
        editForm.renderLoading(true, 'Сохранение...');
        editForm.close();
    })
    .catch(error => console.error(`Ошибка редакторовния профиля: ${error}`))
});

buttonOpenEditProfilePopup.addEventListener('click', function(){
    editForm.renderLoading(false)
    editForm.open();
    const profileData = userInfo.getUserInfo();
    inputsValue.nameProfile.value = profileData.nameProfile;
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
    userInfo.changeAvatar(list)
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
