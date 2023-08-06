
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
 } from '../utils/constants.js';
import { Api } from '../components/Api.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
const _trash = document.querySelector('#popup__button-trash');

export const api = new Api({
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
trashPopup.setEventListeners();

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
//Формирование карточек
const section = new Section(item => {
        section.addItem(createCard(item));
    }
,
'.elements');

const userInfo = new UserInfo('.profile-info__title', '.profile-info__subtitle', '.profile__avatar');
let userId
///////////////////////////////////////////////////
//Получения данных с сервера(информация о пользователе, карточки)
Promise.all([api.getUserData(), api.getInitialCards()])
.then(([user, initialCards]) => {
    userInfo.setUserInfo({
        nameProfile: user.name,
        information: user.about,
    })
    userInfo.changeAvatar(user.avatar);
    userInfo.setUserId(user._id)
    userId = user._id;
    section.renderItems(initialCards);
    
})
.catch((err) => {
    console.error(err);
})

//////////////////////////////////////////////////
//Работа с формой профиля
const editForm = new PopupWithForm('#popup-info', (list) => {
    api.editProfile(list)
    .then(() => {
        userInfo.setUserInfo({
            nameProfile: list.nameProfile,
            information: list.information
        });
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
//////////////////////////////////////
//Работа с формой карточек
const addForm = new PopupWithForm('#popup-add', (list) => {
    api.postCards(list)
    .then((list) => {
        addForm.renderLoading(true, 'Создание...');
        const newCard = createCard(list);

        section.addItem(newCard);
        addFormValidator.disableButton();
        addForm.close();
    }).catch(error => console.error(`Ошибка добавления карточки: ${error}`))
})

buttonOpenAddCardPopup.addEventListener('click', function(){
    addForm.renderLoading(false);
    addForm.open();
    addFormValidator.disableButton();
});
addForm.setEventListeners();
////////////////////////////////////////
// Работа с формой аватара
const avatarForm = new PopupWithForm('#popup-avatar', (list) => {
    api.editAvatar(list)
    .then((list) => {
        avatarForm.renderLoading(true, 'Сохранение...');
        userInfo.changeAvatar(list.avatar);
        avatarFormValidator.disableButton();
        avatarForm.close();

    })
    .catch(error => console.error(`Ошибка редактирования аватара: ${error}`))
})

buttonAvatar.addEventListener('click', function(){
    avatarForm.open();
    avatarFormValidator.resetValidation();
})
avatarForm.setEventListeners();


// Confirm

const confirmPopup = new PopupConfirmation('#popup-trash', (cardId, card) => {
    console.log(cardId);
    api.deleteCard(cardId)
    .then(() => {
        card.deleteCard();
        confirmPopup.close();
        
    }).catch(err => console.error(err))
})
confirmPopup.setEventListeners();


/////////////////////////////////////////
// Функции 



function handleCardClick(name, link){
    imagePopup.open({name, link});
}

function createCard(card){
    const cardItem = new Card(card, '.template', userId, handleCardClick, () => {
        confirmPopup.open(cardItem._id, cardItem);
    },
    (liked, cardId) => {
        
        if(liked){
            api.likeRemove(cardId).then(items => cardItem.counterLikes(items.likes.length)).catch((err) => {
                console.error(err)})
        }else{
            api.likeAdd(cardId).then(items => cardItem.counterLikes(items.likes.length))
        }
    
});
    return cardItem.createCards();
}
