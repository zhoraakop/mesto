const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');
const buttonTrash = document.querySelector('.element__trash')
const buttonAvatar = document.querySelector('.profile__avatar-button');
const inputsValue = {
    nameProfile: document.querySelector('#nameProfile'),
    information: document.querySelector('#information')
};

const formEditProfile = document.querySelector('#form');
const formAddCard = document.querySelector('#form-add');
const formAvatar = document.querySelector('#form-avatar');
const profileName = document.querySelector('.profile-info__title');
const profileInformation = document.querySelector('.profile-info__subtitle')
const profileAvatar = document.querySelector('.profile__avatar')

export{ profileAvatar , profileName,profileInformation,formAvatar, buttonAvatar, buttonTrash, buttonOpenEditProfilePopup, buttonOpenAddCardPopup, inputsValue, formEditProfile, formAddCard};